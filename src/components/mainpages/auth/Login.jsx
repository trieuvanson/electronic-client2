import React, {useState, useContext} from 'react';
import axios from "axios";
import {LOCAL_LINK} from "../../../utils/hyperlink";
import {setLogin, setToken} from "../../../utils/Common";



function Login() {
    const [user, setUser] = useState({
        username:'', password: ''
    })
    const onChangeInput = e =>{
        const {name, value} = e.target;
        setUser({...user, [name]:value})
    }

    const handlerLogin = async (e) => {
        e.preventDefault();
        try {
            console.log(user)
            await axios.post(`${LOCAL_LINK}/api/login`, user).then(res => {
                setLogin(true)
                setToken(res.data.tokens)
            })
            window.location.href ="/"
        } catch (error) {
            alert(error.response);
        }
    }

    return (
        <>
            <div className="bg-light">
                <div className="container">
                    <div className="box">
                        <div className="breadcumb">
                            <a href="index.html">home</a>
                            <span><i className='ti-angle-right'></i></span>
                            <a href="login.html">Đăng ký</a>
                        </div>
                    </div>

                    <section>
                        <div className="img-bg">
                            <img src="http://res.cloudinary.com/trieuvanson/image/upload/v1633772970/electronic/products/uxbteir1dwladh6lumcn.jpg"
                                 alt="Hình ảnh background login"/>
                        </div>
                        <div className="noi-dung">
                            <div className="form">
                                <h2>Account Login</h2>
                                <form action="">
                                    <div className="input-form">
                                        <span>Tên người dùng</span>
                                        <input type="text" name="username" onChange={onChangeInput}
                                               value={user.username} required/>
                                    </div>
                                    <div className="input-form">
                                        <span>Mật khẩu</span>
                                        <input type="password" name="password" onChange={onChangeInput}
                                               value={user.password}/>
                                    </div>
                                    <div className="nho-dang-nhap">
                                        <label><input type="checkbox" name=""/>Nhớ đăng nhập</label>
                                    </div>
                                    <div className="input-form">
                                        <input type="submit" value="Đăng Nhập" onClick={handlerLogin} required/>
                                    </div>
                                    <div className="input-form">
                                        <p>Bạn chưa có tài khoản? <a href="register.html">Đăng ký</a></p>
                                    </div>
                                </form>
                                <h3>Đăng Nhập Bằng Mạng Xã Hội</h3>
                                <ul className="icon-dang-nhap">
                                    <li><i className="ti-facebook"/></li>
                                    <li><i className="ti-google"/></li>
                                    <li><i className="ti-twitter"/></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}

export default Login