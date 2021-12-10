import React, {useState, useContext, useEffect} from 'react'
import {Link} from "react-router-dom"
import {Helmet} from "react-helmet";
function Thanksyou() {


    return (
        <>
            <Helmet>
                <title>SmartThings - Đặt hàng thành công</title>
            </Helmet>
            <div className="bg-light">
                <div className="container">
                    <div className="box">
                        <div className="breadcumb">
                            <Link to="/">Trang chủ</Link>
                            <span><i className='ti-angle-right'/></span>
                            <Link to="#">Cảm ơn bạn</Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="thankyou">
                                <span className="thankyou__icon"><i className="ti-check"/></span>
                                <h3 className="thankyou__text">Cảm ơn bạn !</h3>
                                <p className="thankyou__dir">Đơn đặt hàng của bạn đã được hoàn thành một cách thành công.</p>
                                <Link to="/" className="btn-flat btn-hover">Quay lại trang chủ</Link>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default Thanksyou