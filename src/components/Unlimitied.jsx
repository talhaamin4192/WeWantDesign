import React from 'react'
import video6 from '../assets/section-vid.mp4'
import { useState, useRef, useEffect } from 'react';
const Unlimitied = () => {
  const videoRef = useRef(null);
  const [videoSize, setVideoSize] = useState(96);

  useEffect(() => {
    const handleScroll = () => {
      if (videoRef.current) {
        const rect = videoRef.current.getBoundingClientRect();
        if (rect.top <= 0) {
          setVideoSize(100);
        } else {

          setVideoSize(89);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);


    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (

    <>
      <div ref={videoRef}
        style={{
          width: `${videoSize}%`,
          height: `${videoSize}%`,
          transition: 'all 0.8s ease-out',
        }}
        className='flex items-center justify-center w-full font-GTWalsheimPro bg-white-1 h-max '>
        <div>
          <video className='h-fit w-fit' muted autoPlay loop src={video6}></video>
        </div>
      </div>
    </>
  )
}

export default Unlimitied