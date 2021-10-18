import React, {useContext, useEffect, useState} from 'react';
import Menu from "../Menu";
import {GlobalState} from "../../../../GlobalState";

const Favorite = (props) => {
    const state = useContext(GlobalState)
    const [user, setUser] = state.userAPI.personal

    const onChangeInput = e => {
        const {name, value} = e.target;
        setUser({...user, [name]: value})
    }
    const [error, setError] = useState("Invalid password");
    const [loading, setLoading] = useState(false);
    return (
        <>
            <div className="bg-light">
                <div className="container">
                    <div className="box">
                        <div className="breadcumb">
                            <a href="index.html">home</a>
                            <span><i className='ti-angle-right'/></span>
                            <a href="login.html">Thông tin tài khoản</a>
                        </div>
                    </div>

                    <div className="box">
                        <div className="row">
                            {/*Bên trái/*/}
                            <Menu/>
                            {/*Bên phải*/}
                            <div className="col-8 col-sm-12">
                                <div className="wish">
                                    <h1>Sản phẩm yêu thích (2)</h1>
                                    <ul className="wish-list">
                                        <li className="wish-item">
                                            <button className="btn-delete">X</button>
                                            <div className="wish-img">
                                                <img src="./images/product10.jpg" alt="ảnh"/>
                                            </div>
                                            <div className="wish-body">
                                                <a href="#" className="wish-name">Bình Đun Siêu Tốc 2 lớp Lock&Lock
                                                    EJK738WHT (1.7L) - Trắng - Hàng chính hãng Bình Đun Siêu Tốc 2 lớp
                                                    Lock&Lock EJK738WHT (1.7L) - Trắng - Hàng chính hãng</a>
                                                <div className="wish-rating">
                                                    <div className="wish-rating__base">
                                                        <i className="ti-heart"></i>
                                                        <i className="ti-heart"></i>
                                                        <i className="ti-heart"></i>
                                                        <i className="ti-heart"></i>
                                                        <i className="ti-heart"></i>
                                                    </div>
                                                    <span className="review-count">(1156 nhận xét)</span>
                                                </div>
                                                <div className="wish-description">
                                                    Thiết kế hiện đại, sang trọng
                                                    Bình Đun Siêu Tốc Lock&Lock EJK738WHT có kiểu dáng mới lạ và không
                                                    kém phần hiện đại với vẻ ngoài sang trọng. Bình được hoạt động với
                                                    công suất mạnh mẽ 1800W và...
                                                </div>
                                            </div>
                                            <div className="wish-footer">
                                                <div className="wish-price">375.000 <sup>đ</sup></div>
                                            </div>
                                        </li>
                                        <li className="wish-item">
                                            <button className="btn-delete">X</button>
                                            <div className="wish-img">
                                                <img src="./images/product10.jpg" alt="ảnh"/>
                                            </div>
                                            <div className="wish-body">
                                                <a href="#" className="wish-name">Bình Đun Siêu Tốc 2 lớp Lock&Lock
                                                    EJK738WHT (1.7L) - Trắng - Hàng chính hãng Bình Đun Siêu Tốc 2 lớp
                                                    Lock&Lock EJK738WHT (1.7L) - Trắng - Hàng chính hãng</a>
                                                <div className="wish-rating">
                                                    <div className="wish-rating__base">
                                                        <i className="ti-heart"></i>
                                                        <i className="ti-heart"></i>
                                                        <i className="ti-heart"></i>
                                                        <i className="ti-heart"></i>
                                                        <i className="ti-heart"></i>
                                                    </div>
                                                    <span className="review-count">(1156 nhận xét)</span>
                                                </div>
                                                <div className="wish-description">
                                                    Thiết kế hiện đại, sang trọng
                                                    Bình Đun Siêu Tốc Lock&Lock EJK738WHT có kiểu dáng mới lạ và không
                                                    kém phần hiện đại với vẻ ngoài sang trọng. Bình được hoạt động với
                                                    công suất mạnh mẽ 1800W và...
                                                </div>
                                            </div>
                                            <div className="wish-footer">
                                                <div className="wish-price">375.000 <sup>đ</sup></div>
                                            </div>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Favorite;