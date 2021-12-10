import React, {useState, useContext} from 'react';
import axios from "axios";
import {LOCAL_LINK} from "../../../utils/hyperlink";
import {Link} from "react-router-dom";
import {Helmet} from "react-helmet";

function Register() {
    const [user, setUser] = useState({
        fullname: "" ,username:"", password: "", email: ""
    })
    const [cfmPassword, setCfmpassword] = useState("")
    const onChangeInput = e =>{
        const {name, value} = e.target;
        setUser({...user, [name]:value})
    }

    const handlerRegister = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${LOCAL_LINK}/api/register`, user)
            window.location.href ="/login"
        } catch (error) {
            console.error(error)
        }
    }




    return (
        <>
            <Helmet>
                <title>SmartThings - Đăng ký</title>
            </Helmet>
            <div className="bg-light">
                <div className="container">
                    <div className="box">
                        <div className="breadcumb">
                            <Link to="/">home</Link>
                            <span><i className='ti-angle-right'/></span>
                            <Link to="/register">Đăng ký</Link>
                        </div>
                    </div>

                    <section>
                        <div className="img-bg">
                            <img src="http://res.cloudinary.com/trieuvanson/image/upload/v1633772970/electronic/products/uxbteir1dwladh6lumcn.jpg" alt="Hình ảnh background login"/>
                        </div>
                        <div className="noi-dung">
                            <div className="form">
                                <h2>Account Register</h2>
                                <form action="" onSubmit={handlerRegister}>
                                    <div className="input-form">
                                        <span>Full name</span>
                                        <input type="text" name="fullname" onChange={onChangeInput}
                                               value={user.fullname}/>
                                    </div>
                                    <div className="input-form">
                                        <span>Username</span>
                                        <input type="text" name="username" onChange={onChangeInput}
                                               value={user.username}/>
                                    </div>
                                    <div className="input-form">
                                        <span>Password</span>
                                        <input type="password" name="password"
                                             value={user.password}  onChange={onChangeInput}/>
                                    </div>
                                    <div className="input-form">
                                        <span>Confirm Password</span>
                                        <input type="password" name="cfmPassword"
                                             value={cfmPassword}  onChange={e => setCfmpassword(e.target.value)}/>
                                    </div>
                                    <div className="input-form">
                                        <span>Email</span>
                                        <input type="email" name="email" onChange={onChangeInput}
                                               value={user.email}/>
                                    </div>
                                    <div className="input-form">
                                        <input type="submit" value="Đăng ký"/>
                                    </div>
                                    <div className="input-form">
                                        <p>Bạn đã có tài khoản <Link to="/login">đăng nhập</Link> ngay</p>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default Register