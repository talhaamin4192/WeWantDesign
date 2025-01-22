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
      src="https://lottie.host/8a74d9ce-0e34-4181-86dd-19ab680367e3/IxGsgeQK1Y.lottie"
      loop
      autoplay
    />

        </div>
      </div>
    </>

  )
}

export default Hero