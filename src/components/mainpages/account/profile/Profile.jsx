import React, {useContext, useEffect, useState} from 'react';
import Menu from "../Menu";
import {GlobalState} from "../../../../GlobalState";

const Profile = (props) => {
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
                                <div className="profile">
                                    <h1>Thông tin tài khoản</h1>
                                    <div className="box-group f-height">
                                        <div className="col-12">
                                            <form action="">
                                                <div className="form-group-profile">
                                                    <label htmlFor="" className="profile-label">Tên đăng nhập</label>
                                                    <span>{user.username}</span>
                                                </div>
                                                <div className="form-group-profile">
                                                    <label htmlFor="name" className="profile-label">Tên</label>
                                                    <input type="text" className="profile-input" id="fullname"
                                                           name="fullname"
                                                           value={user.fullname} onChange={onChangeInput} required/>
                                                </div>
                                                <div className="form-group-profile">
                                                    <label htmlFor="email" className="profile-label">Email</label>
                                                    <input type="email" className="profile-input" id="email"
                                                           name="email"
                                                           value={user.email} onChange={onChangeInput} required/>
                                                </div>
                                                <div className="form-group-profile">
                                                    <label htmlFor="phone" className="profile-label">Số điện
                                                        thoại</label>
                                                    <input type="text" className="profile-input" id="phone"
                                                           value={user.phone} onChange={onChangeInput} required/>
                                                </div>
                                                <div className="form-group-profile">
                                                    <label htmlFor="" className="profile-label">Giới tính</label>
                                                    <input type="radio" checked={user.gender}
                                                           onChange={onChangeInput} name="radio" id="male"/>
                                                    <label className="profile-gender" htmlFor="male">Nam</label>
                                                    <span className="checkmark"/>
                                                    <input type="radio" checked={!user.gender}
                                                           onChange={onChangeInput} name="radio" id="female"/>
                                                    <label className="profile-gender" htmlFor="female">Nữ</label>
                                                    <span className="checkmark"/>
                                                </div>
                                                <div className="form-group-profile">
                                                    <label htmlFor="phone" className="profile-label">Ngày sinh</label>

                                                    <select className="profile-select">
                                                        <option value="">1</option>
                                                        <option value="">2</option>
                                                        <option value="">3</option>
                                                        <option value="">4</option>
                                                    </select>

                                                    <select className="profile-select">
                                                        <option value="">Tháng 1</option>
                                                        <option value="">Tháng 2</option>
                                                        <option value="">Tháng 3</option>
                                                        <option value="">Tháng 4</option>
                                                    </select>

                                                    <select className="profile-select">
                                                        <option value="">2021</option>
                                                        <option value="">2020</option>
                                                        <option value="">2019</option>
                                                        <option value="">2018</option>
                                                    </select>

                                                </div>
                                                <div className="form-group-profile">
                                                    <label htmlFor="phone" className="profile-label">Địa chỉ</label>
                                                    <textarea rows="5" cols="60" className="profile-textarea"
                                                              value={user.address}
                                                              onChange={onChangeInput}/>
                                                </div>

                                                <div className="profile-btn">
                                                    <button onClick={"handlerSave"}
                                                            className="btn-flat btn-hover btn-profile">Lưu
                                                    </button>
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
export default Profile;