import React, {useContext, useEffect, useState} from 'react';
import Menu from "../Menu";
import {GlobalState} from "../../../../GlobalState";
import {useHistory} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Profile = (props) => {
    const state = useContext(GlobalState)
    const [user, setUser] = state.userAPI.personal
    const action = state.userAPI.action
    const history = useHistory();
    const onChangeInput = e => {
        const {name, value} = e.target;
        if (name === "gender") {
            if (e.target.id === "male") setUser({...user, [name]: true})
            else setUser({...user, [name]: false})
        } else {
            setUser({...user, [name]: value})
        }
    }

    const updateProfile = (e) => {
        e.preventDefault()
        action.updateProfile(user)
        toast.success("Cập nhật thông tin cá nhân thành công!")
        history.push("/account/profile")
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
                                                    <input type="text" name="phone" className="profile-input" id="phone"
                                                           value={user.phone} onChange={onChangeInput} required/>
                                                </div>
                                                <div className="form-group-profile">
                                                    <label htmlFor="" className="profile-label">Giới tính</label>
                                                    <input type="radio" name="gender" checked={user.gender}
                                                           onClick={onChangeInput}   id="male"/>
                                                    <label className="profile-gender" htmlFor="male">Nam</label>
                                                    <span className="checkmark"/>
                                                    <input type="radio" checked={!user.gender}
                                                         onClick={onChangeInput}  name="gender" id="female"/>
                                                    <label className="profile-gender" htmlFor="female">Nữ</label>
                                                    <span className="checkmark"/>
                                                </div>
                                                <div className="form-group-profile">
                                                        <label htmlFor="phone" className="profile-label">Ngày sinh</label>

                                                    <input type="date" className="profile-input" id="birthday"
                                                           name="birthday" value={user.birthday} onChange={onChangeInput} required/>

                                                </div>
                                                <div className="form-group-profile">
                                                    <label htmlFor="address" className="profile-label">Địa chỉ</label>
                                                    <textarea rows="5" cols="60" className="profile-textarea"
                                                              id="address"
                                                              name="address"
                                                              value={user.address}
                                                              onChange={onChangeInput}/>
                                                </div>

                                                <div className="profile-btn">
                                                    <button onClick={updateProfile}
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
            <ToastContainer/>
        </>
    );
}
export default Profile;