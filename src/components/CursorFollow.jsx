import React, { useEffect } from "react";
import { gsap } from "gsap";

function CursorFollow() {
  useEffect(() => {
    const cursor = document.querySelector(".custom-cursor");

    const handleMouseMove = (e) => {
      // Use GSAP to smoothly follow the mouse
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1, // Smoothness of the movement
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div>
      <div
        className="custom-cursor"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "15px",
          height: "15px",
          backgroundColor: "black",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9999,
          transform: "translate(-50%, -50%)",
        }}
      ></div>
      <h1 style={{ textAlign: "center", marginTop: "50px" }}>
        Move your mouse around!
      </h1>
    </div>
  );
}

export default CursorFollow;
