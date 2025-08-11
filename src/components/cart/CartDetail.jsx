"use client"
import { useCart } from "@/context/CartContext"
import { CartProducts } from "./CartProducts"
export const CartDetail = () => {
    const { cartItems } = useCart();

    return (
        <div className="min-h-[80vh] mt-5 grid grid-cols-1 md:grid-cols-12 ">

            {cartItems.length > 0 ? (
                <>
                    <div className=" md:col-span-7">
                        {
                            cartItems.map((ci, i)=>{
                                return <CartProducts key={i} cartItems={ci} />
                            })
                        }
                    </div>
                    <div className=" col-span-5">
                        Checkout section
                    </div>
                </>
            ) : (<div className="col-span-12">
                <h2 className="text-2xl font-medium text-gray-600 text-center">No Items in the cart</h2>
            </div>)}


        </div>
    )
}