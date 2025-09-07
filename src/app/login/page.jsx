"use client"
import Button from '@/components/Button';
import axios from 'axios';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { useState } from 'react'
import toast from 'react-hot-toast';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { login } from '../redux/userSlice';

export default function LoginPage() {
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
    });
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false)
    const dispatch = useDispatch();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("/api/users/login", user)
            const data = await response?.data;
            console.log("login response ", data)
            if(data.success){
                toast.success(data.message)
                dispatch(login({user:data.user}))
                router.push("/dashboard")
            }
        } catch (error) {
            console.error(error)
            toast.error(error.response.data.error)
        }
        
    }

    return (
        <div className='flex items-center justify-center'>
            <div className="w-full mt-10 max-w-sm rounded-lg px-8 md:px-3 shadow-lg mx-5">
                <h1 className="text-2xl text-[#f63e7b] font-bold mt-4 mb-4 text-center">Login</h1>
                <form onSubmit={handleSubmit} className='max-w-[500px] min-w[300px]'>
                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-1">
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
                        btnName={"Login"}
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
                <p className=" my-2 text-xs text-center sm:px-6 text-gray-600">Doesn't have an account?
                    <Link href={"/signup"}>
                        <span className="underline text-gray-800 hover:text-[#f63e7b]"> Signup</span>
                    </Link>
                </p>

            </div>
        </div>
    )
}
