import React, {useContext, useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {GlobalState} from "../../../GlobalState";
import {formatCash} from "../../../utils/CurrencyCommon";
import {Helmet} from "react-helmet";

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
        <>
            <Helmet>
                <title>SmartThings - Giỏ hàng</title>
            </Helmet>
            <div className="bg-light">
                <div className="container">
                    <div className="box">
                        <div className="breadcumb">
                            <Link to="/">Trang chủ</Link>
                            <span><i className='ti-angle-right'/></span>
                            <Link to={"#"}>Giỏ hàng</Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="box">
                                <div className="box-table overflow-scroll">
                                    <table>
                                        <thead>
                                        <tr>
                                            <th>Sản phẩm</th>
                                            <th>Giá thành</th>
                                            <th className="text-center">Số lượng</th>
                                            <th className="text-center">Tổng</th>
                                            <th></th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            carts && carts.map((cart) => (
                                                    <tr key={cart.id}>
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
                                                        <td>{formatCash(cart.product?.sale_price)} <sup>đ</sup> </td>
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
                                                            <div className="order-total text-center">
                                                                <span>{formatCash(cart.product?.sale_price * cart.quantity)} <sup>đ</sup></span>
                                                            </div>
                                                        </td>
                                                        <td className="order__close text-center">
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
                                <Link to="/products/" className="btn-flat btn-hover continue-shop">Tiếp tục mua hàng</Link>
                            </div>

                        </div>

                        <div className="col-4"></div>

                        <div className="col-4">
                            <div className="proceed-checkout">
                                <ul>
                                    <li className="cart-total">
                                        Tổng cộng
                                        <span>{formatCash(total)} <sup>đ</sup> </span>
                                    </li>
                                    <Link to={carts.length>0 && total>0?"/cart/checkout":"#"} className="proceed-btn">Đi đến thanh toán</Link>
                                </ul>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </>

    );
}

export default Cart;
