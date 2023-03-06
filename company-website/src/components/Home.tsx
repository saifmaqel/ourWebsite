import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'
import img from '../assets/webWallpaper.jpg'
function Home() {
  return (
    <>
      <div className='landing'>
        <div className='container'>
          <div className='text'>
            <h1>Welcome, To Our Company</h1>
            <p>This website is about our company</p>
          </div>
          <div className='image'>
            <img src={img} alt='hu' />
          </div>
        </div>
        <a href='' className='go-down'>
          <FontAwesomeIcon icon={faAngleDoubleDown} />
          {/* <faAngleDoubleDown/> */}
        </a>
      </div>
    </>
  )
}

export default Home
