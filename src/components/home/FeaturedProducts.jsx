import React from 'react'
import ProductsCard from './ProductsCard'
import Container from '../Container'

export default async function FeaturedProducts() {
    const response = await fetch("https://fakestoreapi.in/api/products?limit=5")
    const data = await response.json()

    return (
        <div className='px-4 pb-8 mt-20 bg-gray-100'>
            <h1 className='text-center font-bold text-4xl pt-5'>Featured Products</h1>
            <Container>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 '>
                    {
                        data.products.map((prod) => {
                            return <ProductsCard key={prod.id} product={prod} />
                        })
                    }
                </div>
            </Container>
        </div>
    )
}
