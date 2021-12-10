import React, {useState, useContext} from 'react';
import {Link} from "react-router-dom";
import notfound from '../../../../assets/img/error.svg';
import {Helmet} from "react-helmet";


function NotFound() {
    return (
        <>
            <Helmet>
                <title>SmartThings - Không tìm thấy trang web</title>
            </Helmet>
            <div className="bg-light">
                <div className="container">
                    <div className="box">
                        <div className="breadcumb">
                            <Link to="/">Trang chủ</Link>
                            <span><i className='ti-angle-right'></i></span>
                            <Link to="#">Không tìm thấy trang web</Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-12 col-sm-12">
                            <div className="box f-height">
                                <div className="box-header">
                                    <div className="error-img">
                                        <img src={notfound} alt="Error" className="error-404-img"/>
                                        <h3 className="error-404-header">Không tìm thấy trang web</h3>
                                    </div>
                                </div>
                                <div className="box-body error-body">
                                    <p style={{fontSize: 20 + "px" }}>
                                        Xin lỗi vì sự bất tiện này,
                                        bạn vui lòng trở lại trang chủ hoặc tìm kiếm 1 trang khác</p>
                                </div>
                                <div className="box-footer error-btn">
                                    <Link to={"/"} className="btn-flat btn-hover btn-error-404">
                                        <i className="ti-back-left"></i>
                                        <p>Trở về trang chủ</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </>

    )
}

export default NotFound