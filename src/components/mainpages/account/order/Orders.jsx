import React, {useContext, useEffect, useState} from 'react';
import Menu from "../Menu";
import {Link} from "react-router-dom";
import {GlobalState} from "../../../../GlobalState";
import {formatCash} from "../../../../utils/CurrencyCommon";
import {updateQueryString} from "../../../../utils/updateQueryString";


const Orders = (props) => {
    const state = useContext(GlobalState)
    const [order] = state.ordersApi.order

    const sortOrderByUpdate_at = () => {
        return order.sort((a,b) => {
            return new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        })
    }


    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage, setItemsPerPage] = useState(10)

    const pages = [];
    const productslength = Math.ceil(sortOrderByUpdate_at().length / itemsPerPage);

    for (let i = 0; i < productslength; i++) {
        pages.push(i + 1);
    }

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const renderPageNumbers = pages && pages.map(number => {
        return (
            <li key={number}>
                <Link to={"#"} id={number}
                      className={number === currentPage ? "active" : ""}
                      onClick={(e) => handleClickSetCurrentPage(e)}>{number}</Link>
            </li>
        )
    })
    const currentItems = sortOrderByUpdate_at().slice(indexOfFirstItem, indexOfLastItem);

    console.log(currentItems)

    const handleClickSetCurrentPage = (e) => {
        setCurrentPage(Number(e.target.id))
        window.scroll(0, 0)
    }

    const next = () => {
        if (currentPage <= renderPageNumbers.length - 1) {
            setCurrentPage(currentPage + 1)
            window.scroll(0, 0)
        }
    }

    const prev = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
            window.scroll(0, 0)
        }
    }
    return (
        <>
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
                                            order && currentItems.map((o, index) => (
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


                                        {/*<tr>*/}
                                        {/*    <td>*/}
                                        {/*        <Link to="orders/detail" className="order-link">987456</Link>*/}
                                        {/*    </td>*/}
                                        {/*    <td>*/}
                                        {/*        <div className="order-owner">*/}
                                        {/*            <span>Tên sản pham</span>*/}
                                        {/*        </div>*/}
                                        {/*    </td>*/}
                                        {/*    <td>2021-05-09</td>*/}
                                        {/*    <td>*/}
                                        {/*        123*/}
                                        {/*    </td>*/}
                                        {/*    <td>*/}
                                        {/*        <span className="order-status order-ready">*/}
                                        {/*            Đã giao*/}
                                        {/*        </span>*/}
                                        {/*    </td>*/}
                                        {/*</tr>*/}

                                        {/*<tr>*/}
                                        {/*    <td>*/}
                                        {/*        <a href="order-details.html" className="order-link">987456</a>*/}
                                        {/*    </td>*/}
                                        {/*    <td>*/}
                                        {/*        <div className="order-owner">*/}
                                        {/*            <span>Tên sản phẩm</span>*/}
                                        {/*        </div>*/}
                                        {/*    </td>*/}
                                        {/*    <td>2021-05-09</td>*/}
                                        {/*    <td>*/}
                                        {/*        123*/}
                                        {/*    </td>*/}
                                        {/*    <td>*/}
                                        {/*        <span className="order-status order-shipped">*/}
                                        {/*            chưa giao*/}
                                        {/*        </span>*/}
                                        {/*    </td>*/}
                                        {/*</tr>*/}

                                        {/*<tr>*/}
                                        {/*    <td>*/}
                                        {/*        <a href="order-details.html" className="order-link">987456</a>*/}
                                        {/*    </td>*/}
                                        {/*    <td>*/}
                                        {/*        <div className="order-owner">*/}
                                        {/*            <span>Tên sản phẩm</span>*/}
                                        {/*        </div>*/}
                                        {/*    </td>*/}
                                        {/*    <td>2021-05-09</td>*/}
                                        {/*    <td>*/}
                                        {/*        123*/}
                                        {/*    </td>*/}
                                        {/*    <td>*/}
                                        {/*        <span className="order-status order-cancel">*/}
                                        {/*            đã hủy*/}
                                        {/*        </span>*/}
                                        {/*    </td>*/}
                                        {/*</tr>*/}
                                        </tbody>
                                    </table>
                                    {
                                        renderPageNumbers.length > 0 ?
                                            <div className="box">
                                                <ul className="pagination">
                                                    <li><Link to="#"
                                                              onClick={() => prev()}><i
                                                        className='ti-angle-left'/></Link></li>
                                                    {renderPageNumbers}
                                                    <li><Link to="#"
                                                              onClick={() => next()}><i
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