import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='w-full fixed bg-gray-100'>
      <div className='flex justify-between items-center px-32 py-4'>
          <Link to="/" className='text-2xl font-semibold'>CodingRah</Link>

          <ul className='flex space-x-5 text-lg'>
            <li>
              <Link to='/login'>Login</Link>
            </li>
            <li>
              <Link to='/reguster'>Register</Link>
            </li>
          </ul>
      </div>
    </nav>
  )
}
