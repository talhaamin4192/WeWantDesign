import React from 'react'
import Spline3DModel from "../components/Spline3DModel";
const Started = () => {
    return (
        <>
            <div className='w-full h-max font-GTWalsheimPro bg-white lg:py-20 rounded-b-45  '>
                <div className='relative h-[100vh] flex justify-center items-center'>
                    <h1 className='text-[15vw] absolute  font-bold '>Get Started</h1>
                    <div>
                        <Spline3DModel />
                    </div>
                </div>
                <div>
                    <p className='font-Grifter text-3xl font-semibold tracking-tighter  text-center'>Let’s book a meeting 👋</p>
                </div>
            </div>
        </>
    )
}

export default Started