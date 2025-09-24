import React from 'react'
import Navbar from '../components/Navbar'

export default function layout({children}) {
  return (
    <div className='w-1/2 mx-auto my-10 p-5 '>
        <nav><Navbar/></nav>
        {children}
    </div>
  )
}
