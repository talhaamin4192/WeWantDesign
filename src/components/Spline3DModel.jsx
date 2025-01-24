import React, { useEffect, useRef, useState } from "react";

const Spline3DModel = () => {
  const splineRef = useRef(null);
  const canvasRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const initialRotationRef = useRef(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const loadSpline = async () => {
      const { Application } = await import(
        "https://unpkg.com/@splinetool/runtime@0.9.507/build/runtime.js"
      );

      const canvas = canvasRef.current;
      const spline = new Application(canvas);
      splineRef.current = spline;

      try {
        await spline.load(
          "https://prod.spline.design/tC-s0aDtMObePOvn/scene.splinecode"
        );
        console.log("Spline scene loaded successfully");

        if (spline.runtime && spline.runtime.scene.mainObject) {
          initialRotationRef.current = { ...spline.runtime.scene.mainObject.rotation };
        }
      } catch (error) {
        console.error("Error loading Spline scene:", error);
      }
    };

    loadSpline();

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (!splineRef.current?.runtime?.scene?.mainObject) return;

    const mainObject = splineRef.current.runtime.scene.mainObject;
    const currentScrollY = window.scrollY;
    const scrollDelta = currentScrollY - lastScrollY.current;

    // Rotate based on scroll direction and speed
    const scrollRotationSpeed = 0.005; // Adjust this value to change rotation speed
    mainObject.rotation.y += scrollDelta * scrollRotationSpeed;

    // Optional: Add some vertical rotation too
    mainObject.rotation.x += Math.abs(scrollDelta) * scrollRotationSpeed * 0.2;

    lastScrollY.current = currentScrollY;
  };

  const updateRotation = (e) => {
    if (!splineRef.current?.runtime?.scene?.mainObject || !isHovering) return;

    const rect = canvasRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (e.clientX - centerX) / (rect.width / 2);
    const deltaY = (e.clientY - centerY) / (rect.height / 2);

    const mainObject = splineRef.current.runtime.scene.mainObject;
    const rotationSpeed = 0.5;

    // Store current scroll-based rotation
    const currentRotation = { ...mainObject.rotation };

    // Apply hover-based rotation on top of scroll rotation
    mainObject.rotation.x = currentRotation.x + deltaY * rotationSpeed;
    mainObject.rotation.y = currentRotation.y + deltaX * rotationSpeed;
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
    if (splineRef.current?.runtime?.scene?.mainObject) {
      // Store rotation including any scroll-based rotation
      initialRotationRef.current = {
        ...splineRef.current.runtime.scene.mainObject.rotation
      };
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    if (splineRef.current?.runtime?.scene?.mainObject && initialRotationRef.current) {
      // Keep the current rotation without resetting to allow scroll rotation to continue
      const mainObject = splineRef.current.runtime.scene.mainObject;
      mainObject.rotation.x = mainObject.rotation.x; // Maintain current rotation
      mainObject.rotation.y = mainObject.rotation.y;
    }
  };

  return (
    <div
      className="relative w-full h-[130vh] bg-transparent overflow-hidden bg-gray-100"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={updateRotation}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block object-cover"
      />
    </div>
  );
};

export default Spline3DModel;