import React, {useContext, useEffect, useState} from 'react';
import Menu from "../../Menu";
import {Link, useParams} from "react-router-dom";
import {GlobalState} from "../../../../../GlobalState";
import {formatCash} from "../../../../../utils/CurrencyCommon";

const OrderDetail = (props) => {
    const params = useParams();
    const state = useContext(GlobalState)
    const [detail, setDetail] = useState([])
    const [order] = state.ordersApi.order;
    const [orderDetails] = state.ordersApi.orderDetails
    const [orderDetailsByOrder, setOrderDetailsByOrder] = useState([]);
    useEffect(() => {
        getDetails()
        getOrderDetailsByOrderId();
    }, [params.id, order])


    async function getOrderDetailsByOrderId() {
        const newArray = [];
        console.log(orderDetails)
        await orderDetails.forEach(oddt => {
            if (oddt.order.id == params.id) {
                newArray.push(oddt)
            }
        })
        setOrderDetailsByOrder(newArray)
    }
    async function getDetails() {
        await order.forEach(o => {
            if (o.id == params.id) {
                setDetail(o)
            }
        })
    }



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
                                    <h1>Chi tiết đơn hàng #{detail.id}</h1>
                                    <span>-</span>
                                    <h3 className="order-detail-ready">{detail.status}</h3>
                                </div>

                                <div className="row">
                                    <div className="col-12">
                                        <p className="order-detail__date">Thời gian: {detail.created_at}</p>
                                    </div>
                                    <div className="col-4">
                                        <h3 className="order-detail__heading">Địa chỉ người nhận</h3>
                                        <div className="order-detail__body">
                                            <h3 className="order-detail__user">{detail.address?.fullname}</h3>
                                            <p className="order-detail__address">
                                                Số điện thoại: {detail.address?.phone}
                                            </p>
                                            <p className="order-detail__address">
                                                Địa chỉ: {detail.address?.address}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="col-4">
                                        <h3 className="order-detail__heading">Hình thức giao hàng</h3>
                                        <div className="order-detail__body">
                                            {/*<h3 className="order-detail__ship">Giao hàng tiết kiệm</h3>*/}
                                            {/*<p>Thứ tư, 30/11</p>*/}
                                            {/*<p>Được giao bởi TikiNow Smart Logistics</p>*/}
                                            {/*<p>Miễn phí vận chuyển</p>*/}
                                        </div>
                                    </div>

                                    <div className="col-4">
                                        <h3 className="order-detail__heading">Hình thức thanh toán</h3>
                                        <div className="order-detail__body">
                                            <h3 className="order-detail__paypal">{detail.payment}</h3>
                                            <p className="order-detail__succes">
                                                Thành công
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
                                                <th>Đơn giá</th>
                                                <th>Số lượng</th>
                                                <th>Tổng</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {
                                                orderDetailsByOrder && orderDetailsByOrder.map((oddt, index) => (
                                                    <tr key={oddt.id}>
                                                        <td>
                                                            <div className="order-owner">
                                                                <Link to ={`/product/detail/${oddt.product?.id}`}>
                                                                    <img src={oddt.product?.thumbnail} alt="product image"/>
                                                                    <span>{oddt.product?.name}</span>
                                                                </Link>
                                                            </div>
                                                        </td>
                                                        <td>{formatCash(oddt.price)}<sup>đ</sup></td>
                                                        <td>{oddt.quantity}</td>
                                                        <td>{formatCash(oddt.price*oddt.quantity)}<sup>đ</sup></td>
                                                    </tr>
                                                ))
                                            }
                                            </tbody>
                                        </table>
                                        <div className="col-4 order-detail__fotter">
                                            <ul className="order-detail__list">
                                                <li className="order-detail__item">
                                                    <p>Tạm tính</p>
                                                    <span>{detail.subTotal>=0?formatCash(detail.subTotal):null}<sup>đ</sup> </span>
                                                </li>
                                                {/*<li className="order-detail__item">*/}
                                                {/*    <p>Phí vận chuyển</p>*/}
                                                {/*    <span>0 <sup>đ</sup> </span>*/}
                                                {/*</li>*/}
                                                <li className="order-detail__item">
                                                    <p>Giảm giá</p>
                                                    <span>{detail?.discount?.discount>=0?formatCash(detail?.discount?.discount):0} <sup>đ</sup> </span>
                                                </li>
                                                <li className="order-detail__item">
                                                    <p>Tổng cộng</p>
                                                    <span className="order-deatail__total">{detail.total?formatCash(detail.total):null} <sup>đ</sup> </span>
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
export default OrderDetail;