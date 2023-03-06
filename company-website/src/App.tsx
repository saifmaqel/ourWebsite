import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './components/Navbar'
import './App.css'

import {
  Routes,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import ProductsServices from './components/ProductsServices'
import Careers from './components/Careers'
import Company from './components/Company'
import Home from './components/Home'
function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/productsandservices' element={<ProductsServices />} />
        <Route path='/careers' element={<Careers />} />
        <Route path='/company' element={<Company />} />
        <Route path='/other-links'>
          {/* <Route path='/other-links' element={<otherLinksLayout/>}> */}
          <Route index element={<Home />} />
          <Route path='/other-links/testimonials' element={<Home />} />
          <Route path='/other-links/team-members' element={<Home />} />
          <Route path='/other-links/services' element={<Home />} />
          <Route path='/other-links/our-skills' element={<Home />} />
          <Route path='/other-links/how-it-works' element={<Home />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
