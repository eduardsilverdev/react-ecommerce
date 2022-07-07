import React, { useEffect, useState } from 'react'
import Products from '../Products'
import Cart from './Cart'

const Shop = () => {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState ([])

  useEffect(()=>{
    fetch('products.json')
    .then(res => res.json())
    .then(data => setProducts(data))
  },[])

  const handlaAddButton = (product) => {
    // console.log(product)
    const newProducts = [...cart, product]
    setCart(newProducts)
  }

  return (
    <section className='w-full h-full px-4 py-28'>

        <main className='md:flex md:justify-between gap-4'>

          {/* Products section */}
        <div className='md:w-[900px] h-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {
              products.map(product => <Products
              key={product.id}
              product={product}
              handlaAddButton={handlaAddButton}
              ></Products> )
          }
        </div>

        {/* Cart section */}
        <div className='w-full flex justify-center mt-10 md:fixed right-0 md:w-[300px] rounded bg-slate-300 px-4'>

          <Cart cart={cart}></Cart>
        </div>
        </main>
    </section>
  )
}

export default Shop