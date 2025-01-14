import React from 'react'
import Header from "./Header"
import herosvg from "../assets/hero-svg.svg"
const Hero = () => {
  return (
    <>
    <div className='h-max w-full bg-neon' >
    <Header></Header>
    <img height="100%" width="100%"  src={herosvg} alt="" />
    </div>
    </>

  )
}

export default Hero