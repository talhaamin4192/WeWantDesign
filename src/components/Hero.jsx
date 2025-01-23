import React from 'react'
import Header from "./Header"
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
const Hero = () => {
  return (
    <>
      <div className='h-screen w-full bg-neon' >
        <Header></Header>
        <div className='size-full r '>
          <DotLottieReact
            src="https://lottie.host/2c56e30c-8191-4392-9803-9dc3a86f8fb2/XeVuKc3kT8.lottie"
            loop
            autoplay
          />
        </div>
      </div>
    </>

  )
}

export default Hero