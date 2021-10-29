import React, {useContext, useEffect, useState} from 'react';
import PaypalButton from "../PaypalButton"
import {GlobalState} from "../../../../GlobalState";
import {Link} from "react-router-dom";
import axios from "axios";



const CheckOut = () => {
    const state = useContext(GlobalState)
    const [carts, setCarts] = state.cartApi.cart
    const [quantity, setQuantity] = useState(0);
    const [total, setTotal] = useState(0);
    const [addresses] = state.addressesApi.addresses




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

    const tranSuccess = async(payment) => {
        alert("You have successfully placed an order.")
    }


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
                                    <div class="address">
                                        <div class="address-inner">
                                            <div class="address-checkout">
                                                {
                                                    addresses && addresses.map(address => (
                                                        address.status? <div className="address-info">
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
                                                <div class="address-action">
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
                                            <p>Chọn phương thức thanh toán</p>
                                            <div className="collapse__div">
                                                <button type="button" className="collapsible">Open Section 2</button>
                                                <div className="content">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                                        enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                                        nisi ut aliquip ex ea commodo consequat.</p>
                                                </div>
                                            </div>
                                            <button type="button" className="collapsible">Open Section 3</button>
                                            <div className="content">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                    aliquip ex ea commodo consequat.</p>
                                            </div>
                                            <h2>Collapsibles</h2>
                                            <p>A Collapsible:</p>
                                            <button type="button" className="collapsible">Open Collapsible</button>
                                            <div className="content">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                    aliquip ex ea commodo consequat.</p>
                                            </div>
                                        </div>

                                        <div className="your-order-btn">
                                            <PaypalButton
                                                total={Math.round(total/22755 * 100) / 100}
                                                tranSuccess={tranSuccess} />
                                            {/*<a href="thankyou.html" className="btn-flat btn-hover your-order__btn">Place*/}
                                            {/*    order</a>*/}
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