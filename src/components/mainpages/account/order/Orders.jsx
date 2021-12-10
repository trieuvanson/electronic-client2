import React, {useContext, useEffect, useState} from 'react';
import Menu from "../Menu";
import {Link} from "react-router-dom";
import {GlobalState} from "../../../../GlobalState";
import {formatCash} from "../../../../utils/CurrencyCommon";
import {Helmet} from "react-helmet";
import Pagination from "../../../../api/Pagination";

const Orders = (props) => {
    const state = useContext(GlobalState)
    const [order] = state.ordersApi.order

    const sortOrderByUpdate_at = () => {
        return order.sort((a,b) => {
            return new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        })
    }
    const pagination = new Pagination(sortOrderByUpdate_at())
    return (
        <>
            <Helmet>
                <title>SmartThings - Quản lý đơn hàng</title>
            </Helmet>
            <div className="bg-light">
                <div className="container">
                    <div className="box">
                        <div className="breadcumb">
                            <Link to="/">Trang chủ</Link>
                            <span><i className='ti-angle-right'/></span>
                            <Link to="/account/orders">Quản lý đơn hàng</Link>
                        </div>
                    </div>

                    <div className="box">
                        <div className="row">
                            {/*Bên trái/*/}
                            <Menu/>
                            {/*Bên phải*/}
                            <div className="col-8 col-sm-12">
                                <h1>Đơn hàng của tôi ({order.length})</h1>
                                <div className="order-table overflow-scroll">
                                    <table>
                                        <thead>
                                        <tr>
                                            <th>STT</th>
                                            <th>Họ và tên</th>
                                            <th>Thời gian</th>
                                            <th>Hình thức thanh toán</th>
                                            <th>Tổng</th>
                                            <th>Trạng thái</th>
                                        </tr>
                                        </thead>
                                        <tbody>

                                        {
                                            order && pagination.currentItems.map((o, index) => (
                                                <tr key={o.id}>
                                                    <td>
                                                        <Link to={`orders/${o.id}`}
                                                              className="order-link">#{++index}</Link>
                                                    </td>
                                                    <td>
                                                        <Link to={`orders/${o.id}`}
                                                              className="order-link">
                                                        <div className="order-owner">
                                                            <span>{o.address?.fullname}</span>
                                                        </div>
                                                        </Link>
                                                    </td>
                                                    <td>{o.created_at}</td>
                                                    <td>{o.payment}</td>
                                                    <td>{o?formatCash(o.total):null} <sup>đ</sup> </td>
                                                    <td>
                                                        <span className="order-status order-ready">
                                                            {o.status}
                                                        </span>
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                        </tbody>
                                    </table>
                                    {
                                        pagination.renderPageNumbers.length > 0 ?
                                            <div className="box">
                                                <ul className="pagination">
                                                    <li><Link to="#"
                                                              onClick={() => pagination.prev()}><i
                                                        className='ti-angle-left'/></Link></li>
                                                    {pagination.renderPageNumbers}
                                                    <li><Link to="#"
                                                              onClick={() => pagination.next()}><i
                                                        className='ti-angle-right'/></Link></li>
                                                </ul>
                                            </div>
                                            :
                                            null
                                    }
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