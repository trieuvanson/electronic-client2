import React, {useContext, useEffect, useState} from 'react';
import Menu from "../Menu";
import {GlobalState} from "../../../../GlobalState";
import {Link} from "react-router-dom";

const Address = (props) => {
    return (
        <>

            <div className="bg-light">
                <div className="container">
                    <div className="box">
                        <div className="breadcumb">
                            <a href="index.html">home</a>
                            <span><i className='ti-angle-right'></i></span>
                            <a href="address.html">Sổ địa chỉ</a>
                        </div>
                    </div>

                    <div className="box">
                        <div className="row">
                            <Menu/>

                            <div className="col-8 col-sm-12">
                                <div className="address">
                                    <h1>Sổ điện chỉ</h1>
                                    <div className="address-inner">
                                        <div className="new">
                                            <Link to="/account/address/create" className="new-link">
                                                <i className="ti-plus new-icon"/>
                                                <span>Thêm địa chỉ</span>
                                            </Link>
                                        </div>
                                        <div className="address-item">
                                            <div className="address-info">
                                                <div className="address-info__name">
                                                    Tan Dai
                                                    <i className="ti-check address-info__icon"></i>
                                                    <span>Địa chỉ mặc định</span>
                                                </div>
                                                <div className="address-info__address">
                                                    <span>Địa chỉ: </span> 228/2 KP 1B, p. An Phú, tx. Thuận An, BD
                                                </div>
                                                <div className="address-info__phone">
                                                    <span>Địa chỉ: </span> 0987010358
                                                </div>
                                            </div>
                                            <div className="address-action">
                                                <a href="">Chỉnh sửa</a>
                                            </div>
                                        </div>
                                        <div className="address-item">
                                            <div className="address-info">
                                                <div className="address-info__name">
                                                    Tan Dai
                                                    <i className="ti-check address-info__icon"></i>
                                                    <span>Địa chỉ mặc định</span>
                                                </div>
                                                <div className="address-info__address">
                                                    <span>Địa chỉ: </span> 228/2 KP 1B, p. An Phú, tx. Thuận An, BD
                                                </div>
                                                <div className="address-info__phone">
                                                    <span>Địa chỉ: </span> 0987010358
                                                </div>
                                            </div>
                                            <div className="address-action">
                                                <a href="">Chỉnh sửa</a>
                                            </div>
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
export default Address;