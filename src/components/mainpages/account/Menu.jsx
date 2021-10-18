import React, {useContext, useState} from 'react';
import {Link, useLocation} from "react-router-dom";
import {GlobalState} from "../../../GlobalState";
const Menu = () => {
    const state = useContext(GlobalState)


    const location = useLocation();
    const [user] = state.userAPI.personal





    const [menu] = useState({
        active: null,
        objects: [
            {
                id: 1,
                name: "Thông tin cá nhân",
                link: "/account/profile",
                icon: "account__icon ti-user",
                child: "/account/profile"
            },
            {
                id: 2,
                name: "Quản lý đơn hàng",
                link: "/account/orders",
                icon: "account__icon ti-briefcase",
                child: "/account/orders"
            },
            {
                id: 3,
                name: "Số điện chỉ",
                link: "/account/address",
                icon: "account__icon ti-location-pin",
                child: "/account/address"
            },
            {
                id: 4,
                name: "Thông tin thanh toán",
                link: "/account/payment",
                icon: "account__icon ti-credit-card",
                child: "/account/payment"
            },
            {
                id: 5,
                name: "Sản phẩm yêu thích",
                link: "/account/favorites",
                icon: "account__icon ti-heart",
                child: "/account/favorites"
            }
        ]
    })
    function toggleActiveStyle(index, link) {
        const menu1 = menu.objects[index];
        if (link.match(menu1.child)) {
            return "account__link account__link-active"
        } else {
            return "account__link"
        }
    }


    return (
        <div className="col-4 col-sm-12">
            <div className="account">
                <ul className="account__list" >
                    <li className="account__item">
                        <img src={user.avatar} alt="avatar" class="account__img"/>
                        <div className="account-info">
                            <h3>Tài khoản của</h3>
                            <p>{user && user.fullname}</p>
                        </div>
                    </li>
                    {
                        menu.objects.map((element, index) => (
                            <li className={toggleActiveStyle(index, location.pathname)} key={index}>
                                <Link to={element.link}
                                      className="account__link">
                                    <i className={element.icon}/>
                                    {element.name}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}
export default Menu;