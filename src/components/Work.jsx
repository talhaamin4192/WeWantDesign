import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
    useEffect(() => {
        // Skew animation (remains the same)
        let skewSetterItems = gsap.quickSetter('.work-item', 'skewY', 'deg');
        let skewSetterHeading = gsap.quickSetter('.work-heading', 'skewY', 'deg');
        let proxyItems = { skew: 0 };
        let proxyHeading = { skew: 0 };
        let clamp = gsap.utils.clamp(-3, 3);

        ScrollTrigger.create({
            onUpdate: (self) => {
                let skew = clamp(self.getVelocity() / -300);
                if (Math.abs(skew) > Math.abs(proxyItems.skew)) {
                    proxyItems.skew = skew;
                    gsap.to(proxyItems, {
                        skew: 0,
                        duration: 0.8,
                        ease: 'power3',
                        overwrite: true,
                        onUpdate: () => skewSetterItems(proxyItems.skew),
                    });
                }
            },
        });

        ScrollTrigger.create({
            onUpdate: (self) => {
                let skew = clamp(self.getVelocity() / -400);
                if (Math.abs(skew) > Math.abs(proxyHeading.skew)) {
                    proxyHeading.skew = skew;
                    gsap.to(proxyHeading, {
                        skew: 0,
                        duration: 0.8,
                        ease: 'power3',
                        overwrite: true,
                        onUpdate: () => skewSetterHeading(proxyHeading.skew),
                    });
                }
            },
        });

        // Animation for the dotted line - it will grow until it reaches the center of each `work-circle`
        gsap.fromTo(
            '.dotted-line',
            { height: '0%' }, // Start from zero height
            {
                height: '50%', // Stop at 50% (center of each circle)
                scrollTrigger: {
                    trigger: '.work-item', // Target each work item
                    start: 'top 80%', // Start when it's close to the center
                    end: 'bottom 20%', // End when it's halfway through the item
                    scrub: true, // Smooth transition with scroll
                    markers: false, // Remove markers
                },
                ease: 'power2.out',
            }
        );

        // Cleanup ScrollTriggers
        return () => {
            ScrollTrigger.getAll().forEach((st) => st.kill());
        };
    }, []);

    return (
        <div className="grid w-full grid-cols-2 lg:px-16 lg:py-32 font-GTWalsheimPro bg-white">
            <div>
                <h1 className="sticky text-6xl top-28 lg:w-1/2 work-heading">
                    How it<span className="lg:inline-block bg-text bg-h text-slate-1">works</span>
                </h1>
            </div>
            <div className="relative flex flex-col gap-28 [&>*]:flex lg:[&>*]:w-7/12 [&>*]:items-start [&>*]:gap-6">
                {/* Dotted line */}
                <div className="absolute left-44 transform -translate-x-1/2 top-0 h-full w-0.5 bg-dotted-line dotted-line"></div>

                {['Subscribe', 'Request', 'Approve'].map((title, index) => (
                    <div key={index} className="relative flex items-center justify-center work-item">
                        {/* Position the number in the center */}
                        <div className="relative work-circle">{`0${index + 1}`}</div>
                        <div>
                            <h2 className="leading-10 text-46">{title}</h2>
                            <p className="py-5 text-work-p">
                                {index === 0
                                    ? 'Choose a plan and start instantly. No pesky contracts or limited scope.'
                                    : index === 1
                                        ? 'Start sending us your design requests, and you\'ll receive them in 24-48 hours on average.'
                                        : 'We\'ll make revisions until you\'re 100% satisfied.'}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Work;
