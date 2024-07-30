import React from 'react'
import { useSelector } from 'react-redux'

function Price() {

  const price =useSelector((state)=>state.cart.totalPrice)
  const totalQuality =useSelector((state)=>state.cart.items)

 

  return <div>
    <div className=" top-20 w-[300px] h-[300px] sm:w-[320px] sm:h-[300px] ml-8 sm:ml-0  sm:fixed right-10 mb-14 border-2 border-gray-300 rounded sm:mt-0 mt-12 p-4">
      <h1>Total Quality</h1>
      <h1 className="font-bold">{totalQuality.length}</h1>
      <h1 className="mt-8">Total Price</h1>
      <h1 className="font-bold">${price}</h1>
      <button className="bg-gray-950 rounded px-24 py-4 mt-10 ml-5 text-white">Pay now</button>
    </div>
    </div>
  
}

export default Price