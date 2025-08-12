"use client"
import ProductsCard from '@/components/home/ProductsCard'
import React, { useState } from 'react'

export default function StoreClient({ products, categories }) {
    const [selectedCategory, setSelectedCategory] = useState("All")

    const filteredProducts = selectedCategory === "All" ? products
        : products.filter(p => p.category === selectedCategory)

    return (
        <div className='grid grid-cols-5 h-[100vh-80px] gap-4'>
            <CategoryListing
                categories={categories}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
            />
            <ProductListing filteredProducts={filteredProducts} />
        </div>
    )
}

const CategoryListing = ({ categories, selectedCategory, setSelectedCategory }) => {
    return <div className='col-span-1 sticky top-24  mt-2 shadow-md max-h-[100vh]'>
        <ul>
            {
                categories.map((c, i) => {
                    return <li onClick={() => setSelectedCategory(c)} key={"category" + i} className={`bg-gray-50 text-gray-600 hover:bg-pink-600 duration-150g ease-in-out hover:text-white hover:cursor-pointer ${selectedCategory === c ? "bg-pink-600 text-white" : ""}  py-2 text-center uppercase mb-1 font-medium rounded-lg`}>{c}</li>
                })
            }
        </ul>
    </div>
}

const ProductListing = ({ filteredProducts }) => {
    return <div className='col-span-4 grid grid-cols-4 mt-2 h-[85vh] overflow-y-auto customScrollbar shadow-md'>
        {
            filteredProducts.length > 0 ? (
                filteredProducts.map((fp, i) => {
                    return <ProductsCard key={"fp" + i} product={fp} />
                })
            ) : (<div className='col-span-4'><p className='text-center font-medium text-2xl'>No Products availabe</p></div>)
        }
    </div>
}




