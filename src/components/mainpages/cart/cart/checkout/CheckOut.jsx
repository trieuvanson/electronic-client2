import React from 'react';
import async from "async";
const CheckOut = () => {

    React.useEffect(() => {
        collapse();
    })

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
                        <div className="col-12">
                            <div className="checkout__login">
                                <span>Phản hồi khách hàng</span>
                                <a href="">nhấp vào đây</a>
                                <span>để đăng nhập</span>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-6 col-md-6 col-sm-12">
                            <div className="payment-detail">
                                <h3 className="checkout__heading">Chi tiết thanh toán</h3>
                                <div className="checkout__border">
                                    <div className="row">
                                        <div className="form-group">
                                            <div className="col-6">
                                                <label className="form-label" htmlFor="firstname">
                                                    First Name
                                                    <span className="text-danger">*</span>
                                                </label>
                                                <input type="text" className="form-control" id="firstname"/>
                                            </div>
                                            <div className="col-6">
                                                <label className="form-label" htmlFor="lastname">
                                                    Last Name
                                                    <span className="text-danger">*</span>
                                                </label>
                                                <input type="text" className="form-control" id="lastname"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group">
                                            <div className="col-12">
                                                <label className="form-label" htmlFor="Address">
                                                    Address
                                                    <span className="text-danger">*</span>
                                                </label>
                                                <input type="text" className="form-control" id="Address"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group">
                                            <div className="col-6">
                                                <label className="form-label" htmlFor="EmailAddress">
                                                    Email Address
                                                    <span className="text-danger">*</span>
                                                </label>
                                                <input type="text" className="form-control" id="EmailAddress"/>
                                            </div>
                                            <div className="col-6">
                                                <label className="form-label" l="" htmlFor="Phone">
                                                    Phone
                                                    <span className="text-danger">*</span>
                                                </label>
                                                <input type="text" className="form-control" id="Phone"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group">
                                            <div className="col-12">
                                                <label className="form-label" htmlFor="OrderNotes">
                                                    Order Notes
                                                    <span className="text-danger">*</span>
                                                </label>
                                                <textarea name="" id="OrderNotes" cols="30" rows="10"
                                                          className="form-textarea"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group">
                                            <a href="#" className="payment-detail__link">Nhấn vào đây</a>
                                            <h3 className="payment-detail__text">nếu bạn muốn tạo tài khoản?</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-md-6 col-sm-12">
                            <div className="your-order">
                                <h3 className="checkout__heading">Your Order</h3>
                                <div className="checkout__border">
                                    <div className="row">
                                        <ul className="your-order__list">
                                            <li className="your-order__item fw-bold">
                                                <span>Product</span>
                                                <p className="Total">Total</p>
                                            </li>
                                            <li className="your-order__item">
                                                <span>Product</span>
                                                <p className="Total">$60.000</p>
                                            </li>
                                            <li className="your-order__item">
                                                <span>Product</span>
                                                <p className="Total">$60.000</p>
                                            </li>
                                            <li className="your-order__item your-order__total fw-bold">
                                                <span>Total</span>
                                                <p className="Total text-primary">$60.000</p>
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
                                            <a href="thankyou.html" className="btn-flat btn-hover your-order__btn">Place
                                                order</a>
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
