"use client"
import { useCart } from "@/context/CartContext"
import { CartProducts } from "./CartProducts"
export const CartDetail = () => {
    const { cartItems,cartValue, totalQuantity } = useCart();

    return (
        <div className="h-[80vh]  mt-5 grid grid-cols-1 md:grid-cols-12 shadow-md px-4 py-2 ">
            {cartItems.length > 0 ? (
                <>
                    <div className=" md:col-span-7 overflow-y-auto px-2 customScrollbar">
                        {
                            cartItems.map((ci, i)=>{
                                return <CartProducts key={i} cartItems={ci} />
                            })
                        }
                    </div>
                    <div className=" col-span-5 ml-3 shadow-md px-4 ">
                        <div>
                            <h1 className="text-center font-bold text-2xl text-gray-600 mb-8">Cart Summary</h1>
                        </div>
                        <div>
                            <p className="text-pink-600 font-bold text-md">Total items: <span className="text-gray-600 font-bold text-lg ">{totalQuantity}</span></p>
                        </div>
                        <div>
                            <p className="text-pink-600 font-bold text-lg">Sub total: <span className="text-gray-600 font-bold text-2xl ">${cartValue}</span></p>
                        </div>
                        <div className="mt-2">
                            <p className="text-md font-bold text-pink-600 mb-1">Shipping address :</p>
                            <p className="text-gray-600 font-medium text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis facilis odit consequuntur ea enim praesentium sequi dolorum culpa obcaecati laudantium?</p>
                            <div>
                                <p className="text-right text-[12px] text-pink-400 font-medium hover:cursor-pointer hover:text-pink-600">Change address</p>
                            </div>
                        </div>
                        <div className="mt-4">
                            <button className="bg-[#035fff] text-white py-1 hover:cursor-pointer hover:bg-pink-600 rounded-md w-full duration-300">Checkout Now</button>
                            </div>
                        </div>
                </>
            ) : (<div className="col-span-12">
                <h2 className="text-2xl font-medium text-gray-600 text-center">No Items in the cart</h2>
            </div>)}


        </div>
    )
}