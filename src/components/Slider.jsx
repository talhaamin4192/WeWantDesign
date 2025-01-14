import React, { useState, useEffect, useRef } from "react";
import img_01 from "../assets/slider-img01.webp";
import img_11 from "../assets/slider-img11.webp";
import img_12 from "../assets/slider-img12.webp";
import img_13 from "../assets/slider-img13.webp";
import img_21 from "../assets/slider-img21.webp";
import img_22 from "../assets/slider-img22.webp";
import img_31 from "../assets/slider-img31.webp";
import img_33 from "../assets/slider-img33.webp";
import img_34 from "../assets/slider-img34.webp";
import vid_01 from "../assets/slider-video1.mp4";
import vid_02 from "../assets/slider-video2.mp4";
import vid_03 from "../assets/slider-video3.mp4";

const Slider = () => {
  const [scrollY, setScrollY] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isInViewport, setIsInViewport] = useState(false);  // Track if the div is in the viewport
  const mainDivRef = useRef(null);  // Ref to the main div

  useEffect(() => {
    const handleScroll = () => {
      if (!isInViewport) return; // Don't trigger scroll effect if the div is not in viewport
      const currentScroll = window.scrollY;
      if (currentScroll > lastScrollY) {
        setScrollY((prev) => prev + 14);
      } else if (currentScroll < lastScrollY) {
        setScrollY((prev) => prev - 14);
      }
      setLastScrollY(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isInViewport]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInViewport(true);  // Start the scroll effect when the div is in view
        } else {
          setIsInViewport(false);  // Stop the scroll effect when the div is out of view
        }
      },
      { threshold: 0.1 }
    );

    if (mainDivRef.current) {
      observer.observe(mainDivRef.current);
    }

    return () => {
      if (mainDivRef.current) {
        observer.unobserve(mainDivRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={mainDivRef}
      className="w-full overflow-hidden bg-black"
      style={{ height: "100vh" }}
    >
      <div className="w-[2000px] h-[150vh] grid grid-cols-3 gap-x-5 -translate-x-80">
        <div
          className="custom-img"
          style={{
            transform: `translateY(${scrollY}px)`,
            transition: "transform 0.3s ease-out",
          }}
        >
          <img src={img_01} alt="" />
          <img src={img_11} alt="" />
          <img src={img_12} alt="" />
          <img src={img_13} alt="" />
        </div>

        <div
          className="custom-img"
          style={{
            transform: `translateY(${-scrollY}px)`,
            transition: "transform 0.3s ease-out",
          }}
        >
          <img src={img_21} alt="" />
          <video autoPlay loop muted src={vid_01}></video>
          <video autoPlay loop muted src={vid_02}></video>
          <img src={img_22} alt="" />
        </div>

        <div
          className="custom-img"
          style={{
            transform: `translateY(${scrollY}px)`,
            transition: "transform 0.3s ease-out",
          }}
        >
          <img src={img_31} alt="" />
          <video autoPlay loop muted src={vid_03}></video>
          <img src={img_33} alt="" />
          <img src={img_34} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Slider;
