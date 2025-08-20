import React from 'react'
import Container from '../Container'
import ProductsCard from './ProductsCard';
import { getProducts } from '@/library';

export default async function RecentlyAdded() {
const data = await getProducts();
  
  return (
    <div className='px-4 pb-8 '>
      <h1 className='text-center font-bold text-4xl pt-5'>Recently added</h1>
      <Container>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 '>
          {
            data.slice(0,10).map((prod,index)=>{
              return <ProductsCard key={`${prod.id}-${index}`} product={prod}/>
            })
          }
        </div>
      </Container>
    </div>
  )
}
