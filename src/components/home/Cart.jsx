"use client"
import { useCart } from "@/context/CartContext"
import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi"

export const Cart = () => {

    const {cartItems, totalQuantity} = useCart();
    console.log("totalQuantity",totalQuantity);
    
    return (
        <div>
            <div className='relative'>
               <Link className="hover:text-pink-600" href={"/cart"}> <FiShoppingCart size={24} /></Link>
                <span className='absolute top-[-10px] right-[-20px] bg-pink-600  text-white text-xs rounded-full h-5 w-5 flex items-center justify-center'>{totalQuantity}</span>
            </div>
        </div>
    )
}