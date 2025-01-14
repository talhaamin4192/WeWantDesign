import React, { useEffect, useState } from 'react'
import arrow_left from "../assets/arrow-left.svg"
import arrow_right from "../assets/arrow-right.svg"
import profile1 from "../assets/chris.webp"
import profile2 from "../assets/ethan.webp"
import profile3 from "../assets/Alex.webp"
import profile4 from "../assets/Alberta.png"
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Certified = () => {
    const [currentPosition, setCurrentPosition] = useState(0);
    const totalDivs = 3;  // Assuming totalDivs is 3

    const handleLeftClick = () => {
        if (currentPosition > 0) {
            setCurrentPosition(currentPosition - 1);
        }
    };

    const handleRightClick = () => {
        if (currentPosition < totalDivs - 1) {
            setCurrentPosition(currentPosition + 1);
        }
    };

    useEffect(() => {
        // Skew effect for the entire section
        let skewSetter = gsap.quickSetter('.certified-container', 'skewY', 'deg')
        let proxy = { skew: 0 }
        let clamp = gsap.utils.clamp(-3, 3)

        ScrollTrigger.create({
            trigger: '.certified-container', // Set trigger for the entire section
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
    }, [])

    return (
        <>
            <div className='w-full certified-container font-GTWalsheimPro lg:px-16 lg:py-20 bg-white'>
                <div>
                    <h1 className='text-6xl font-semibold lg:w-1/2'>Trusted by 100+<span className='lg:inline-block lg:my-2 bg-text bg-h text-slate-1'>ambitious companies</span></h1>
                </div>
                <div className='flex items-center justify-between py-16'>
                    <button onClick={handleLeftClick} className='flex items-center justify-center transition-transform duration-300 rounded-full size-20 border-1 hover:bg-black hover:scale-125 group '>
                        <img className='group-hover:invert' src={arrow_left} alt="" />
                    </button>
                    <div className='overflow-hidden w-74'>
                        <div className='w-[264vw] [&>*]:w-[65.91vw] flex'
                            style={{
                                transform: `translateX(-${currentPosition * 65.91}vw)`,
                                transition: 'transform 0.3s ease-in-out',
                            }}>
                            <div className='flex flex-col gap-14'>
                                <div>
                                    <p className='leading-relaxed text-34'>I received stellar reviews on my pitch deck, one investor even commented, "This is the best pitch deck I have seen in the industry.</p>
                                </div>
                                <div className='flex items-center gap-5'>
                                    <img className='w-20 h-20 rounded-full' src={profile1} alt="" />
                                    <div className='flex flex-col gap-1'>
                                        <h3 className='text-xl font-semibold'>Chris Geoff</h3>
                                        <h4 className='text-work-p text-18'>Founder at Contiant</h4>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col gap-14'>
                                <div>
                                    <p className='leading-relaxed text-34'>We worked with We Want Design for our social media graphics, and the results were amazing! We saw a 30% increase in customer engagement and a significant rise in app downloads thanks to their team.</p>
                                </div>
                                <div className='flex items-center gap-5'>
                                    <img className='w-20 h-20 rounded-full' src={profile2} alt="" />
                                    <div className='flex flex-col gap-1'>
                                        <h3 className='text-xl font-semibold'>Ethan Kent</h3>
                                        <h4 className='text-work-p text-18'>Founder at FlashFood</h4>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col gap-14'>
                                <div>
                                    <p className='leading-relaxed text-34'>After We Want Design worked on our website redesign, we saw a 25% reduction in bounce rate and a 40% increase in online leads, highly recommended!</p>
                                </div>
                                <div className='flex items-center gap-5'>
                                    <img className='w-20 h-20 rounded-full' src={profile3} alt="" />
                                    <div className='flex flex-col gap-1'>
                                        <h3 className='text-xl font-semibold'>Alex Whittaker</h3>
                                        <h4 className='text-work-p text-18'>Marketing Lead at Fokus</h4>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col gap-14'>
                                <div>
                                    <p className='leading-relaxed text-34'>Our product sales increased by 40% and our shelf visibility increased in stores with We Want Design’s help, and we couldn’t be happier with their services.</p>
                                </div>
                                <div className='flex items-center gap-5'>
                                    <img className='w-20 h-20 rounded-full' src={profile4} alt="" />
                                    <div className='flex flex-col gap-1'>
                                        <h3 className='text-xl font-semibold'>Alberta Greg</h3>
                                        <h4 className='text-work-p text-18'>Marketing Manager at Aromi</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button onClick={handleRightClick} className='flex items-center justify-center transition-transform duration-300 rounded-full size-20 border-1 hover:bg-black hover:scale-125 group '>
                        <img className='group-hover:invert' src={arrow_right} alt="" />
                    </button>
                </div>
            </div>
        </>
    )
}

export default Certified
