import Header from '../components/Header'
import SignatureImage from './../assets/signature.png'
import ChronoImage from './../assets/chrono.png'
import VintageImage from './../assets/vintage.png'
import TimelessImage from './../assets/timeless.png'
import ProductCollection from '../components/ProductCollection'

function Collections() {
  return (
    <>
        <Header/>
        <div className='flex flex-col justify-center items-center bg-white text-black p-5'>
            <h2 className='text-2xl'>Luxor Collections</h2>
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
                <div className='flex flex-col items-center'>
                    <img className='w-70 h-70 object-cover rounded-md' src={TimelessImage} alt="" />
                    <h3>Timeless Series</h3>
                </div>
            </div>
        </div>
        <ProductCollection/>
    </>


  )
}

export default Collections