import React, {useContext, useEffect, useState} from 'react';
import Menu from "../Menu";
import {Link} from "react-router-dom";


const Orders = (props) => {

    return (
        <>
            <div className="bg-light">
                <div className="container">
                    <div className="box">
                        <div className="breadcumb">
                            <a href="index.html">home</a>
                            <span><i className='ti-angle-right'/></span>
                            <a href="login.html">Thông tin tài khoản</a>
                        </div>
                    </div>

                    <div className="box">
                        <div className="row">
                            {/*Bên trái/*/}
                            <Menu/>
                            {/*Bên phải*/}
                            <div className="col-8 col-sm-12">
                                <h1>Đơn hàng của tôi</h1>
                                <div className="order-table overflow-scroll">
                                    <table>
                                        <thead>
                                        <tr>
                                            <th>Mã sản phẩm</th>
                                            <th>Sản phẩm</th>
                                            <th>Ngày mua</th>
                                            <th>Tổng</th>
                                            <th>Trạng thái</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>
                                                <Link to="/account/orders/detail" className="order-link">987456</Link>
                                            </td>
                                            <td>
                                                <div className="order-owner">
                                                    <span>Tên sản pham</span>
                                                </div>
                                            </td>
                                            <td>2021-05-09</td>
                                            <td>
                                                123
                                            </td>
                                            <td>
                                                <span className="order-status order-ready">
                                                    Đã giao
                                                </span>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <a href="order-details.html" className="order-link">987456</a>
                                            </td>
                                            <td>
                                                <div className="order-owner">
                                                    <span>Tên sản phẩm</span>
                                                </div>
                                            </td>
                                            <td>2021-05-09</td>
                                            <td>
                                                123
                                            </td>
                                            <td>
                                                <span className="order-status order-shipped">
                                                    chưa giao
                                                </span>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <a href="order-details.html" className="order-link">987456</a>
                                            </td>
                                            <td>
                                                <div className="order-owner">
                                                    <span>Tên sản phẩm</span>
                                                </div>
                                            </td>
                                            <td>2021-05-09</td>
                                            <td>
                                                123
                                            </td>
                                            <td>
                                                <span className="order-status order-cancel">
                                                    đã hủy
                                                </span>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="">
                                    <img src="./images/mascot_fail.svg" alt="mascot" className="order-noCart__img"/>
                                        <span className="order-nocart__msg">Bạn chơi có đơn hàng nào</span>
                                        <button className="btn-flat btn-hover btn-order__btn">Tiếp tực mua sắm</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Orders;