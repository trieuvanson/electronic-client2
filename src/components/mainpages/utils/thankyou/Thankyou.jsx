import React, {useState, useContext, useEffect} from 'react'
import {Link} from "react-router-dom"
function Thankyou() {


    return (
        <div className="bg-light">
            <div className="container">
                <div className="box">
                    <div className="breadcumb">
                        <a href="index.html">home</a>
                        <span><i className='ti-angle-right'></i></span>
                        <a href="thankyou.html">Cảm ơn bạn</a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="thankyou">
                            <span className="thankyou__icon"><i className="ti-check"></i></span>
                            <h3 className="thankyou__text">Cảm ơn bạn !</h3>
                            <p className="thankyou__dir">Đơn đặt hàng của bạn đã được hoàn thành một cách thành công.</p>
                            <Link to="/" className="btn-flat btn-hover">Quay lại trang chủ</Link>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Thankyou