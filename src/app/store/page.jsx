"use client"
import Container from '@/components/Container'
import { getCategories, getProducts } from '@/library'
import React, { useEffect, useState } from 'react'

export default function StorePage() {
  const [category, setCategory] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All")

  useEffect(() => {
    const fetchData = async () => {
      const cats = await getCategories();
      const prods = await getProducts();
      setCategory(["All",...cats]);
      setProducts(prods);
    }
    fetchData()
  }, [])
  return (
    <Container>
      <div className='grid grid-cols-5 h-[100vh-80px] gap-4'>
        <CategoryListing />
        <ProductListing />
      </div>
    </Container>
  )
}

const CategoryListing = () => {
  return <div className='col-span-1 sticky top-24  mt-2 shadow-md max-h-[100vh]'>
    {/* <ul>
      {
        data.map((d, i) => {
          return <li key={"category" + i} className='bg-gray-50 text-gray-600 hover:bg-pink-600 duration-150g ease-in-out hover:text-white hover:cursor-pointer py-2 text-center uppercase mb-1 font-medium rounded-lg'>{d}</li>
        })
      }
    </ul> */}
  </div>
}

const ProductListing = () => {
  return <div className='col-span-4 grid grid-cols-4 mt-2 shadow-md'>
    {/* {
      data.map((d, i) => {
        return <ProductsCard key={i} product={d} />
      })
    } */}

  </div>
}




