import React, {createContext, useEffect, useState} from "react";
import {LOCAL_LINK} from "../utils/hyperlink";
import axios from "axios";
import {useLocation} from "react-router-dom";

function ProductsApi() {
    const [products, setProducts] = useState([]);
    const getProducts = async () => {
        const res = await axios.get(`${LOCAL_LINK}/api/product/`)
        setProducts(res.data)
    }

    const getProductsByBrandId = async (brandId) => {
        const res = await axios.get(`${LOCAL_LINK}/api/product/brand/${brandId}`)
        return res.data
    }

    const getProductsByCategoryId = async (categoryId) => {
        return await axios.get(`${LOCAL_LINK}/api/product/category/${categoryId}`)
    }

    useEffect(() => {
        getProducts()
    }, [])


    return {
        products: [products, setProducts],
        productAction: {getProductsByCategoryId, getProductsByBrandId, getProducts}
    }
}

export default ProductsApi