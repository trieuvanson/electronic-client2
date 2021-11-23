import React, {useState, useContext, useEffect} from 'react';
import {Link, useHistory, useLocation} from "react-router-dom";
import {GlobalState} from "../../GlobalState";
function Header()  {
    const state = useContext(GlobalState);
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const [user] = state.userAPI.personal
    const [carts] = state.cartApi.cart
    const [categories] = state.categoriesApi.categories
    const [brands] = state.categoriesApi.brands
    const history = useHistory();
    const location = useLocation();
    const query = new URLSearchParams(useLocation().search);
    const [search, setSearch] = useState(query.get("timkiem") || "");

    const onSubmit = (e) => {
        e.preventDefault();

        if (search.length === 0) return;
        if (!new RegExp(/^[A-Za-z0-9\s]{3,}$/).test(search)) return;

        history.push({
            pathname: `/products`,
            search: `?timkiem=${search}`,
        });
    };

    useEffect(() => {
        if (!location.search.match("timkiem")) {
            setSearch("");
        }
    }, [location]);



    const handlerLogout = () => {
        localStorage.clear();
        window.location.href ="/login"
    }



    return (
        <header>
            <div className="mobile-menu bg-second">
                <Link to="/" onClick={() => {
                    window.location.href = "/"
                }} className="mb-logo">Smart Things</Link>
                <span className="mb-menu-toggle" id="mb-menu-toggle">
                <i className='ti-menu'/>
            </span>
            </div>

            <div className={click ? "header-wrapper active" : "header-wrapper"} id="header-wrapper">
            <span className="mb-menu-toggle mb-menu-close" id="mb-menu-close">
                <i className='ti-close' onClick={closeMobileMenu}/>
            </span>
                {/*Top*/}
                <div className="bg-main">
                    <div className="top-header container">
                        <ul className="devided">
                            <li className="devided__item">
                                <a href="tel:+84987010358">+84 987010358</a>
                            </li>
                            <li className="devided__item">
                                <a href="mailto:smartthings@mail.com">smartthings@mail.com</a>
                            </li>
                        </ul>
                        {
                            localStorage.getItem("isLogin")?
                                <ul className="devided">
                                    <li className="dropdown">
                                        <a href="#">Xin chào {user.username} </a>
                                        <i className='ti-angle-down'/>
                                        <ul className="dropdown-content">
                                            <li><Link to="/account/profile">Cá nhân</Link></li>
                                            <li><Link to="/login" onClick={handlerLogout}>Đăng xuất</Link></li>
                                        </ul>
                                    </li>
                                </ul> :
                                <ul className="devided">
                                    <li className="dropdown">
                                        <Link to="">Tài khoản</Link>
                                        <i className='ti-angle-down'/>
                                        <ul className="dropdown-content">
                                            <li><Link to="/login">Đăng nhập</Link></li>
                                            <li><Link to="/register">Đăng ký</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                        }
                    </div>
                </div>
                <div className="bg-primary">
                    <div className="mid-header container">
                        <Link to=""  className="logo">Smart Things</Link>
                        <div className="search">
                            <input type="text" name="timkiem"
                                   onFocus={(e) => e.target.select()}
                                   value={search}
                                   onChange={(e) => setSearch(e.target.value)}
                                   placeholder="Tìm kiếm"/>
                            <i className='ti-search' onClick={onSubmit}/>
                        </div>
                        <ul className="user-menu">
                            <li><a href="#"><i className='ti-bell'></i></a></li>
                            <li>
                                <Link to="/cart" className="cart" >
                                    <i className='ti-shopping-cart'></i>
                                    <span className="bagged">{carts.length || 0}</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                {/*Menu*/}
                <div className="bg-second">
                    <div className="bottom-header container">
                        <ul className="main-menu">
                            <li><Link to="">Trang Chủ</Link></li>
                            {/*mega menu*/}
                            <li className="mega-dropdown">
                                <Link to="/products">
                                    Sản Phẩm
                                    <i className='ti-angle-down'/>
                                </Link>
                                <div className="mega-content">
                                    <div className="row">
                                        {
                                            brands?.map(brand => {
                                                return (
                                                    <div className="col-3 col-md-12" key={brand.id}>
                                                        <div className="box">
                                                            <Link to={`/products/brand/${brand.id}`}>
                                                                <h3>{brand.name}</h3></Link>
                                                            <ul>
                                                                {
                                                                    categories && categories.map(c => {
                                                                        if (c.brand.id === brand.id) {
                                                                            return (
                                                                                <li key={c.id}>
                                                                                    <Link to={`/products/category/${c.id}`}>{c.name}</Link>
                                                                                </li>
                                                                            )
                                                                        }
                                                                    })
                                                                }
                                                            </ul>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                    <div className="row img-row">
                                        <div className="col-3">
                                            <div className="box">
                                                <img src="./images/product1.jpg" alt=""/>
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <div className="box">
                                                <img src="./images/product10.jpg" alt=""/>
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <div className="box">
                                                <img src="./images/product11.jpg" alt=""/>
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <div className="box">
                                                <img src="./images/product12.jpg" alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            {/*end mega menu*/}
                            <li><Link to="">Tin Tức</Link></li>
                            <li><Link to="">Liên Hệ</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
