import React from 'react'
import {Routes, Route} from 'react-router-dom'
import { Home } from './pages/Home'
import About from './pages/About'
import Navbar from './components/Navbar'


const App = () => {
  return (
    <div className='px-4 sm:px-[5vm] md:px-[7vm] lg:px-[9vm]'>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/collection' element={<Collection/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/Contact' element={<Contact/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/orders' element={<Orders/>} />
        <Route path='/product/:productId' element={<Product/>} />
        <Route path='/place-order' element={<PlaceOrder/>} />

      </Routes>
    </div>
  )
}

export default App