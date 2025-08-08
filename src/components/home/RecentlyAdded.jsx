import React from 'react'
import Container from '../Container'
import ProductsCard from './ProductsCard';

export default async function RecentlyAdded() {
  const response = await fetch("https://fakestoreapi.in/api/products?limit=10")
  const data =  await response.json()
  
  return (
    <div className='px-4 pb-8 mt-10 '>
      <h1 className='text-center font-bold text-4xl pt-5'>Recently added</h1>
      <Container>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 '>
          {
            data.products.map((prod,index)=>{
              return <ProductsCard key={`${prod.id}-${index}`} product={prod}/>
            })
          }
        </div>
      </Container>
    </div>
  )
}
