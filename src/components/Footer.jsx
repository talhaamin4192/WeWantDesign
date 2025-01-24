import React from 'react'
import logo from '../assets/logo.svg'
import facebook from '../assets/facebook-svg.svg'
import twitter from '../assets/twitter-svg.svg'
import instagram from '../assets/instagram-svg.svg'
import linkedin from '../assets/linkedin-svg.svg'
import arrow_up from "../assets/arrow-up.svg"
import { Link } from 'react-router-dom'
import person from '../assets/fixed-img.webp'
import phoneS from "../assets/phone-fixed.svg"
const Footer = () => {
    return (
        <>
            <div className='fixed -z-10 bottom-0 flex flex-col justify-center w-full h-screen bg-black-2 font-GTWalsheimPro lg:py-10'>

                <div>
                </div>
                <div className='grid grid-cols-custom-c gap-14 mb-14 lg:px-16 '>
                    <div className='flex flex-col gap-7'>
                        <img src={logo} className='w-[170px]' alt="" />
                        <p className='text-grey-2'>Your on-demand design team <br />  producing quality designs that drives <br /> results</p>
                        <p className='text-grey-2'>+1 (205) 687‑8151</p>
                        <div className='flex gap-2'>
                            <img className='rounded-lg hover:shadow-custom-shadow' src={facebook} alt="" />
                            <img className='rounded-lg hover:shadow-custom-shadow' src={twitter} alt="" />
                            <img className='rounded-lg hover:shadow-custom-shadow' src={instagram} alt="" />
                            <img className='rounded-lg hover:shadow-custom-shadow' src={linkedin} alt="" />
                        </div>
                    </div>
                    <div className='flex justify-between text-white '>
                        <div >
                            <h3 className='text-xl font-semibold '>Design by</h3>
                            <ul className='text-grey-2 [&>*]:mt-4'>
                                <li className='custom-li' > <Link>Locations</Link> </li>
                                <li className='custom-li' > <Link>Industries</Link> </li>
                                <li className='custom-li' > <Link>Use cases</Link> </li>
                                <li className='custom-li' > <Link>Services</Link> </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className='text-xl font-semibold '>Resources</h3>
                            <ul className='text-grey-2 [&>*]:mt-4'>
                                <li className='custom-li' > <Link>Blog</Link> </li>
                                <li className='custom-li' > <Link>Podcast</Link> </li>
                                <li className='custom-li' > <Link> E-book</Link></li>
                                <li className='custom-li' > <Link>Guides</Link> </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className='text-xl font-semibold '>Company</h3>
                            <ul className='text-grey-2 [&>*]:mt-4'>
                                <li className='custom-li' > <Link>Case study</Link> </li>
                                <li className='custom-li' > <Link>Portfolio</Link> </li>
                                <li className='custom-li' > <Link>Careers</Link> </li>
                                <li className='custom-li' > <Link>Contact</Link> </li>
                            </ul>
                        </div>
                    </div>
                    <div className='font-semibold text-44'>
                        <h2 className='text-white'>Let’s build something great</h2>
                        <div className='flex items-center gap-3'>
                            <h2 className='text-neon '>let’s talk </h2>
                            <div className='inline-block p-4 rounded-t-full rounded-br-full bg-neon'><img src={arrow_up} alt="" /></div>
                            <span></span>


                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-between h-14 border-y-1 border-border-cstm lg:px-16'>
                    <p className=' text-footer-1'>We Want Design © 2024</p>
                    <div >
                        <ul className='flex [&>*]:text-footer-2 gap-7 text-sm'>
                            <li className='custom-li' > <Link>Manage Subscription</Link> </li>
                            <li className='custom-li' > <Link>Terms of Serivces</Link> </li>
                            <li className='custom-li' > <Link>Privacy Policy</Link> </li>
                        </ul>
                    </div>
                </div>

            </div>
            <div className='fixed justify-between font-GTWalsheimPro items-center px-8 flex w-9/12 h-20 mx-auto bg-white items left-44 bottom-4 rounded-2xl'>
                <div className='flex gap-3'>
                    <img className='size-14' src={person} alt="" />
                    <div className='text-18 flex  items-center gap-1 font-semibold ' >
                        <div>Giving</div>
                        <div className='overflow-hidden h-6 '>
                            <div className=' animate-translate-width1 text-nowrap  ' >
                                <div className='text-nav-purple' >Clients</div>
                                <div className='text-nav-orange' >Founders</div>
                                <div className='text-nav-purple' >Marketing Team & CMOs</div>
                                <div className='text-nav-blue'>Tech Teams & CTOs</div>
                                <div className='text-nav-orange' >Agencies</div>
                                <div className='text-nav-purple' >Venture Partners</div>
                                <div className='text-nav-purple' >Clients</div>
                            </div>
                        </div>
                        <div>their time back</div>
                    </div>
                </div>
                <div className=' flex  bottom-4 items-center gap-5 z-50 text-14 '>
                    <button className='bg-black-2 text-white rounded-xl px-9 py-5'>View Pricing 💰</button>
                    <button className='flex gap-2 items-center bg-neon px-9 py-5 rounded-xl'>Book a Call <img src={phoneS} alt="" /> </button>
                </div>
            </div>
        </>
    )
}

export default Footer