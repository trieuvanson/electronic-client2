import React, {useContext, useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {GlobalState} from "../../../GlobalState";

function Cart() {
    const state = useContext(GlobalState)
    const [carts, setCarts] = state.cartApi.cart
    const actionCart = state.cartApi.actionCart
    const [total, setTotal] = useState(0);




    useEffect(() => {
        const getTotal = () => {
            const total = carts.reduce((prev, item) => {
                return prev + (item.product?.sale_price * item.quantity)
            }, 0)
            setTotal(total)
        }
        getTotal()
    })


    const increment = (id) =>{
        carts.forEach(item => {
            if(item.id === id){
                item.quantity += 1
                actionCart.updateCartItem(id,item)
            }
        })
        setCarts([...carts])
    }

    const decrement = (id) =>{
        carts.forEach(item => {
            if(item.id === id){
                item.quantity < 2? item.quantity =1:item.quantity -= 1
                actionCart.updateCartItem(id,item)
            }
        })
        setCarts([...carts])
    }

    const onChangeInput = (e,id) =>{
        carts.forEach(item => {
            if(item.id === id){
                if (e.target.value) {
                    item.quantity = e.target.value
                    actionCart.updateCartItem(id,item)
                } else {
                }

            }
        })
        setCarts([...carts])
    }





    return (
        <div className="bg-light">
            <div className="container">
                <div className="box">
                    <div className="breadcumb">
                        <a href="./index.html">home</a>
                        <span><i className='ti-angle-right'/></span>
                        <a>Cart</a>
                        <span><i class='ti-angle-right'></i></span>
                        <a href="./product-detail.html">Điện thoại</a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="box">
                            <div className="box-table overflow-scroll">
                                <table>
                                    <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                        <th></th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        carts && carts.map((cart) => (
                                                <tr>
                                                    <td>
                                                        <div className="order-img">
                                                            <Link to={`/product/detail/${cart.product?.id}`}>
                                                                <img
                                                                    src={cart.product?.thumbnail}
                                                                    alt="user image"/>
                                                            </Link>
                                                            <Link to={`/product/detail/${cart.product?.id}`}>
                                                                <span>{cart.product?.name}</span>
                                                            </Link>
                                                        </div>
                                                    </td>
                                                    <td>${cart.product?.sale_price}</td>
                                                    <td>
                                                        <div className="order-quantity">
                                                            <div className="pro-qty">
                                                                <span className="ti-minus qtybtn" onClick onClick={() => decrement(cart.id)}/>
                                                                <input type="number" name="quantity"
                                                                       onChange={(e) => onChangeInput(e, cart.id)}
                                                                       value={cart.quantity}/>
                                                                <span className="ti-plus qtybtn" onClick={() => increment(cart.id)}/>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="order-total">
                                                            <span>${cart.product?.sale_price * cart.quantity}</span>
                                                        </div>
                                                    </td>
                                                    <td className="order__close">
                                                        <button
                                                            onClick={() => actionCart.deleteCartItem(cart.id, cart.user?.username)}>
                                                            <i className="ti-close"/>
                                                        </button>
                                                    </td>
                                                </tr>
                                            )
                                        )
                                    }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-4">
                        <div className="cart-buttons">
                            <Link to="/products" className="btn-flat btn-hover continue-shop">Continue shopping</Link>
                        </div>

                        <div className="discount-coupon">
                            <h6>Discount Codes</h6>
                            <form action="" className="coupon-form">
                                <input type="text" placeholder="Enter your code"/>
                                <button type="submit" className="site-btn coupon-btn">Appy</button>
                            </form>
                        </div>
                    </div>

                    <div className="col-4"></div>

                    <div className="col-4">
                        <div className="proceed-checkout">
                            <ul>
                                <li className="subtotal">
                                    Subtotal
                                    <span>${total}</span>
                                </li>
                                <li className="cart-total">
                                    Total
                                    <span>${total}</span>
                                </li>
                                <Link to="/cart/checkout" className="proceed-btn">PROCEED TO CHECK OUT"</Link>
                            </ul>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default Cart;