"use client"
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { HiOutlineMinusCircle, HiOutlinePlusCircle } from "react-icons/hi2";

export default function QuantitySelector({ product }) {
    const [quantity, setQuantity] = useState(1);
    const {addToCart} = useCart();
    
    return (
        <div>
            <div className="flex mb-4">
                <button onClick={() => setQuantity(prevQty => prevQty > 1 ? prevQty - 1 : 1)}>
                    <HiOutlineMinusCircle className="text-2xl bg-white hover:text-pink-600  duration-300 hover:cursor-pointer " />
                </button>
                <span className="text-3xl font-medium px-2 text-pink-600 ">{quantity}</span>
                <button onClick={() => setQuantity(prevQty => prevQty < 5 ? prevQty + 1 : 5)}>
                    <HiOutlinePlusCircle className="text-2xl bg-white hover:text-pink-600  duration-300 hover:cursor-pointer  " />
                </button>
            </div>

            <div className="flex gap-4 font-bold">
                <button className="shadow text-xl p-2 rounded bg-white text-pink-600 hover:text-white hover:bg-pink-600 duration-300 hover:cursor-pointer ">Buy Now</button>
                <button onClick={()=>addToCart(quantity,product)} className="flex  items-center justify-center gap-2 shadow text-xl p-2 rounded bg-white text-pink-600 hover:text-white hover:bg-pink-600 duration-300 hover:cursor-pointer ">Add to <FiShoppingCart /></button>
            </div>
        </div>
    )
}
