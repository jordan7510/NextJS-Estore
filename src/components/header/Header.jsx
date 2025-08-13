"use client"
import React, { useState } from 'react'
import Container from '../Container'
import Link from 'next/link'
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import { IoMenu } from "react-icons/io5";
import { useCart } from '@/context/CartContext';

export default function Header() {

    const { totalQuantity } = useCart();
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className='rounded-md w-full backdrop-blur-sm shadow p-4 z-10 sticky top-0 '>
            <Container className={'flex items-center justify-between'}>
                {/* Header Logo */}
                <Link href='/'>
                    <div >
                        <span className='text-pink-500 font-bold text-4xl'>E-Store <b className='text-black'>.</b></span>
                    </div>
                </Link>
                {/* Header Search bar */}
                <div className='hidden md:flex items-center border border-pink-400 rounded-full'>
                    <input
                        className='text-slate-700 w-full px-4 py-1 outline-none'
                        placeholder='Search...'
                        type="text" />
                    <div className='ml-5 bg-pink-500 hover:bg-pink-600 duration-300 rounded-r-full px-2 py-2 '>
                        <button title='Click to search' className=' font-bold  cursor-pointer px-3 py-2 text-white' ><FiSearch size={18} /></button>
                    </div>
                </div>
                {/* Header Navigation Section */}
                <div>
                    <nav className='hidden md:flex items-center p-2 gap-4'>
                        <ul className='flex  items-center justify-center gap-3'>
                            <Link href={'/'}><li className='text-lg hover:text-pink-600 font-medium text-gray-700 duration-200'>Home</li>
                            </Link>
                            <Link href={'/store'}><li className='text-lg hover:text-pink-600 font-medium text-gray-700 duration-200'>Store</li>
                            </Link>
                        </ul>
                        <div className='relative'>
                            <Link className="hover:text-pink-600" href={"/cart"}> <FiShoppingCart size={24} />
                            </Link>
                            <span className='absolute top-[-10px] right-[-20px] bg-pink-600  text-white text-xs rounded-full h-5 w-5 flex items-center justify-center'>
                                {totalQuantity}
                            </span>
                        </div>
                    </nav>
                    <IoMenu onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-2xl hover:text-pink-600 cursor-pointer" />
                </div>
            </Container>
            {/* Dropdown menu section */}
            <div className={`md:hidden absolute top-full left-0 w-full z-20 flex items-center justify-center flex-col px-2 mt-2 bg-white/80 backdrop-blur-sm shadow
                 transition-all duration-300 ease-in-out ${isMenuOpen ?'max-h-64 opacity-100' : 'max-h-0 opacity-0'} `}>
                <div className='flex w-1/2 mb-2 items-center border border-pink-400 rounded-full'>
                    <input
                        className='text-slate-700 w-full px-4 outline-none'
                        placeholder='Search...'
                        type="text" />
                    <div className=' bg-pink-500 hover:bg-pink-600 duration-300 rounded-r-full'>
                        <button title='Click to search' className=' font-bold  cursor-pointer px-3 py-2 text-white' ><FiSearch size={18} /></button>
                    </div>
                </div>
                <ul>
                    <Link href={'/'}><li className='text-lg hover:text-pink-600 font-medium text-gray-700 duration-200'>Home</li>
                    </Link>
                    <Link href={'/store'}><li className='text-lg hover:text-pink-600 font-medium text-gray-700 duration-200'>Store</li>
                    </Link>
                </ul>
                <div className='relative mt-3'>
                    <Link className="hover:text-pink-600" href={"/cart"}> <FiShoppingCart size={24} />
                    </Link>
                    <span className='absolute top-[-10px] right-[-20px] bg-pink-600  text-white text-xs rounded-full h-5 w-5 flex items-center justify-center'>
                        {totalQuantity}
                    </span>
                </div>
            </div>
        </header>

    )




}

