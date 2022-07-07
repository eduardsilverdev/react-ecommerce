import React from 'react'

const Cart = ({cart}) => {
  console.log(cart)

    let total = 0;
    let shiping = 0;

    for(const product of cart){
      total = total + product.price;
      shiping = shiping + product.shipping;
    }

    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shiping + tax;


  return (
    <section>
        <h1 className='text-2xl text-center py-10 font-semibold'>Cart Summary</h1>

          <p className='text-xl'>Selected Items: {cart.length} </p>

          <p className='text-xl pt-2'>Total Price: ${total}</p>

          <p className='text-xl py-2'>Total Shipping Charge: ${shiping}</p>

          <p className='text-xl'>Tax: ${tax}</p>

          

          <h1 className='text-2xl pt-10'>Grand Total: ${grandTotal}</h1>

    </section>
  )
}

export default Cart