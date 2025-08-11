import { useCart } from "@/context/CartContext";
import Image from "next/image";
import { useState } from "react";
import { HiOutlineMinusCircle, HiOutlinePlusCircle } from "react-icons/hi2"

export const CartProducts = ({ cartItems }) => {
    const [cartQuantity, setCartQuantity] = useState(parseInt(cartItems.quantity))
    const { removeFromCart,addToCart } = useCart()
    console.log("updated cart quantity", cartQuantity);


    const handleAddQuantity =  () => {
         setCartQuantity(prevQty => {
            const newQty= prevQty < 5 ? parseInt(prevQty) + 1 : prevQty
            addToCart(newQty,cartItems);
            return newQty
         });
        
    }

    const handleMinusQuantity = (id) => {
        setCartQuantity(prevQty => {
            const newQty = prevQty > 1 ? parseInt(prevQty) - 1 : prevQty
            addToCart(newQty,cartItems);
            return newQty
         });
        
    }

    return (
        <div className="flex p-2 shadow-md rounded-md">
            <div className="relative w-1/6 aspect-square shrink-0 shadow-md rounded-md ">
                <Image
                    src={cartItems.image}
                    alt={cartItems.title}
                    sizes="(max-width: 768px) 50vw, 25vw"
                    fill
                    className="object-contain"
                />
            </div>
            <div className="mx-5 px-2  ">
                <h2 className="text-sm font-bold mb-2 text-gray-600">{cartItems.title}</h2>
                <div className="flex flex-col mb-4">
                    <span className="text-sm font-medium text-pink-600">Qty: {cartQuantity}</span>
                    <div className="">
                        <button onClick={() => handleMinusQuantity(cartItems.id)}>
                            <HiOutlineMinusCircle className="text-xl bg-white hover:text-pink-600  duration-300 hover:cursor-pointer " />
                        </button>
                        <button onClick={() => handleAddQuantity(cartItems.id)}>
                            <HiOutlinePlusCircle className="text-xl bg-white hover:text-pink-600  duration-300 hover:cursor-pointer  " />
                        </button>
                    </div>
                    <div>
                        <button onClick={() => removeFromCart(cartItems.id)} className="text-red-700 hover:cursor-pointer font-medium rounded hover:text-red-500">Remove</button>
                    </div>
                </div>
            </div>

        </div>
    )
}