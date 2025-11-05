import React from 'react'
import HeroImage from './../assets/Rolex-Oyster.png'

function Hero() {
  return (
    <div className='relative'>
        <img className='object-cover w-full h-[70vh]' src={HeroImage} alt="" />
        <div className='flex flex-col absolute left-4 top-1/2 -translate-y-1/2 p-2 ml-20 gap-y-2'>
            <h1>Discover Timeless</h1>
            <button className='w-48 h-12'>Explore collection</button>
        </div>
    </div>
  )
}

export default Hero