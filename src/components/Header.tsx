import { Link } from "react-router-dom";

import ShoppingBagSharpIcon from '@mui/icons-material/ShoppingBagSharp';
import PersonOutlineSharpIcon from '@mui/icons-material/PersonOutlineSharp';
import NavbarDrop from './NavbarDrop';
// import { useState } from 'react'
// import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
// import { XMarkIcon } from '@heroicons/react/24/outline'

function Header() {
    //const [open, setOpen] = useState(true)
  return (
    <>
        <header className='bg-white p-3'>
            <nav className='flex justify-between items-center'>
                {/* Logo */}
                <div className='text-blue-300 text-3xl font-bold ml-20'>Luxor</div>
                {/* Nav Links */}
                <div className='flex gap-6 list-none font-bold text-gray-700'>
                    {/* <Link to={'/home'}>Home</Link> */}
                    <Link to={'/'}>Home</Link>
                    <div className='relative group'>
                        <Link to={'/collections'}>Collections</Link>
                        <NavbarDrop/>
                    </div>
                    
                    <a href="#">Brands</a>
                    <a href="#">Services</a>
                    <a href="#">Contact</a>
                </div>
                
                {/* Icons */}
                <div className='flex gap-2 mr-20'>
                    <Link to={'/shoppingcart'}><ShoppingBagSharpIcon color='primary' href="#"/></Link>
                    <Link to={'/useraccount'}><PersonOutlineSharpIcon color='primary' href="#"/></Link>
                </div>
            </nav>
        </header>
    </>
    
    
        
  )
}

export default Header