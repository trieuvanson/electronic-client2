import React, {useContext, useEffect, useState} from 'react';
import Slides from "./Slides";
import Promotion from "./Promotion";
import BestSeller from "./BestSeller";
import {GlobalState} from "../../../GlobalState";
import Feature from "./Feature";
import {useLocation} from "react-router-dom";

export default function Home() {
    const state = useContext(GlobalState)
    const [brands] = state.categoriesApi.brands
    const [products] = state.productsApi.products
    const [slides] = state.categoriesApi.slides
    const productAction = state.productsApi.productAction
    const location = useLocation()
    useEffect(() => {
        if (location.pathname.match("/") || location.pathname.match("/home")) {
            productAction.getProductsByLink("/products/")
        }
    }, [products, location])
    const getPromotion = brands.filter(brand => brand.name.match("Điện Thoại") || brand.name.match("Laptop") || brand.name.match("Máy tính bảng"))
    const getBestSeller = products.filter(product => product.best_seller === true)
    const getFeature = products.filter(product => product.features === true)


    return (
        <>
            <Slides item={slides}/>
            <Promotion item={getPromotion}/>
            <Feature item={getFeature}/>
            <BestSeller item={getBestSeller}/>
        </>
    )
}