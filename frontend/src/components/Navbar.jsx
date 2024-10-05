import React from 'react'

//importing assets from assets folder (src_assets)
import { assets } from '../assets/assets'

import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-5 font-medium'>
      <img src={assets.logo} className='w-36' alt="logo"/>
      <img src="logo.png" className='w-36' alt="logo"/>
      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
        <NavLink to="/" className='flex flex-col items-center gap-1'>
          <p>Home</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700' />
        </NavLink>
      </ul>
    </div>
  )
}

export default Navbar
