import React, { useState, useEffect, useRef } from "react";
import graph from "../assets/results-svg-1.svg";
import graph2 from "../assets/results-svg-2.svg";
import graph3 from "../assets/results-svg-3.svg";
import graph4 from "../assets/results-svg-4.svg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Results = () => {
  const [scrollY, setScrollY] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isInViewport, setIsInViewport] = useState(false);
  const mainDivRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!isInViewport) return;
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
          setIsInViewport(true);
        } else {
          setIsInViewport(false);
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

  useEffect(() => {
    // Skew effect for the entire section
    let skewSetter = gsap.quickSetter('.results-container', 'skewY', 'deg')
    let proxy = { skew: 0 }
    let clamp = gsap.utils.clamp(-3, 3)

    ScrollTrigger.create({
      trigger: '.results-container', // Set trigger for the entire section
      start: 'top bottom',
      end: 'bottom top',
      onUpdate: (self) => {
        let skew = clamp(self.getVelocity() / -500) // Adjusted velocity for smoother effect
        if (Math.abs(skew) > Math.abs(proxy.skew)) {
          proxy.skew = skew
          gsap.to(proxy, {
            skew: 0,
            duration: 0.8,
            ease: 'power3',
            overwrite: true,
            onUpdate: () => skewSetter(proxy.skew),
          })
        }
      },
    })

    // Cleanup ScrollTriggers
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill())
    }
  }, []);

  return (
    <div
      ref={mainDivRef}
      className="flex items-center w-full h-screen overflow-hidden results-container font-GTWalsheimPro bg-offwhite lg:px-16"
    >
      <div>
        <h1 className="text-6xl font-semibold lg:w-9/12">
          Results that speak for
          <span className="lg:inline-block lg:my-2 bg-text bg-h text-slate-1">
            themselves
          </span>
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-x-5">
        <div
          className="[&>*]:rounded-xl [&>*]:shadow-lg [&>*]:bg-white [&>*]:my-5 transition-transform duration-300 ease-out"
          style={{
            transform: `translateY(${scrollY}px)`,
          }}
        >
          <div>
            <div className="custom-div">
              <h2 className="text-72">150%</h2>
              <p className="text-work-p">longer average session duration after the Flo website relaunch.</p>
            </div>
            <div>
              <img src={graph} alt="" />
            </div>
          </div>
          <div>
            <div className="custom-div">
              <h2 className="text-72">$1.5B</h2>
              <p className="text-work-p">In total funding secured by our clients from most desired VCs.</p>
            </div>
          </div>
          <div>
            <div className="custom-div">
              <h2 className="text-72">40k</h2>
              <p className="text-work-p">More organic traffic to Bellroy website from just one Landing Page.</p>
            </div>
            <div>
              <img src={graph2} alt="" />
            </div>
          </div>
          <div>
            <div className="custom-div">
              <h2 className="text-72">€400M</h2>
              <p className="text-work-p">2 years after the website relaunch, Al Fursa has successfully sold the company.</p>
            </div>
          </div>
        </div>

        <div
          className="[&>*]:rounded-xl [&>*]:shadow-lg [&>*]:bg-white [&>*]:my-5 transition-transform duration-300 ease-out"
          style={{
            transform: `translateY(${-scrollY}px)`,
          }}
        >
          <div>
            <div className="custom-div">
              <h2 className="text-72">-10%</h2>
              <p className="text-work-p">Reduced bounce rate after the relaunch of the Sypore website.</p>
            </div>
            <div>
              <img src={graph3} alt="" />
            </div>
          </div>
          <div>
            <div className="custom-div">
              <h2 className="text-72">€20M</h2>
              <p className="text-work-p">Raised by Funnel CRM through UI design & Pitch deck we designed.</p>
            </div>
          </div>
          <div>
            <div className="custom-div">
              <h2 className="text-72">400%</h2>
              <p className="text-work-p">Increased conversion rate 3 months after Bland to Brand relaunch.</p>
            </div>
            <div>
              <img src={graph4} alt="" />
            </div>
          </div>
          <div>
            <div className="custom-div">
              <h2 className="text-72">3x</h2>
              <p className="text-work-p">More leads two months after the relaunch of the ExperLabs website.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
