import React, {useContext, useEffect, useState} from 'react';
import Menu from "../../Menu";
import {Link} from "react-router-dom";

const OrderController = (props) => {

    return (
        <>
            <div className="bg-light">
                <div className="container">
                    <div className="box">
                        <div className="breadcumb">
                            <Link to="/">home</Link>
                            <span><i className='ti-angle-right'/></span>
                            <Link to="/account/orders/detail">Đơn hàng của bạn</Link>
                        </div>
                    </div>

                    <div className="box">
                        <div className="row">
                            {/*Bên trái/*/}
                            <Menu/>
                            {/*Bên phải*/}
                            <div className="col-8">
                                <div className="order-detail">
                                    <h1>Chi tiết đơn hàng 987456</h1>
                                    <span>-</span>
                                    <h3 className="order-detail-ready">Giao hàng thành công</h3>
                                </div>

                                <div className="row">
                                    <div className="col-12">
                                        <p className="order-detail__date">Ngày đặt hàng: 02//02/2021</p>
                                    </div>
                                    <div className="col-4">
                                        <h3 className="order-detail__heading">Địa chỉ người nhận</h3>
                                        <div className="order-detail__body">
                                            <h3 className="order-detail__user">Tân Đại</h3>
                                            <p className="order-detail__address">
                                                Địa chỉ: 228/2 KP 1B, p. An Phú, tx. Thuận An, Bình Dương
                                            </p>
                                        </div>
                                    </div>

                                    <div className="col-4">
                                        <h3 className="order-detail__heading">Hình thức giao hàng</h3>
                                        <div className="order-detail__body">
                                            <h3 className="order-detail__ship">Giao hàng tiết kiệm</h3>
                                            <p>Thứ tư, 30/11</p>
                                            <p>Được giao bởi TikiNow Smart Logistics</p>
                                            <p>Miễn phí vận chuyển</p>
                                        </div>
                                    </div>

                                    <div className="col-4">
                                        <h3 className="order-detail__heading">Hình thức thanh toán</h3>
                                        <div className="order-detail__body">
                                            <h3 className="order-detail__paypal">Thẻ ATM nội địa</h3>
                                            <p className="order-detail__succes">
                                                Thanh toán thành công
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-12">
                                        <table>
                                            <thead>
                                            <tr>
                                                <th>Sản phẩm</th>
                                                <th>Giá cả</th>
                                                <th>Số lượng</th>
                                                <th>Giảm giá</th>
                                                <th>Tạm tính</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>
                                                    <div className="order-owner">
                                                        <img src="./images/product10.jpg" alt="user image"/>
                                                            <span>tuat tran anh</span>
                                                    </div>
                                                </td>
                                                <td>290.000 <sup>đ</sup></td>
                                                <td>123</td>
                                                <td>0 <sup>đ</sup></td>
                                                <td>200.000 <sup>đ</sup></td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <div className="order-owner">
                                                        <img src="./images/product10.jpg" alt="user image"/>
                                                            <span>tuat tran anh</span>
                                                    </div>
                                                </td>
                                                <td>290.000 <sup>đ</sup></td>
                                                <td>123</td>
                                                <td>0 <sup>đ</sup></td>
                                                <td>200.000 <sup>đ</sup></td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <div className="order-owner">
                                                        <img src="./images/product10.jpg" alt="user image"/>
                                                            <span>tuat tran anh</span>
                                                    </div>
                                                </td>
                                                <td>290.000 <sup>đ</sup></td>
                                                <td>123</td>
                                                <td>0 <sup>đ</sup></td>
                                                <td>200.000 <sup>đ</sup></td>
                                            </tr>
                                            </tbody>
                                        </table>
                                        <div className="col-4 order-detail__fotter">
                                            <ul className="order-detail__list">
                                                <li className="order-detail__item">
                                                    <p>Tạm tính</p>
                                                    <span>290.000 <sup>đ</sup> </span>
                                                </li>
                                                <li className="order-detail__item">
                                                    <p>Phí vận chuyển</p>
                                                    <span>0 <sup>đ</sup> </span>
                                                </li>
                                                <li className="order-detail__item">
                                                    <p>Tạm tính</p>
                                                    <span className="order-deatail__total">290.000 <sup>đ</sup> </span>
                                                </li>
                                            </ul>
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
export default OrderController;