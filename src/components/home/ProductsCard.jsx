"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useCart } from '@/context/CartContext'
import Button from '../Button'

export default function ProductsCard({ product }) {
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useCart()
    const router = useRouter();

    const handleBuyNow = (quantity, product) => {
        addToCart(quantity, product)
        router.push("/cart")
    }

    return (

        <div className='max-w-56 flex flex-col justify-between shadow-lg my-10 bg-slate-50 rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out ' >
            <div className='px-2 flex justify-center'>
                <Link href={`/store/${product?.id}`}>
                    <Image
                        src={product?.image}
                        alt={product?.title}
                        height={150}
                        width={150}
                        className='object-cover'
                        loading="lazy"
                    />
                </Link>
            </div>
            <div className='px-2 py-1'>
                <Link href={`/store/${product?.id}`}>
                    <p className='min-h-[3rem] md:text-[12px] sm:text-[10px] text-[8px] font-medium text-gray-950 mb-1 hover:text-gray-500 duration-300'>{product?.title}</p>
                </Link>
                <p className='text-md font-semibold text-gray-800 mb-1'>{`$${product?.price}.00`}</p>
            </div>
            <div className='px-2 w-full pb-2 mx-auto'>
                <Button
                    handleClick={() => handleBuyNow(quantity, product)}
                    btnName={"Buy Now"}
                    className={"py-1 border-1"}
                />
            </div>
        </div>
    )
}
