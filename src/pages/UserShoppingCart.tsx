import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import useShoppingCart from '../store/ShoppingCartStore'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const products = [
  {
    id: 1,
    name: 'Luxury Watch',
    price: 299.99,
    image: 'https://via.placeholder.com/80',
    quantity: 1,
  },
  {
    id: 2,
    name: 'Classic Watch',
    price: 199.99,
    image: 'https://via.placeholder.com/80',
    quantity: 2,
  },
]

const shipping_cost = 5.00

// store cost calculation in a variables

function UserShoppingCart() {

  const product_items = useShoppingCart((state) => state.cartItems)
  const removeItemFromCart = useShoppingCart((state) => state.removeItemFromCart)
  console.log(product_items)
  return (
    <>
      <Header/>
      <div className='min-h-screen bg-gray-50 p-8'>
        <div className='text-black'>
          <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
        </div>
        <div className='flex flex-col md:flex-row gap-8 text-black'>
          {/* Product List */}
          <div className="flex-1 bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-4">Products</h3>
            <ul>
              {product_items.map(product => (
                <li key={product.id} className="flex items-center justify-between border-b py-4">
                  <div className="flex items-center gap-4">
                    <img src={product.image} alt={product.name} className="w-20 h-20 object-cover rounded"/>
                    <button onClick={()=> removeItemFromCart(product.id)}><DeleteOutlineIcon/></button>
                    <div>
                      <div className="font-medium">{product.name}</div>
                      <div className="text-gray-500">Qty: {product.quantity}</div>
                      
                    </div>
                  </div>
                  <div className="font-semibold">${(product.price * product.quantity).toFixed(2)}</div>
                </li>
              ))}
            </ul>
          </div>
          {/* Order Summary */}
          <div className="w-full md:w-1/3 bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
            {/* Subtotal */}
            <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>
                    $
                    {product_items
                        .reduce((sum, product) => sum + product.price * product.quantity, 0)
                        .toFixed(2)}
                </span>
            </div>
            {/* Shipping Cost */}
            <div className="flex justify-between mb-2">
                <span>Shipping</span>
                <span>${shipping_cost.toFixed(2)}</span>
            </div>
            {/* Estimated Tax */}
            <div className="flex justify-between mb-2">
                <span>Estimated Tax</span>
                <span>
                    $
                    {(
                        product_items.reduce((sum, product) => sum + product.price * product.quantity, 0) *
                        0.08
                    ).toFixed(2)}
                </span>
            </div>
            <hr className="my-4" />
            {/* Estimated Total */}
            <div className="flex justify-between font-bold text-lg">
                <span>Estimated Total</span>
                <span>
                    $
                    {(
                        product_items.reduce((sum, product) => sum + product.price * product.quantity, 0) +
                        shipping_cost +
                        product_items.reduce((sum, product) => sum + product.price * product.quantity, 0) * 0.08
                    ).toFixed(2)}
                </span>
            </div>
            <button
                className="mt-6 w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
                type="button"
            >
                Check Out
            </button>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default UserShoppingCart