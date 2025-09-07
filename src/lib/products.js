import axios from "axios";
import jwt from "jsonwebtoken"
import redisClient from "./redis";

const getProducts = async () => {
    try {
        const response = await axios.get(`${process.env.PRODUCTS_BASE_URL}`)
        const data = response?.data?.data
        return data
    } catch (error) {
        console.error(error)
    }
}

const getProductById = async (id) => {
    try {
        const response = await axios.get(`${process.env.PRODUCTS_BASE_URL}/${id}`)
        const data = response.data.data
        return data
    } catch (error) {
        console.error(error)
    }
}

const getCategories = async () => {
    const response = await axios.get(process.env.PRODUCTS_BASE_URL)
    const products = response.data?.data
    const categories  = products.reduce((acc, product)=>{
        if(!acc.includes(product.category)){
            acc.push(product.category)
        }
        return acc
    },[])
    return categories
}

const getIdFromToken = (request)=>{
    try {
        const token = request.cookies.get("token")?.value || ""
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        return decoded.id
    } catch (error) {
        console.error(error);
        throw error    
    }
}


export { getProducts,getProductById,getCategories,getIdFromToken}