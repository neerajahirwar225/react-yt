import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex py-4 px-8 items-center bg-cyan-800 justify-between'>
       <h2 className='text-2xl font-bold'>Navodians</h2>
       <div className='flex gap-10 text-lg font-medium'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/courses'>Courses</Link>
        <Link to='/product'>Product</Link>
       </div>
    </div>
  )
}

export default Navbar