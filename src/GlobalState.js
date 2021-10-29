import React, {createContext, useEffect, useState} from "react";
import ProductsApi from "./api/ProductsApi";
import {getToken, isLogin, removeToken} from "./utils/Common";
import UserApi from "./api/UserApi";
import CartApi from "./api/CartApi";
import FavoritesApi from "./api/FavoritesApi";
import CategoriesApi from "./api/CategoriesApi";
import AddressApi from "./api/AddressApi";
import OrdersApi from "./api/OrdersApi";

export const GlobalState = createContext({})

export const DataProvider = ({children}) =>{
    const [token, setToken] = useState("")
    useEffect(() =>{
        const loggedIn = localStorage.getItem('isLogin')
        if(loggedIn){
            const refreshToken = () =>{
                setToken(getToken().access_token)
            }
            refreshToken()
        }
    },[])
   const state = {
       tokens: [token, setToken],
       productsApi: ProductsApi(),
       userAPI: UserApi(token),
       cartApi: CartApi(token, UserApi(token)),
       favoriteApi: FavoritesApi(token, UserApi(token)),
       categoriesApi: CategoriesApi(),
       addressesApi: AddressApi(token, UserApi(token)),
       ordersApi: OrdersApi(token, UserApi(token))

   }

    return (
        <GlobalState.Provider value={state}>
            {children}
        </GlobalState.Provider>
    )
}