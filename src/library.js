import axios from "axios";

const getProducts = async () => {
    try {
        const response = await axios.get(`${process.env.PRODUCTS_BASE_URL}`)
        const data = response.data
        return data
    } catch (error) {
        console.error(error)
    }
}

const getProductById = async (id) => {
    try {
        const response = await axios.get(`${process.env.PRODUCTS_BASE_URL}/${id}`)
        const data = response.data
        console.log("getProductById DATA ",data);
        
        return data
    } catch (error) {
        console.error(error)
    }
}

const getCategories = async () => {
    const response = await fetch(`${process.env.PRODUCTS_BASE_URL}`)
    const products = await response.json();
    const categories  = products.reduce((acc, product)=>{
        if(!acc.includes(product.category)){
            acc.push(product.category)
        }
        return acc
    },[])
    return categories
}


export { getProducts,getProductById,getCategories}