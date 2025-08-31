import Link from 'next/link'
import React from 'react'
import { FiShoppingCart } from 'react-icons/fi'

export default function CartIcon({ totalQuantity, href,handleClick }) {
    return (
        <div className='relative'>
            <Link onClick={handleClick} className="hover:text-pink-600" href={href}> <FiShoppingCart size={24} />
            </Link>
            <span className='absolute top-[-10px] right-[-20px] bg-pink-600  text-white text-xs rounded-full h-5 w-5 flex items-center justify-center'>
                {totalQuantity}
            </span>
        </div>
    )
}
