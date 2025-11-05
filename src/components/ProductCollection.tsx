import { useEffect, useState } from "react";
import useShoppingCart from '../store/ShoppingCartStore'
import type { WatchProps } from "../store/ShoppingCartStore.tsx";

function ProductCollection() {
  const [watches, setWatches] = useState<WatchProps[]>([]);
  // Product Collections

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/arvochin/watch-api/watches")
      .then(res => res.json())
      .then(data => setWatches(data))
      .catch(err => console.error(err));
  }, []);

  const addItemToCart = useShoppingCart((state) => state.addItemToCart)

  return (
    <div className='bg-gray-300'>
      <div className='grid grid-cols-1 md:grid-cols-2'>
          {watches.map((watch) => (
            <div key={watch.id} className='bg-white rounded-xl shadow-md p-5 m-5'>
              <img src={watch.image} alt="" />
              <h3 className="font-semibold">{watch.name}</h3>
              <p className="text-gray-500">{watch.brand}</p>
              <p className="text-lg font-bold">${watch.price}</p>
              <p className="italic text-sm">{watch.category}</p>
              <button className='text-white' onClick={()=>addItemToCart(watch)}> Add to Cart</button>
            </div>
          ))}
      </div>
    </div>
    
  )
}

export default ProductCollection