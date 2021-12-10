import React, {useContext, useEffect, useState} from 'react'
import Product from "./product/Product";
import {Link, useHistory, useLocation, useParams} from "react-router-dom";
import {GlobalState} from "../../../GlobalState";
import Loading from "../utils/loading/Loading";
import Pagination from "../../../api/Pagination";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Helmet} from "react-helmet";
function Products() {
    const state = useContext(GlobalState)
    const location = useLocation()
    const action = state.productsApi.productAction;
    const [products] = state.productsApi.products;
    const query = new URLSearchParams(location.search);
    const search = query.get("timkiem") || "";
    const colors = []
    products.map(product => product.color).forEach(c => {
        if (!colors.includes(c)) {
            colors.push(c)
        }
    })
    const [filters, setFilters] = useState({
        search: query.get("timkiem") || "",
        min: "", max: "",
        features: false,
        bestSeller: false,
        category: [],
        colors: [],
        sort: ""
    })

    useEffect(() => {
        if (!location.search) {
            action.getProductsByLink(location.pathname)
        } else {
            action.getProductsByFilterUserUi(filters)
        }

    }, [location, search])
    const pagination = new Pagination(products)
    const inputChange = (e) => {
        const {name, value} = e.target
        console.log(value)
        if (name === "colors") {
            let newArray = [...filters.colors, value];
            if (filters.colors.includes(value)) {
                newArray = newArray.filter(c => c !== value)
            }
            setFilters({...filters, [name]: newArray})
        } else if (name === "category") {
            let newArray = [...filters.category, value];
            if (filters.category.includes(value)) {
                newArray = newArray.filter(c => c !== value)
            }
            setFilters({...filters, [name]: newArray})
        } else {
            setFilters({...filters, [name]: value})
        }
    }

    const onclickChange = (e) => {
        const {name} = e.target
        setFilters({...filters, [name]: !filters[name]})
    }

    const submitFilter = (e) => {
        e.preventDefault()
        action.getProductsByFilterUserUi(filters)
        toast.success("Đã lọc sản phẩm!", {
            autoClose: 1000
        })
    }
    return (
        <>
            <Helmet>
                <title>SmartThings - Sản phẩm</title>
            </Helmet>
            <div className="bg-light">
                <div className="container">
                    <div className="box">
                        <div className="breadcumb">
                            <Link to="/">Trang chủ</Link>
                            <span><i className='ti-angle-right'/></span>
                            <Link to="/products/">Tất cả sản phẩm</Link>
                        </div>
                    </div>
                    <div className="box">
                        <div className="row">
                            <div className="col-3 bg-second filter-col" id="filter-col">
                                <div className="box filter-toggle-box">
                                    <button className="btn-flat btn-hover" id="filter-close">close</button>
                                </div>
                                <div className="box">
                                <span className="filter-header">
                                    Sắp xếp
                                </span>
                                    <div className="form-group">
                                        <select name="sort" value={filters.sort}
                                                onChange={inputChange} className="form-select">
                                            <option value="">Tất cả</option>
                                            <option value="Mới nhất">Mới nhất</option>
                                            <option value="Cũ nhất">Cũ nhất</option>
                                            <option value="Giá thấp nhất">Giá thấp nhất</option>
                                            <option value="Giá cao nhất">Giá cao nhất</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="box">
                            <span className="filter-header">
                                Khoảng giá
                            </span>
                                    <div className="price-range">
                                        <input type="number" value={filters.min} onChange={inputChange}
                                               name="min"/>
                                        <span>-</span>
                                        <input type="number" value={filters.max} onChange={inputChange}
                                               name="max"/>
                                    </div>
                                    <button className="btn mt-10" onClick={submitFilter}>Áp dụng</button>
                                </div>
                                <div className="box">
                                    <ul className="filter-list">
                                        <li>
                                            <div className="group-checkbox">
                                                <input type="checkbox" id="status3"
                                                       name={"features"} value={filters.features}
                                                       onChange={onclickChange}/>
                                                <label htmlFor="status3">
                                                    Nổi bật
                                                    <i className='ti-check'></i>
                                                </label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="group-checkbox">
                                                <input type="checkbox" id="status4"
                                                       name={"bestSeller"} value={filters.bestSeller}
                                                       onChange={onclickChange}/>
                                                <label htmlFor="status4">
                                                    Bán chạy
                                                    <i className='ti-check'></i>
                                                </label>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="box">
                            <span className="filter-header">
                                Nhãn hiệu
                            </span>
                                    <ul className="filter-list">
                                        <li>
                                            <div className="group-checkbox">
                                                <input type="checkbox" id="remember1"
                                                       name={"category"} value={"Samsung"}
                                                       onChange={inputChange}/>
                                                <label htmlFor="remember1">
                                                    Samsung
                                                    <i className='ti-check'></i>
                                                </label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="group-checkbox">
                                                <input type="checkbox" id="remember2"
                                                       name={"category"} value={"Iphone"}
                                                       onChange={inputChange}/>
                                                <label htmlFor="remember2">
                                                    iPhone
                                                    <i className='ti-check'></i>
                                                </label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="group-checkbox">
                                                <input type="checkbox" id="remember3"
                                                       name={"category"} value={"Xiaomi"}
                                                       onChange={inputChange}/>
                                                <label htmlFor="remember3">
                                                    Xiaomi
                                                    <i className='ti-check'></i>
                                                </label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="group-checkbox">
                                                <input type="checkbox" id="remember4"
                                                       name={"category"} value={"Huawei"}
                                                       onChange={inputChange}/>
                                                <label htmlFor="remember4">
                                                    Huawei
                                                    <i className='ti-check'></i>
                                                </label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="group-checkbox">
                                                <input type="checkbox" id="remember5"
                                                       name={"category"} value={"Sony"}
                                                       onChange={inputChange}/>
                                                <label htmlFor="remember5">
                                                    Sony
                                                    <i className='ti-check'></i>
                                                </label>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="box">
                            <span className="filter-header">
                                Màu sắc
                            </span>
                                    <ul className="filter-list">
                                        {
                                            colors.map((color, index) => {
                                                return (
                                                    <li key={index}>
                                                        <div className="group-checkbox">
                                                            <input type="checkbox"
                                                                   id={`color${index + 1}`}
                                                                   value={color} name={"colors"}
                                                                   onChange={inputChange}/>
                                                            <label htmlFor={`color${index + 1}`}>
                                                            <span className="color-filter"
                                                                  style={{backgroundColor: color}}>{color}</span>
                                                                <i className='ti-check'></i>
                                                            </label>
                                                        </div>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                            <div className="col-9 col-md-12">
                                <div className="box filter-toggle-box">
                                    <button className="btn-flat btn-hover" id="filter-toggle">filter</button>
                                </div>
                                <div className="box">
                                    <div className="row" id="products">
                                        {
                                            pagination && pagination.currentItems.map((product) => (
                                                    <Product key={product.id} product={product}/>
                                                )
                                            )
                                        }
                                        {pagination.length === 0 && <Loading/>}
                                    </div>
                                </div>
                                {
                                    pagination.renderPageNumbers.length > 0 ?
                                        <div className="box">
                                            <ul className="pagination">
                                                <li><Link to="#"
                                                          onClick={() => pagination.prev()}><i
                                                    className='ti-angle-left'/></Link></li>
                                                {pagination.renderPageNumbers}
                                                <li><Link to="#"
                                                          onClick={() => pagination.next()}><i
                                                    className='ti-angle-right'/></Link></li>
                                            </ul>
                                        </div>
                                        :
                                        null
                                }

                            </div>
                        </div>
                    </div>
                </div>
                <ToastContainer/>
            </div>
        </>

)
}

export default Products
