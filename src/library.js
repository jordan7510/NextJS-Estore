import axios from "axios";
const getCategories = async () => {
    const response = await fetch("https://fakestoreapi.in/api/products/category")
    const data = await response.json();
    return data.categories
}

const getProducts = async () => {
    try {
        const response = await axios.get("https://fakestoreapi.in/api/products")
        const data = response.data.products
        return data
    } catch (error) {
        console.error(error)
    }
}

export { getCategories, getProducts }