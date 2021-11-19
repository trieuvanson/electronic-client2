import React, {useContext, useEffect, useState} from 'react';
import Menu from "../../Menu";
import {GlobalState} from "../../../../../GlobalState";
import {useHistory, useLocation, useParams} from "react-router-dom";

const AddressController = () => {
    const state = useContext(GlobalState)
    const location = useLocation();
    const params = useParams();
    const [addresses] = state.addressesApi.address
    const action = state.addressesApi.action
    const history = useHistory();

    // const [fullname, setFullname] = useState("");
    // const [phone, setPhone] = useState("");
    // const [address, setAddress] = useState("");
    // const [type, setType] = useState(true);
    // const [status, setStatus] = useState(false);


    const [detail, setDetail] = useState({fullname: "", phone: "", address: "", type: true, status: false})

    useEffect(() => {
        if (location.pathname.match("update")) {
            getAddress()
        }
    }, [location.pathname, params.id, addresses])

    function getAddress() {
            addresses.forEach(add => {
                console.log(add.id)
                if (add.id == params.id) {
                    setDetail(add)
                }
            })

    }


    const onChangeInput = e => {
        const {name, value} = e.target;
        if (name === "type") {
            if (e.target.id === "HOME") setDetail({...detail, [name]: true})
            else setDetail({...detail, [name]: false})
        } else if (name === "status") setDetail({...detail, [name]: !detail.status})
        else
        {
            setDetail({...detail, [name]: value})
        }
    }

    // const onChangeInput = e => {
    //     const {name, value} = e.target;
    //     switch (name) {
    //         case "fullname" :
    //             setFullname(value)
    //             break
    //         case "phone" :
    //             setPhone(value)
    //             break
    //         case "address" :
    //             setAddress(value)
    //             break
    //         case "type" :
    //             if (e.target.id === "HOME") setType(true)
    //             else setType(false)
    //             break
    //         case "status" :
    //             setStatus(!status)
    //             break
    //     }
    // }

    const addAddress = item => {
        action.addAddress(item)
        history.push("/account/address")
        window.location.reload()
    }

    const updateAddress = (id,item) => {
        action.updateAddress(id,item)
        history.push("/account/address")
        window.location.reload()

    }
    const modify = () => {
        if (location.pathname.match("create")) return (
            <div className="profile-btn">
                <button onClick={() => addAddress(detail)} className="btn-flat btn-hover btn-profile">Lưu</button>
            </div>
        )
        else return (
            <div className="profile-btn">
                <button onClick={() => updateAddress(detail.id,detail)} className="btn-flat btn-hover btn-profile">Cập nhật</button>
            </div>
        )
    }


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
                                                    <input type="text" className="profile-input" name="fullname"
                                                           onChange={onChangeInput} value={detail.fullname} id="name"
                                                           required/>
                                                </div>
                                                {/*<div className="form-group-profile">*/}
                                                {/*    <label htmlFor="company" className="profile-label">Công ty</label>*/}
                                                {/*    <input type="text" className="profile-input" id="company"*/}
                                                {/*           placeholder="Nhập công ty"/>*/}
                                                {/*</div>*/}
                                                <div className="form-group-profile">
                                                    <label htmlFor="phone" className="profile-label">Số điện
                                                        thoại</label>
                                                    <input type="text" className="profile-input"
                                                           onChange={onChangeInput} value={detail.phone} name="phone"
                                                           id="phone" required/>
                                                </div>
                                                <div className="form-group-profile">
                                                    <label htmlFor="phone" className="profile-label">Địa chỉ</label>
                                                    <textarea rows="5" cols="60"
                                                              onChange={onChangeInput} value={detail.address}
                                                              name="address" className="profile-textarea"/>
                                                </div>
                                                <div className="form-group-profile">
                                                    <label htmlFor="" className="profile-label">Loại địa chỉ</label>
                                                    <input type="radio" checked={detail.type} name="type"
                                                           onClick={onChangeInput} id="HOME"/>
                                                    <label className="address-delivery"
                                                           htmlFor="HOME">Nhà riêng/ Chung cư</label>
                                                    <span className="checkmark"/>
                                                    <input type="radio" name="type"
                                                           onClick={onChangeInput} checked={!detail.type}
                                                           id="COMPANY"/>
                                                    <label className="address-delivery"
                                                           htmlFor="COMPANY">Cơ quan/ Công ty</label>
                                                    <span className="checkmark"/>
                                                </div>
                                                <div className="form-group-profile">
                                                    <label htmlFor="" className="profile-label"/>
                                                    <input checked={detail.status} type="checkbox" name="status" id="status"
                                                           onChange={onChangeInput}/>
                                                    <label className="address-delivery" htmlFor="default">Đặt làm địa
                                                        chỉ mặc định</label>
                                                </div>
                                                {modify()}

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