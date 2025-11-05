import SignatureImage from './../assets/signature.png'
import ChronoImage from './../assets/chrono.png'
import VintageImage from './../assets/vintage.png'
// import useShoppingCart from '../store/ShoppingCartStore'

function NewArrival() {
    // const addItemToCart = useShoppingCart((state) => state.addItemToCart)
  return (
    <div className='flex flex-col justify-center items-center bg-gray-100 text-black p-5'>
        <h2>New Arrivals</h2>
        <div className='flex flex-row gap-10 p-10'>
            <div className='border border-gray-300 bg-white p-0 hover:shadow-md transition-shadow duration-300 rounded-lg overflow-hidden'>
                <img className='w-80 h-70 object-cover' src={SignatureImage} alt="" />
                <div className='p-3'>
                    <div>
                        <h3 className='font-bold'>Royal Oak</h3>
                        <p>8k rose gold case with sapphire crystal</p>
                    </div>
                    <div>
                        <p>$32,000</p>
                        <button className='text-white'> Add to Cart</button>
                    </div>
                </div>
            </div>
            <div className='border border-gray-300 bg-white p-0 hover:shadow-md transition-shadow duration-300 rounded-lg overflow-hidden'>
                <img className='w-85 h-70 object-cover' src={ChronoImage} alt="" />
                <div className='p-3'>
                    <div>
                        <h3 className='font-bold'>Nautilus Traveler</h3>
                        <p>Stainless steel with dual time zone function</p>
                    </div>
                    <div>
                        <p>$25,000</p>
                        <button className='text-white'> Add to Cart</button>
                    </div>
                </div>
            </div>
            <div className='border border-gray-300 bg-white p-0 hover:shadow-md transition-shadow duration-300 rounded-lg overflow-hidden'>
                <img className='w-80 h-70 object-cover' src={VintageImage} alt="" />
                <div className='p-3'>
                    <div>
                        <h3 className='font-bold'>Overseas Pearl</h3>
                        <p>Blue dial with moon phase complication</p>
                    </div>
                    <div className=''>
                        <p>$42,000</p>
                        <button className='text-white'> Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <button className=''>View All New Arrivals <span>&#8594;</span> </button>
        </div>
    </div>
  )
}

export default NewArrival