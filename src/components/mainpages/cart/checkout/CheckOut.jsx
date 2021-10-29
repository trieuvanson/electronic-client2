import React, {useContext, useEffect, useState} from 'react';
import PaypalButton from "../PaypalButton"
import {GlobalState} from "../../../../GlobalState";
import {Link, Redirect} from "react-router-dom";
import axios from "axios";
import NotFound from "../../utils/not_found/NotFound";
import CheckOutButton from "./CheckOutButton";


const CheckOut = () => {
    const state = useContext(GlobalState)
    const [carts, setCarts] = state.cartApi.cart
    const [quantity, setQuantity] = useState(0);
    const [total, setTotal] = useState(0);
    const [addresses] = state.addressesApi.addresses
    const [selectPayment, setSelectPayment] = useState("")


    useEffect(() => {
        const getTotal = () => {
            const total = carts.reduce((prev, item) => {
                return prev + (item.product?.sale_price * item.quantity)
            }, 0)
            const quantity = carts.reduce((prev, item) => {
                return prev + (item.quantity)
            }, 0)
            setTotal(total)
            setQuantity(quantity)
        }
        collapse();
        getTotal()
    }, [carts])

    const tranSuccess = async (payment) => {
        alert("You have successfully placed an order.")
    }

    const changePayment = (id) => {
        if (id === "paypal") {
            console.log("PaypalButton")
            return <PaypalButton
                total={Math.round(total / 22755 * 100) / 100}
                tranSuccess={tranSuccess}/>
        }
    }

    const [payment] = useState(
        [
            {
                id: "paypal",
                name: "Paypal",
                value: "paypal",
                htmlFor: "paypal"
            },
            {
                id: "paycash",
                name: "Thanh toán tiền mặt",
                value: "paycash",
                htmlFor: "paycash"
            }
        ]
    )


    async function collapse() {
        var coll = document.getElementsByClassName("collapsible");
        var i;
        for (i = 0; i < coll.length; i++) {
            coll[i].addEventListener("click", function () {
                this.classList.toggle("active");
                var content = this.nextElementSibling;
                if (content.style.display === "block") {
                    content.style.display = "none";
                } else {
                    content.style.display = "block";
                }
            });
        }
    }

    return (
        <>
            <div className="bg-light">
                <div className="container">
                    <div className="box">
                        <div className="breadcumb">
                            <a href="index.html">home</a>
                            <span><i className='ti-angle-right'></i></span>
                            <a href="cart.html">cart</a>
                            <span><i className='ti-angle-right'></i></span>
                            <a href="checkout.html">Checkout</a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6 col-md-6 col-sm-12">
                            <div className="payment-detail">
                                <h3 className="checkout__heading">Chi tiết thanh toán</h3>
                                <div className="checkout__border">
                                    <div className="address">
                                        <div className="address-inner">
                                            <div className="address-checkout">
                                                {
                                                    addresses && addresses.map(address => (
                                                        address.status ? <div className="address-info">
                                                            <div className="address-info__name">
                                                                {address.fullname}
                                                            </div>
                                                            <div className="address-info__address">
                                                                <span>Địa chỉ: </span> {address.address}
                                                            </div>
                                                            <div className="address-info__phone">
                                                                <span>Điện thoại: </span> {address.phone}
                                                            </div>
                                                        </div> : null
                                                    ))
                                                }
                                                <div className="address-action">
                                                    <Link to="/account/address">Thay đổi</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group">
                                            <div className="col-12">
                                                <label className="form-label" htmlFor="OrderNotes">
                                                    Ghi chú hoá đơn
                                                </label>
                                                <textarea name="" id="OrderNotes" cols="30" rows="10"
                                                          className="form-textarea"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-md-6 col-sm-12">
                            <div className="your-order">
                                <h3 className="checkout__heading">Đơn hàng của bạn</h3>
                                <div className="checkout__border">
                                    <div className="row">
                                        <ul className="your-order__list">
                                            <li className="your-order__item fw-bold">
                                                <span>Product</span>
                                                <p className="Total">Total</p>
                                            </li>
                                            {
                                                carts && carts.map((cart) => (
                                                    <li className="your-order__item">
                                                        <Link to={`/product/detail/${cart.product?.id}`}>
                                                            <span>{cart.product?.name} x{cart.quantity}</span>
                                                        </Link>
                                                        <p className="Total">${cart.product?.sale_price * cart.quantity}</p>
                                                    </li>
                                                ))
                                            }


                                            <li className="your-order__item your-order__total fw-bold">
                                                <span>Total</span>
                                                <p className="Total text-primary">${total}</p>
                                            </li>
                                        </ul>

                                        <div className="collapse">
                                            <div className="collapse">
                                                <div className="collapse__div">
                                                    <button type="button" className="collapsible">Chọn phương thức thanh
                                                        toán
                                                    </button>
                                                    <div className="content">
                                                        {
                                                            payment.map((p, index) => (
                                                                <div className="content-group" key={index}>
                                                                    <input type="radio" id={p.id} name="pay"
                                                                           value={p.value}
                                                                           onChange={() => setSelectPayment(p.id)}/>
                                                                    <label htmlFor={p.htmlFor}>{p.name}</label>
                                                                </div>
                                                            ))
                                                        }

                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="your-order-btn">
                                            {
                                                selectPayment === "paypal" ?
                                                    <PaypalButton
                                                        total={Math.round(total / 22755 * 100) / 100}
                                                        tranSuccess={tranSuccess}/>
                                                    :
                                                    <Link to="*" className="btn-flat btn-hover your-order__btn"
                                                          onClick={() => changePayment(payment.selected)}>Tiếp tục
                                                    </Link>
                                            }
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default CheckOut;