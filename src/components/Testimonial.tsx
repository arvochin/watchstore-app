import React from 'react'

function Testimonial() {
  return (
    <div className='flex flex-col justify-center items-center bg-white text-black p-5'>
        <h2>Our Partners</h2>
        <div className='flex flex-row gap-5 m-5 p-5'>
            <div className='mr-5 pt-2 border-t border-t-gray-400'>
                <img src="" alt="" />
                <p className='font-bold'>Versace</p>
                <p>Our store is proud to be an official partner of Versace, offering exclusive timepieces that embody the brand’s signature elegance and craftsmanship. This collaboration allows us to provide our customers with authentic Versace watches that blend Italian luxury with timeless design.</p>
            </div>
            <div className='mr-5 pt-2 border-t border-t-gray-400'>
                <img src="" alt="" />
                <p className='font-bold'>Prada</p>
                <p>In partnership with Prada, we bring forward a collection of watches that reflect modern sophistication and bold Italian style, offering our customers luxury with a contemporary edge. Each piece is a statement of refined taste, crafted for those who appreciate fashion and timeless elegance.</p>
            </div>
            <div className='mr-5 pt-2 border-t border-t-gray-400'>
                <img src="" alt="" />
                <p className='font-bold'>Oscars</p>
                <p>Aligned with the prestige of the Oscars, our store presents timepieces that embody elegance and red-carpet luxury, celebrating moments of excellence and timeless artistry. These exclusive watches capture the spirit of iconic achievements and unforgettable style.</p>
            </div>
            <div className='mr-5 pt-2 border-t border-t-gray-400'>
                <img src="" alt="" />
                <p className='font-bold'>Formula 1</p>
                <p>Through our partnership with Formula 1, we offer exclusive watches inspired by speed, precision, and innovation—crafted for those who live life in the fast lane. Every design fuses performance-driven engineering with luxury aesthetics.</p>
            </div>
        </div>
        
    </div>
  )
}

export default Testimonial