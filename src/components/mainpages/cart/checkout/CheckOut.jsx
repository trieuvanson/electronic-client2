import React, {useContext, useEffect, useState} from 'react';
import PaypalButton from "../PaypalButton"
import {GlobalState} from "../../../../GlobalState";
import {Link, Redirect, useHistory} from "react-router-dom";
import address from "address";
import {formatCash} from "../../../../utils/CurrencyCommon";

const CheckOut = () => {
    const state = useContext(GlobalState)
    const [carts, setCarts] = state.cartApi.cart
    const [quantity, setQuantity] = useState(0);
    const [total, setTotal] = useState(0);
    const [note, setNote] = useState("")
    const [addresses] = state.addressesApi.address
    const [selectPayment, setSelectPayment] = useState("")
    const actionOrder = state.ordersApi.actionOrder;
    const history = useHistory();
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
    const od = {
        "status": "Mới đặt",
        "quantity": quantity,
        "total": total,
        "note": note,
        "payment": "Thanh toán Paypal"
    }
    let address = "";
    addresses.map(add => {
        {
            if (add.status) {
                address = add;
            }
        }
    });
    const tranSuccess = async (payment) => {
        await actionOrder.addOrder(address, od)
        setCarts([])
        history.push("/account/checkout/success")
    }



    const onPayCash = async () => {
        await actionOrder.addOrder(address, od)
        setCarts([])
        history.push("/account/checkout/success")
    }

    // const changePayment = () => {
    //     if (selectPayment === "paypal") {
    //         return (
    //             <PaypalButton 
    //             total={Math.round(total / 22755 * 100) / 100}
    //             tranSuccess={tranSuccess}/>
    //         )
    //     } else {
    //         return (
    //             <Link to="/account/checkout/success" className="btn-flat btn-hover your-order__btn">
    //                 Tiếp tục
    //             </Link>
    //         )
    //     }
    // }

    const [payment] = useState(
        [
            {
                id: "paypal",
                checked: true,
                name: "Paypal",
                value: "paypal",
                htmlFor: "paypal"
            },
            {
                id: "paycash",
                checked: null,
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
                                                        address.status ? <div className="address-info" key={address.id}>
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
                                                    <li className="your-order__item" key={cart.id}>
                                                        <Link to={`/product/detail/${cart.product?.id}`}>
                                                            <span>{cart.product?.name} x{cart.quantity}</span>
                                                        </Link>
                                                        <p className="Total">{formatCash(cart.product?.sale_price * cart.quantity)} <sup>đ</sup> </p>
                                                    </li>
                                                ))
                                            }


                                            <li className="your-order__item your-order__total fw-bold">
                                                <span>Total</span>
                                                <p className="Total text-primary">{formatCash(total)} <sup>đ</sup> </p>
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
                                                    <button disabled={selectPayment === "paycash"?false:true} className="btn-flat btn-hover your-order__btn"
                                                            onClick={() => onPayCash()}>Tiếp tục
                                                    </button>
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