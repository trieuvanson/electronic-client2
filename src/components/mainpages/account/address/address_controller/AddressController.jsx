import React, {useContext, useEffect, useState} from 'react';
import Menu from "../../Menu";
const AddressController = () => {
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
                            {/*Bên trái*/}
                            <Menu/>
                            {/*Bên phải*/}
                            <div className="col-8 col-sm-12">
                                <div className="address">
                                    <h1>Tạo sổ địa chỉ</h1>
                                    <div className="box-group f-height">
                                        <div className="col-12">
                                            <form action="">
                                                <div className="form-group-profile">
                                                    <label htmlFor="name" className="profile-label">Họ và tên</label>
                                                    <input type="text" className="profile-input" id="name" required/>
                                                </div>
                                                <div className="form-group-profile">
                                                    <label htmlFor="company" className="profile-label">Công ty</label>
                                                    <input type="text" className="profile-input" id="company"
                                                           placeholder="Nhập công ty"/>
                                                </div>
                                                <div className="form-group-profile">
                                                    <label htmlFor="phone" className="profile-label">Số điện
                                                        thoại</label>
                                                    <input type="number" className="profile-input" id="phone" required/>
                                                </div>
                                                <div className="form-group-profile">
                                                    <label htmlFor="country" className="profile-label">Tỉnh/ Thành
                                                        phố</label>
                                                    <select className="form-select">
                                                        <option value="">Chọn Tỉnh/Thành phố</option>
                                                        <option value="">Hồ chí minh</option>
                                                        <option value="">hà nội</option>
                                                        <option value="">vũng tàu</option>
                                                    </select>
                                                </div>
                                                <div className="form-group-profile">
                                                    <label htmlFor="country" className="profile-label">Quận
                                                        huyện</label>
                                                    <select className="form-select">
                                                        <option value="">Chọn Quận/Huyện</option>
                                                        <option value="">Quận 12</option>
                                                    </select>
                                                </div>
                                                <div className="form-group-profile">
                                                    <label htmlFor="country" className="profile-label">Chọn Phường
                                                        xã</label>
                                                    <select className="form-select">
                                                        <option value="">Chọn Phường/Xã</option>
                                                        <option value="">Phường 11</option>
                                                    </select>
                                                </div>
                                                <div className="form-group-profile">
                                                    <label htmlFor="phone" className="profile-label">Địa chỉ</label>
                                                    <textarea rows="5" cols="60"
                                                              className="profile-textarea"></textarea>
                                                </div>
                                                <div className="form-group-profile">
                                                    <label htmlFor="" className="profile-label">Loại địa chỉ</label>
                                                    <input type="radio" checked="checked" name="radio"
                                                           id="deliveryAddressType"/>
                                                    <label className="address-delivery"
                                                           htmlFor="deliveryAddressType">Nhà riêng/ Chung cư</label>
                                                    <span className="checkmark"></span>
                                                    <input type="radio" checked="checked" name="radio"
                                                           id="deliveryAddressType2"/>
                                                    <label className="address-delivery"
                                                           htmlFor="deliveryAddressType2">Cơ quan/ Công
                                                        ty</label>
                                                    <span className="checkmark"></span>
                                                </div>
                                                <div className="form-group-profile">
                                                    <label htmlFor="" className="profile-label"></label>
                                                    <input type="checkbox" checked="checked" name="radio" id="default"/>
                                                    <label className="address-delivery" htmlFor="default">Đặt làm
                                                        địa chỉ mặc định</label>
                                                </div>

                                                <div className="profile-btn">
                                                    <button className="btn-flat btn-hover btn-profile">Cập nhập</button>
                                                </div>
                                            </form>
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
export default AddressController;