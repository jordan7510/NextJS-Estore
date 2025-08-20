"use client"
import Link from 'next/link'
import { useState } from 'react'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

export default function SignupPage() {

    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
    });
    const [showPassword, setShowPassword] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault;
    }

    return (
        <div className='flex items-center justify-center'>
            <div className="w-full mt-10 max-w-md rounded-lg px-8 md:px-3 shadow-lg mx-5">
                <h1 className="text-2xl text-[#f63e7b] font-bold mt-4 mb-4 text-center">Sign Up</h1>
                <form onSubmit={handleSubmit} className='max-w-[500px] min-w[300px]'>
                    {/* <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 mb-2 max-w-lg">
                        <div>
                            <input
                                className="w-full rounded-md border-2 border-gray-400 outline-none p-3 text-sm focus:border-[#f63e7b]"
                                placeholder="First name"
                                type="text"
                                name='firstName'
                                required
                            />
                        </div>

                        <div>
                            <input
                                className="w-full rounded-md border-2 border-gray-600 outline-none p-3 text-sm focus:border-[#f63e7b]"
                                placeholder="Last name"
                                type="text"
                                name='lastName'
                                required
                            />
                        </div>
                    </div> */}

                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-1">
                        <div>
                            <input
                                className="w-full rounded-md border-2 border-gray-400 outline-none p-3 text-sm focus:border-[#f63e7b]"
                                placeholder="User name"
                                type="text"
                                name='username'
                                required
                                onChange={(e) => setUser({ ...user, username: e.target.value })}
                            />
                        </div>

                        <div>
                            <input
                                className="w-full rounded-md border-2 border-gray-400 outline-none p-3 text-sm focus:border-[#f63e7b]"
                                placeholder="Email address"
                                type="email"
                                name='email'
                                required
                                onChange={(e) => setUser({ ...user, email: e.target.value })}
                            />
                        </div>

                        {/* <div>
                        <input
                            className="w-full appearance-none rounded-md border-2 border-gray-400 outline-none p-3 text-sm focus:border-[#f63e7b] focus:outline-none"
                            placeholder="Phone Number"
                            name='phone'
                            type="tel"
                            required
                        />
                       
                    </div> */}
                        <div className='relative'>
                            <input
                                className="w-full rounded-md border-2 border-gray-400 outline-none p-3 text-sm focus:border-[#f63e7b]"
                                placeholder="Password"
                                type={`${showPassword ? "text":"password"}`}
                                name='password'
                                required
                                onChange={(e) => setUser({ ...user, password: e.target.value })}
                            />

                            {
                                showPassword ? (
                                    <FaEyeSlash  onClick={()=>setShowPassword(!showPassword)} className='absolute top-3 right-0 mt-1 mx-4 hover:cursor-pointer hover:text-pink-600' />
                                ) : (
                                    <FaEye onClick={()=>setShowPassword(!showPassword)} className='absolute top-3 right-0 mt-1 mx-4 hover:cursor-pointer hover:text-pink-600' />
                                )
                            }


                            {/* {
                            showPasswordError ? (
                                <p className='text-red-500 text-xs'>Password must have 8 characters, At least one uppercase letter, lowercase letter, one digit & one special character (e.g., !@#$%^&*) .</p>
                            ) : null
                        } */}
                        </div>
                        {/* <div>
                            <input
                                className="w-full rounded-md border-2 border-gray-400 outline-none p-3 text-sm focus:border-[#f63e7b]"
                                placeholder="Confirm password"
                                type="password"
                                name='conPassword'
                                required
                                onChange={(e)=>setUser({...user, confirmPassword:e.target.value})}
                            />
                        </div> */}
                    </div>

                    <div className="mt-6">
                        <button
                            type="submit"
                            className="w-full flex items-center justify-center bg-[#f63e7b] px-5 py-3 font-medium text-white sm:w-full cursor-pointer hover:opacity-90"
                        >
                            {/* {
                            loading ? (<ImSpinner3 className='loading-icon' />) : ("Create Account")
                        } */}
                            Sign up
                        </button>
                    </div>
                </form>

                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
                    <p className="px-3 text-sm text-gray-600">Or continue with</p>
                    <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
                </div>
                <div className="flex justify-center space-x-4">

                </div>
                <p className=" my-2 text-xs text-center sm:px-6 text-gray-600">Already have an account?
                    <Link href={""}>
                        <span className="underline text-gray-800 hover:text-[#f63e7b]"> Login</span>
                    </Link>
                </p>

            </div>
        </div>
    )
}
