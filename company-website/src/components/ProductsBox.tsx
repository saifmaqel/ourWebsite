import React from 'react'
import '../App.css'
import img from '../assets/background image.jpg'
function ProductsBox() {
  return (
    <div className='products-box'>
      <div className='image-holder'>
        <img src={img} alt='' />
      </div>
      <div className='content'>
        <h2>GG</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, in.
        </p>
        <a href=''>more</a>
      </div>
    </div>
  )
}

export default ProductsBox
