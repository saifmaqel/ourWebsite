import React from 'react'
import ProductsBox from './ProductsBox'

function ProductsServices() {
  return (
    <div className='products-and-services' id='products-and-services'>
      <h2 className='main-title'>Products And Services</h2>
      <div className='container'>
        <ProductsBox />
        <ProductsBox />
        <ProductsBox />
      </div>
    </div>
  )
}

export default ProductsServices
