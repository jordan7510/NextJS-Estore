import React from 'react'
import Slider from './Slider'
import Container from '../Container'

export default function HeroSection() {
  return (
    <Container>
      <section className='flex items-center justify-between px-8 py-4'>
        <div className='flex-1 max-w-[50%]'>
          <h1 className='text-4xl font-bold mb-2.5'>One Stop Solution <span className='text-pink-600'>E-Store</span></h1>
          <p className='text-gray-700 mb-2.5'>Discover the latest headphones, earphones, mobiles and accessories.</p>
          <p className='text-gray-700 mb-2.5'>Exclusive deals just for you.</p>
          <button className='bg-gray-200 px-4 py-2 font-medium rounded-md text-pink-600 cursor-pointer hover:bg-pink-600 duration-300 hover:text-white'>Shop now</button>
        </div>
        <Slider />
      </section>
    </Container>
  )
}
