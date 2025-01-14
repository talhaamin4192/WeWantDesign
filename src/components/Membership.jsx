import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import arrow from "../assets/arrow-icon.svg"
import tick from "../assets/tick.svg"
import tick2 from "../assets/tick2.svg"
import arrow2 from "../assets/arrow-2.svg"
import phone from "../assets/phone.png"
import cash from "../assets/cash.svg"
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Membership = () => {
    useEffect(() => {
        // Skew effect for the entire section
        let skewSetter = gsap.quickSetter('.membership-container', 'skewY', 'deg')
        let proxy = { skew: 0 }
        let clamp = gsap.utils.clamp(-3, 3)

        ScrollTrigger.create({
            trigger: '.membership-container', // Set trigger for the entire section
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
        <div className='w-full membership-container lg:px-16 lg:py-10 h-max font-GTWalsheimPro bg-white'>
            <div className='flex justify-between membership-flex'>
                <div>
                    <h1 className='text-6xl font-semibold lg:w-1/12 text-slate-1'>
                        <span className='text-black lg:inline-block bg-text bg-h'>Membership</span>plans
                    </h1>
                </div>
                <div className='flex flex-col gap-5'>
                    <p className='text-work-p'>
                        Simple and straight-forward pricing. <br />
                        <span className='font-bold'>No fluff, No hidden charges.</span>
                    </p>
                    <div className='grid grid-cols-3 text-center px-5 py-3 rounded-xl text-work-p bg-white-2 [&>*]:px-7 [&>*]:py-3 [&>*]:rounded-lg'>
                        <Link to='/' className='focus:bg-purple-1 focus:text-black'>
                            Monthly
                        </Link>
                        <Link to='/' className='focus:bg-purple-1 focus:text-black'>
                            Quarterly
                        </Link>
                        <Link to='/' className='focus:bg-purple-1 focus:text-black'>
                            Yearly
                        </Link>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-3 px-8 py-10 [&>*]:px-7 [&>*]:pt-14 [&>*]:pb-11 [&>*]:border-1 [&>*]:rounded-30 gap-10'>
                <div className='transition-transform duration-300 hover:-translate-y-5 hover:rounded-2xl'>
                    <div>
                        <h4 className='text-xl'>Design</h4>
                        <p className='text-work-p'>Made for your day-to-day design needs</p>
                    </div>

                    <div>
                        <div className='flex items-end pt-4 pb-1'>
                            <h2 className='text-4xl'>$4,999</h2>
                            <h6 className='text-work-p text-13'>+ tax /mo</h6>
                        </div>
                        <h5 className='text-work-p'>Paid monthly</h5>
                    </div>
                    <div className='py-7'>
                        <button className='custom-btn1 group bg-neon'>
                            Start Today <span className='custom-hover'>
                                <img src={arrow} alt='' />
                            </span>
                        </button>
                    </div>
                    <div className='py-2'>
                        <h3 className='font-semibold tracking-wide'>What’s included</h3>
                        <ul className='pt-6 leading-loose text-work-p [&>*]:flex [&>*]:gap-2'>
                            <li>
                                <img src={tick} alt='' />One request at a time
                            </li>
                            <li>
                                <img src={tick} alt='' />Unlimited brands
                            </li>
                            <li>
                                <img src={tick} alt='' />Unlimited users
                            </li>
                            <li>
                                <img src={tick} alt='' />Unlimited revisions
                            </li>
                            <li>
                                <img src={tick} alt='' />Easy credit-card payments
                            </li>
                            <li>
                                <img src={tick} alt='' />Pause or cancel anytime
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='relative transition-transform duration-300 hover:-translate-y-5 bg-off2 hover:rounded-2xl'>
                    <span className='absolute px-4 py-2 rounded-lg -top-4 left-32 bg-neon text-12'>
                        Most popular
                    </span>
                    <div>
                        <h4 className='text-xl'>Design + Dev</h4>
                        <p className='text-work-p'>A turnkey design and development solution</p>
                    </div>

                    <div>
                        <div className='flex items-end pt-4 pb-1'>
                            <h2 className='text-4xl'>$7,999</h2>
                            <h6 className='text-work-p text-13'>+ tax /mo</h6>
                        </div>
                        <h5 className='text-work-p'>Paid monthly</h5>
                    </div>
                    <div className='py-6'>
                        <div className='relative z-20 overflow-hidden p-sm2 rounded-2xl py-sm2 group'>
                            <span className='absolute h-96 w-96 rotate-custom-rotate transition-transform group-hover:rotate-[360deg] duration-700 ease-in-out bg-grad-2 -top-20 -right-7 -z-10'></span>
                            <button className='z-20 custom-btn1 bg-off2'>
                                Start Today <span className='w-4'>
                                    <img src={arrow} alt='' />
                                </span>
                            </button>
                        </div>
                    </div>

                    <div className='py-2'>
                        <h3 className='font-semibold tracking-wide'>What’s included</h3>
                        <ul className='pt-6 leading-loose text-work-p [&>*]:flex [&>*]:gap-2'>
                            <li className='text-red-1'>
                                <img src={tick2} alt='' />Two requests at a time
                            </li>
                            <li>
                                <img src={tick} alt='' />Unlimited brands
                            </li>
                            <li>
                                <img src={tick} alt='' />Unlimited users
                            </li>
                            <li>
                                <img src={tick} alt='' />Unlimited revisions
                            </li>
                            <li>
                                <img src={tick} alt='' />Easy credit-card payments
                            </li>
                            <li>
                                <img src={tick} alt='' />Pause or cancel anytime
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='transition-transform duration-300 bg-black hover:-translate-y-5 hover:rounded-2xl'>
                    <div>
                        <h4 className='text-xl text-white'>Design + Creative</h4>
                        <p className='text-work-p'>A turnkey marketing and design solution for creative needs</p>
                    </div>

                    <div>
                        <div className='flex items-end pt-4 pb-1'>
                            <h2 className='text-4xl text-white'>$7,999</h2>
                            <h6 className='text-work-p text-13'>+ tax /mo</h6>
                        </div>
                        <h5 className='text-work-p'>Paid monthly</h5>
                    </div>
                    <div className='py-6'>
                        <div className='relative z-20 overflow-hidden p-sm2 rounded-2xl py-sm2 group'>
                            <span className='absolute h-96 w-96 rotate-custom-rotate transition-transform group-hover:rotate-[360deg] duration-700 ease-in-out bg-grad-3 -top-20 -right-7 -z-10'></span>
                            <button className='z-20 bg-black custom-btn1 text-neon'>
                                Start Today <span className='w-4'>
                                    <img src={arrow2} alt='' />
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className='py-2'>
                        <h3 className='font-semibold tracking-wide text-white'>What’s included</h3>
                        <ul className='pt-6 leading-loose text-work-p [&>*]:flex [&>*]:gap-2'>
                            <li className='text-red-1'>
                                <img src={tick2} alt='' />Two requests at a time
                            </li>
                            <li>
                                <img src={tick} alt='' />Unlimited brands
                            </li>
                            <li>
                                <img src={tick} alt='' />Unlimited users
                            </li>
                            <li>
                                <img src={tick} alt='' />Unlimited revisions
                            </li>
                            <li>
                                <img src={tick} alt='' />Easy credit-card payments
                            </li>
                            <li>
                                <img src={tick} alt='' />Pause or cancel anytime
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-2 lg:px-8 [&>*]:border-1 [&>*]:rounded-30 gap-8'>
                <div className='flex gap-10 px-8 py-10 transition-transform duration-300 hover:-translate-y-5 hover:rounded-2xl bg-neon'>
                    <div className='flex flex-col gap-5'>
                        <h2 className='text-3xl'>Book a call</h2>
                        <p>Learn about how we can help you grow your business with the right design partner</p>
                        <div>
                            <button className='text-white bg-black custom-btn2 px-9 group'>
                                Book a Call <span className='custom-hover'>
                                    <img className='invert' src={arrow} alt='' />
                                </span>
                            </button>
                        </div>
                    </div>
                    <img className='h-[142px] w-[114px]' src={phone} alt='' />
                </div>
                <div className='flex gap-10 px-8 py-10 transition-transform duration-300 hover:-translate-y-5 hover:rounded-2xl'>
                    <div className='flex flex-col gap-5'>
                        <h2 className='text-3xl'>Refer a friend & earn</h2>
                        <p>Earn 10% monthly recurring for each friend that you refer</p>
                        <div>
                            <button className='text-white bg-black custom-btn2 px-9 group'>
                                Refer & Earn <span className='custom-hover'>
                                    <img className='invert' src={arrow} alt='' />
                                </span>
                            </button>
                        </div>
                    </div>
                    <img className='h-[142px] w-[114px]' src={cash} alt='' />
                </div>
            </div>
        </div>
    )
}

export default Membership
