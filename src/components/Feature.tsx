import React from 'react'
import SignatureImage from './../assets/signature.png'
import ChronoImage from './../assets/chrono.png'
import VintageImage from './../assets/vintage.png'

function Feature() {
  return (
    <div className='flex flex-col justify-center items-center bg-white text-black p-5'>
        <h2>Featured collections</h2>
        <div className='flex flex-row gap-10 p-10'>
            <div className='flex flex-col items-center'>
                <img className='w-70 h-70 object-cover rounded-md' src={SignatureImage} alt="" />
                <h3>Signature Series</h3>
            </div>
            <div className='flex flex-col items-center'>
                <img className='w-70 h-70 object-cover rounded-md' src={ChronoImage} alt="" />
                <h3>Chrono Series</h3>
            </div>
            <div className='flex flex-col items-center'>
                <img className='w-70 h-70 object-cover rounded-md' src={VintageImage} alt="" />
                <h3>Vintage Series</h3>
            </div>
        </div>
    </div>
  )
}

export default Feature