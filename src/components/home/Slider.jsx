"use client";
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // const productURL = "https://fakestoreapi.in/api/products";
  const slides = [
    {
      id: 1,
      url: "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692947383286-714WUJlhbLS._SL1500_.jpg",
    },
    {
      id: 2,
      url: "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692255251854-xbox.jpg",
    },
    {
      id: 3,
      url: "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692257709689-logitech heaphone.jpg",
    },
    {
      id: 4,
      url: "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692941008275-headphone3.jpg",
    },
    {
      id: 5,
      url: "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691056487173-headphon2.jpg",
    },
    {
      id: 6,
      url: "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691057474498-earphone.jpg",
    },
    {
      id: 7,
      url: "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691057718636-headphone5.jpg",
    },
    {
      id: 8,
      url: "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1694100438525-51Prg4Smx-L._SL1500_.jpg",
    },
    {
      id: 9,
      url: "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691074519203-galaxy S22 5G.jpg",
    },

  ]

  useEffect(() => {
      const interval = setInterval(() => {
        setCurrentSlide((prevIndex) => prevIndex == slides.length - 1 ? 0 : prevIndex + 1)
        return () => clearInterval(interval)
      }, 3000)
  }, [slides.length])

  return (
    <div className='relative h-128 w-[50%] '>
      {
        slides.map((slide,key)=>{
          return(
            <Image 
            src={slide.url}
            fill
            alt={slide.url}
            key={key}
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 200px"
            className={`${currentSlide == key ? 'opacity-100' : 'opacity-0'  } duration-1000`}
            />
          )
        })
      }
    </div>
  )
}
