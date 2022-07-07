import React from 'react'
import {BsCartPlus} from 'react-icons/bs'

const Products = (props) => {
  const {handlaAddButton,product} = props
  const {img,name,ratings,price,seller} = props.product;

  return (
    <div className='border-2 rounded hover:shadow-md hover:shadow-purple-400 duration-300 relative'>

        {/* Image section */}
        <div className='flex justify-center'>
        <img className='w-full' src={img} alt="products" />
        </div>

        <div className='p-4'>
        <h1 className='font-semibold'>{name}</h1>
        <p>Price: <span className='text-orange-500'>${price}</span></p>

        <p>Manufacture: <span className='text-blue-400'>{seller}</span></p>

        <p>Rating: <span className='text-pink-400'>{ratings}</span></p>
        </div>

        {/* Button add to cart */}
        <div onClick={()=>handlaAddButton(product)} className='absolute w-full bottom-0 flex justify-center cursor-pointer items-center border space-x-2 bg-blue-400 hover:bg-blue-500 duration-300 rounded'>
        <button className='py-1'>Add to cart</button>

        <BsCartPlus size={20}/>
        </div>

        
    </div>
  )
}

export default Products