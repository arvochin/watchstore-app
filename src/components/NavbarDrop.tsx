import React from 'react'

function NavbarDrop() {
  return (
    <div className='absolute top-full left-0 hidden group-hover:block p-5 max-w-7xl mx-auto z-50 bg-white whitespace-nowrap'>
        <div className='flex flex-row gap-5 justify-between font-light'>
            <a href="#">Signature</a>
            <a href="#">Chrono</a>
            <a href="#">Vintage</a>
            <a href="#">Timeless</a>
        </div>
    </div>
  )
}

export default NavbarDrop