"use client"
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import { useEffect, useState } from "react";
import { HiOutlineMinusCircle, HiOutlinePlusCircle } from "react-icons/hi2"

export const CartProducts = ({ cartItems }) => {
    const [cartQuantity, setCartQuantity] = useState(parseInt(cartItems.quantity))
    const { removeFromCart, addToCart} = useCart();
    
    const handleAddQuantity = () => {
        setCartQuantity(prevQty => prevQty < 5 ? parseInt(prevQty) + 1 : prevQty);
    }

    const handleMinusQuantity = () => {
        setCartQuantity(prevQty => prevQty > 1 ? parseInt(prevQty) - 1 : prevQty);
    }

    useEffect(() => {
        addToCart(cartQuantity, cartItems);
    }, [cartQuantity])

    return (
        <div className="flex p-2 shadow-md rounded-md mb-2">
            <div className="relative w-1/6 aspect-square shrink-0  ">
                <Image
                    src={cartItems.image}
                    alt={cartItems.title}
                    sizes="(max-width: 768px) 50vw, 25vw"
                    fill
                    className="object-contain"
                />
            </div>
            <div className="mx-5 px-2 ">
                <div>
                    <p className="font-bold text-[12px] mb-2 text-gray-600">{cartItems.title}</p>
                    <p className="font-bold text-[12px] mb-2 text-gray-600">${cartItems.price * cartQuantity }</p>
                </div>
                <div className="flex flex-col">
                    <div className="flex items-center">
                        <button onClick={handleMinusQuantity}>
                            <HiOutlineMinusCircle className="text-xl bg-white hover:text-pink-600  duration-300 hover:cursor-pointer " />
                        </button>
                        <span className="text-sm px-1 font-medium text-pink-600">{cartQuantity}</span>
                        <button onClick={handleAddQuantity}>
                            <HiOutlinePlusCircle className="text-xl bg-white hover:text-pink-600  duration-300 hover:cursor-pointer  " />
                        </button>
                    </div>
                    <div className="mt-2">
                        <button onClick={() => removeFromCart(cartItems.id)} className="text-red-700 hover:cursor-pointer font-medium rounded hover:text-red-500">Remove</button>
                    </div>
                </div>
            </div>

        </div>
    )
}