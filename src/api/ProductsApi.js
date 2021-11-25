import React, {createContext, useEffect, useState} from "react";
import {LOCAL_LINK} from "../utils/hyperlink";
import axios from "axios";
import {useLocation} from "react-router-dom";

function ProductsApi() {
    const [products, setProducts] = useState([]);
    const getProducts = async () => {
        const res = await axios.get(`${LOCAL_LINK}/api/products/`)
        setProducts(res.data)
    }

    const getProductsByBrandId = async (brandId) => {
        const res =  await axios.get(`${LOCAL_LINK}/api/products/brand/${brandId}`)
        setProducts(res.data)
    }

    const getProductsByCategoryId = async (categoryId) => {
        const res = await axios.get(`${LOCAL_LINK}/api/products/category/${categoryId}`)
        setProducts(res.data)
    }

    const findProductsByKeywordsAndFilter = async (keywords, filter) => {
        const res = await axios.get(`${LOCAL_LINK}/api/products?timkiem=${keywords}&filter=${filter}`)
        setProducts(res.data)
    }

    const getProductsByLink = async (link) => {
        const res = await axios.get(`${LOCAL_LINK}/api${link}`)
        setProducts(res.data)
    }

    const getProductsBetweenPrice = async (min, max) => {
        const res = await axios.get(`${LOCAL_LINK}/api/products/price?min=${min}&max=${max}`)
        setProducts(res.data)
    }
    return {
        products: [products, setProducts],
        productAction: {getProductsByCategoryId, getProductsByBrandId, getProducts,
            getProductsBetweenPrice, findProductsByKeywordsAndFilter, getProductsByLink}
    }
}

export default ProductsApi