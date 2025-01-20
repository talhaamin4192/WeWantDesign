import React from 'react'
import Header from "./Header"
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
const Hero = () => {
  return (
    <>
      <div className='h-screen w-full bg-neon' >
        <Header></Header>
        <div className='size-full flex justify-center '>
        <DotLottieReact
      src="https://lottie.host/a1a1b153-674c-4582-99f0-d6e407b76901/is6OAGGyfk.lottie"
      loop
      autoplay
    />
         

        </div>
      </div>
    </>

  )
}

export default Hero