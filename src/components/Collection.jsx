import React from 'react'
import video1 from '../assets/video1.mp4'
import video2 from '../assets/video2.mp4'
import video3 from '../assets/video3.mp4'
import video4 from '../assets/video4.mp4'
import video5 from '../assets/video5.mp4'

const Collection = () => {
    return (
        <>
            <div className='w-full h-max relative bg-black'>
                <div className='h-screen w-full  ' >
                    <video width="100%" className='absolute right-0 left-0 -top-14 -z-10' autoPlay muted loop src={video1}></video>
                </div>
                <div className=' w-full ' >
                    <video width="100%" autoPlay muted loop src={video2}></video>
                </div>
                <div className=' w-full' >
                    <video width="100%" autoPlay muted loop src={video3}></video>
                </div>
                <div className=' w-full' >
                    <video width="100%" autoPlay muted loop src={video4}></video>
                </div>
                <div className=' w-full' >
                    <video width="100%" autoPlay muted loop src={video5}></video>
                </div>
            </div>

        </>
    )
}

export default Collection