import React, {useContext, useEffect, useState} from 'react';
import Menu from "../Menu";
import {Link} from "react-router-dom";
import {GlobalState} from "../../../../GlobalState";

const Address = (props) => {
    const state = useContext(GlobalState)
    const [addresses] = state.addressesApi.addresses

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
                                    <h1>Sổ điện chỉ ({addresses.length})</h1>
                                    <div className="address-inner">
                                        <div className="new">
                                            <Link to="address/create" className="new-link">
                                                <i className="ti-plus new-icon"/>
                                                <span>Thêm địa chỉ</span>
                                            </Link>
                                        </div>
                                        {
                                            addresses && addresses.map(address => (
                                                <div className="address-item">
                                                    <div className="address-info">
                                                        <div className="address-info__name">
                                                            {address.fullname}
                                                            {address.status ?
                                                                <>
                                                                    <i className="ti-check address-info__icon"/>
                                                                    <span>Địa chỉ mặc định</span>
                                                                </> : null
                                                            }
                                                        </div>
                                                        <div className="address-info__address">
                                                            <span>Địa chỉ: </span> {address.address}
                                                        </div>
                                                        <div className="address-info__phone">
                                                            <span>Địa chỉ: </span> {address.phone}
                                                        </div>
                                                    </div>
                                                    <div className="address-action">
                                                        <a href="">Chỉnh sửa</a>
                                                    </div>
                                                </div>
                                            ))
                                        }
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