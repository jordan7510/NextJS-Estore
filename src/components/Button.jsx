import React from 'react'

export default function Button({ type, className, btnName,handleClick }) {
    return (
        <button
            onClick={handleClick}
            type={type}
            className={`w-full border border-pink-600 rounded-md flex items-center justify-center bg-white px-5 py-1 font-medium text-pink-600 sm:w-full cursor-pointer hover:bg-pink-600 hover:text-white duration-300 ${className}`}
        >
            {/* {
                loading ? (<ImSpinner3 className='loading-icon' />) : ("Create Account")
            } */}
            {btnName}
        </button>
    )
}
