import React from 'react'
import img from '../assets/img/feature.jpg'
import pc1 from '../assets/img/service.png'
import pc2 from '../assets/img/user.png'
import pc3 from '../assets/img/wallet.png'

const Features = () => {
  return (
    <div className=' min-h-screen flex flex-col lg:flex-row items-center md:mx-32 mx-5 gap-14'>
        <div className=' w-full lg:w-2/4'>
            <div className=' space-y-4'>
                <h1 className=' text-4xl font-medium text-center md:text-start leading-tight'>Get ready to explore, Get ready to experience</h1>
                <p> Discover the Best Holiday Experiences with Trip! We're
            dedicated to curating the latest and greatest destinations from
            around the world, ensuring you always get the ultimate travel
            experience.</p>
            </div>
            <div className=' w-full lg:w-3/5 mt-10 lg:ml-14'>
                <img className=' rounded-xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]' src={img} alt="img" />
            </div>
        </div>
        <div className='w-full lg:w-2/4 space-y-10'>
            <div className='flex flex-row gap-5'>
                <div className='flex flex-row items-center w-24'>
                    <img src={pc1} alt="" />
                </div>
                <div className='space-y-3'>
                    <h1 className='font-semibold text-xl'>Friendly service</h1>
                    <p className='text-[#898888]'>We will provide excellent and friendly service for the sake of our
              customers.</p>
                </div>
            </div>

            <div className='flex flex-row gap-5'>
                <div className='flex flex-row items-center w-28'>
                    <img src={pc2} alt="" />
                </div>
                <div className='space-y-3'>
                    <h1 className='font-semibold text-xl'>Unforgettable experience</h1>
                    <p className='text-[#898888]'>We will provide excellent and Unforgettable experience for the
              sake of our customers.</p>
                </div>
            </div>

            <div className='flex flex-row gap-5'>
                <div className='flex flex-row items-center w-24'>
                    <img src={pc3} alt="" />
                </div>
                <div className='space-y-3'>
                    <h1 className='font-semibold text-xl'>Affordable price</h1>
                    <p className='text-[#898888]'>We will provide excellent and Affordable prices for the sake of
              our customers.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Features