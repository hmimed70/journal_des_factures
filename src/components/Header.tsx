import React from 'react'
import Image from 'next/image'
import logo from '@/../public/cosider.jpg'
import Link from 'next/link'
const Header = () => {
  return (
    <nav className='container mx-auto   '>
        <div className='flex justify-between'>
         <Image width={200} src={logo} alt='cosider logo'/>
          <Link  href="/" className='text-xl font-bold self-center'>Journal des factures</Link> 
          <div></div>
        </div>

    </nav>
  )
}

export default Header