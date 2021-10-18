import {useEffect, useState} from 'react';
import {LOCAL_LINK} from "../utils/hyperlink";
import axios from "axios";
import {isLogin} from "../utils/Common";

function CartApi(token, info) {
    const [carts, setCarts] = useState([])
    const user = info.personal[0]
    useEffect(() => {
        if (token && user) {
            const getCartByUsername = async () => {
                try {
                    const res = await axios.get(`${LOCAL_LINK}/api/cart/?username=${user.username}`, {
                            headers: {Authorization: `Bearer ${token}`}
                        }
                    )
                    setCarts(res.data)
                } catch (err) {
                    console.log(err)
                }
            }
            getCartByUsername();
        }
    }, [token, user])


    const addCart = async (product, quantity) => {
        if (!user) return alert("Please login to continue buying")
        const cart = JSON.stringify({
            "quantity": quantity,
            "product": {
                "id": product.id,
                "sale_price": product.sale_price,
                "thumbnail": product.thumbnail,
                "name": product.name
            },
            "user": {
                "username": user.username
            }
        });
        const check = carts.every(item => {
            return item.product.id !== product.id
        })
        if (check) {
            await axios.post(`${LOCAL_LINK}/api/cart/`, cart, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            }).then(res => {
                setCarts([...carts, res.data])
            }).catch(err => {
                console.log(err)
            })
        }

    }
    const deleteCartItem = async (id, username) => {
        await axios.delete(`${LOCAL_LINK}/api/cart/${id}&${username}`, {
            headers: {Authorization: `Bearer ${token}`}
        }).then(res => console.log(res.data))
        setCarts(carts.filter(c => c.id !== id))
    }
    const updateCartItem = async (id, cart) => {
        await axios.put(`${LOCAL_LINK}/api/cart/${id}`, cart, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
    }
    return {
        cart: [carts, setCarts],
        actionCart: {addCart, deleteCartItem, updateCartItem}
    }


}

export default CartApi