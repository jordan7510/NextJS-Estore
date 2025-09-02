"use client"
import Button from '@/components/Button';
import axios from 'axios';
import Link from 'next/link'
import { useState } from 'react'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/navigation';

export default function SignupPage() {

    const [user, setUser] = useState({
        userName: "",
        email: "",
        password: "",
    });
    const [showPassword, setShowPassword] = useState(false)
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("/api/users/signup", user);
            if (response?.data?.success) {
                toast(response?.data?.message)
                e.target.reset();
                setUser({
                    userName: "",
                    email: "",
                    password: "",
                });
                router.push("/login")
            }
        } catch (error) {
            toast(error?.response?.data?.error)
        }
    }

    return (
        <div className='flex items-center justify-center'>
            <div className="w-full mt-10 max-w-sm rounded-lg px-8 md:px-3 shadow-lg mx-5">
                <h1 className="text-2xl text-[#f63e7b] font-bold mt-4 mb-4 text-center">Sign Up</h1>
                <form onSubmit={handleSubmit} className=''>
                    <div className="grid grid-cols-1 gap-2">
                        <div>
                            <input
                                className="w-full rounded-md border-2 border-gray-400 outline-none p-3 text-sm focus:border-[#f63e7b]"
                                placeholder="User name"
                                type="text"
                                name='username'
                                required
                                onChange={(e) => setUser({ ...user, userName: e.target.value })}
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
                        <div className='relative'>
                            <input
                                className="w-full rounded-md border-2 border-gray-400 outline-none p-3 text-sm focus:border-[#f63e7b]"
                                placeholder="Password"
                                type={`${showPassword ? "text" : "password"}`}
                                name='password'
                                required
                                onChange={(e) => setUser({ ...user, password: e.target.value })}
                            />
                            {
                                showPassword ? (
                                    <FaEyeSlash onClick={() => setShowPassword(!showPassword)} className='absolute top-3 right-0 mt-1 mx-4 hover:cursor-pointer hover:text-pink-600' />
                                ) : (
                                    <FaEye onClick={() => setShowPassword(!showPassword)} className='absolute top-3 right-0 mt-1 mx-4 hover:cursor-pointer hover:text-pink-600' />
                                )
                            }
                        </div>
                    </div>
                    <div className="mt-6">
                        <Button
                            type={"submit"}
                            btnName={"Sign up"}
                            className={"py-2 border-2"}
                        />
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
                    <Link href={"/login"}>
                        <span className="underline text-gray-800 hover:text-[#f63e7b]"> Login</span>
                    </Link>
                </p>
            </div>
        </div>
    )
}
