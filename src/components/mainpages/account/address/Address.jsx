import React, {useContext, useEffect, useState} from 'react';
import Menu from "../Menu";
import {Link} from "react-router-dom";
import {GlobalState} from "../../../../GlobalState";

const Address = (props) => {
    const state = useContext(GlobalState)
    const [address] = state.addressesApi.address

    return (
        <>

            <div className="bg-light">
                <div className="container">
                    <div className="box">
                        <div className="breadcumb">
                            <Link to="/">Trang chủ</Link>
                            <span><i className='ti-angle-right'/></span>
                            <Link to="#">Sổ địa chỉ</Link>
                        </div>
                    </div>

                    <div className="box">
                        <div className="row">
                            <Menu/>
                            <div className="col-8 col-sm-12">
                                <div className="address">
                                    <h1>Sổ điện chỉ ({address.length})</h1>
                                    <div className="address-inner">
                                        <div className="new">
                                            <Link to="address/create" className="new-link">
                                                <i className="ti-plus new-icon"/>
                                                <span>Thêm địa chỉ</span>
                                            </Link>
                                        </div>
                                        {
                                            address && address.map(address => (
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
                                                        <Link to={`address/update/${address.id}`}>Chỉnh sửa</Link>
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