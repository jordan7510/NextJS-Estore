import React from 'react'
import Container from './Container'
import Link from 'next/link'
import { FiSearch } from "react-icons/fi";
import { Cart } from './home/Cart';

export default function Header() {
    return (
        <header className='bg-white bg-opacity-50 sticky top-0 rounded-md shadow backdrop-blur-sm border-gray-400 p-4 z-40 '>
            <Container className={'flex items-center justify-between'}>
                {/* Logo */}
                <Link href='/'>
                    <div >
                        <span className='text-pink-500 font-bold text-4xl'>E-Store <b className='text-black'>.</b></span>
                    </div>
                </Link>
                {/* Search bar */}
                <div className='max-w-[500px] border border-pink-400 rounded-full flex items-center'>
                    <input
                        className='text-slate-700 w-full px-4 py-2 outline-none'
                        placeholder='Search for Products'
                        type="text" />
                    <div className='ml-5 bg-pink-600 rounded-r-full px-2 py-2 '>
                        <button title='Click to search' className=' font-bold cursor-pointer px-3 py-2 text-white' ><FiSearch size={18} /></button>
                    </div>
                </div>
                <NavBar />
            </Container>
        </header>
    )
}

const NavBar = () => {
    return (
        <nav className='flex items-center p-2 gap-4'>
            <ul className='flex  items-center justify-center gap-3'>
                <Link href={'/'}><li className='text-lg hover:text-pink-600 font-medium text-gray-700 duration-200'>Home</li></Link>
                <Link href={'/store'}><li className='text-lg hover:text-pink-600 font-medium text-gray-700 duration-200'>Store</li></Link>
            </ul>
            <Cart/>
        </nav>
    )
}