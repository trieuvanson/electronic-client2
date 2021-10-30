import {useEffect, useState} from 'react';
import {LOCAL_LINK} from "../utils/hyperlink";
import axios from "axios";

function OrdersApi(token, info) {
    const [order, setOrder] = useState([])
    const [orderDetails, setOrderDetails] = useState([])
    const user = info.personal[0]
    useEffect(() => {
        if (token && user) {
            const getOrdersByUsername = async () => {
                try {
                    const res = await axios.get(`${LOCAL_LINK}/api/order?username=${user.username}`, {
                            headers: {Authorization: `Bearer ${token}`}
                        }
                    )
                    setOrder(res.data)
                } catch (err) {
                    console.log(err)
                }
            }
            getOrdersByUsername();
        }
    }, [token, user])


    const addOrder = async (address, od) => {
        const order = JSON.stringify({
            "status": od.status,
            "quantity": od.quantity,
            "total": od.total,
            "note": od.note,
            "payment": od.payment,
            "user": user,
            "address": address
        });
        await axios.post(`${LOCAL_LINK}/api/order/`, order, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        }).then(res => {
            setOrder([...order, res.data])
            addOrderDetails(res.data)
        }).catch(err => {
            console.log(err)
        })
    }

    const addOrderDetails = async (order) => {
        await axios.post(`${LOCAL_LINK}/api/order/order-details/`, order, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        }).then(res => {
            setOrderDetails([...orderDetails, res.data])
        }).catch(err => {
            console.log(err)
        })
    }



    // const deleteCartItem = async (id, username) => {
    //     await axios.delete(`${LOCAL_LINK}/api/cart/${id}&${username}`, {
    //         headers: {Authorization: `Bearer ${token}`}
    //     }).then(res => console.log(res.data))
    //     setCarts(carts.filter(c => c.id !== id))
    // }
    // const updateCartItem = async (id, cart) => {
    //     await axios.put(`${LOCAL_LINK}/api/cart/${id}`, cart, {
    //         headers: {
    //             Authorization: `Bearer ${token}`,
    //             'Content-Type': 'application/json'
    //         }
    //     });
    // }
    return {
        order: [order, setOrder],
        orderDetails: [orderDetails, setOrderDetails],
        actionOrder: {addOrder}
    }


}

export default OrdersApi