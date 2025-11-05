
function Footer() {
  return (
    <div className='flex flex-col  bg-sky-950 text-white p-5'>
        <div className='flex flex-row justify-between gap-5 m-10 mx-20'>
            <div>
                <h4>Luxor Timepieces</h4>
            </div>
            <div className='list-none'>
                <h4 className='font-semibold'>Shop</h4>
                <li><a href="">Collections</a></li>
                <li><a href="">Brands</a></li>
                <li><a href="">Services</a></li>
            </div>
            <div className='list-none'>
                <h4 className='font-semibold'>Support</h4>
                <li><a href="">About Us</a></li>
                <li><a href="">Customer Service</a></li>
                <li><a href="">Returns & Warranty</a></li>
                <li><a href="">Contact</a></li>
            </div>
            <div>
                <h4 className='font-semibold'>Newsletter</h4>
                <p>Get exclusive access to new arrivals and private sales</p>
                <div>
                    <input className='bg-sky-100 text-black' type="text" />
                    <button>Subscribe</button>
                </div>
                
            </div>
        </div>
        <div  className='flex flex-row gap-5 m-10 mx-20'>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
        </div>
        
    </div>
  )
}

export default Footer