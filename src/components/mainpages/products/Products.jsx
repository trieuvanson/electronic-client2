import React, {useContext, useEffect, useState} from 'react'
import Product from "./product/Product";
import {Link, useLocation, useParams} from "react-router-dom";
import {GlobalState} from "../../../GlobalState";
import Loading from "../utils/loading/Loading";

function Products() {
    const state = useContext(GlobalState)
    const location = useLocation()
    const params = useParams()
    const action = state.productsApi.productAction;
    const [products, setProducts] = state.productsApi.products;
    const query = new URLSearchParams(location.search);
    const search = query.get("timkiem")||"";
    useEffect(() => {
        if (location.pathname.match("/products/brand/")) {
            action.getProductsByBrandId(params.id)
        } else if (location.pathname.match("/products/category/")) {
            action.getProductsByCategoryId(params.id)
        } else if (search) {
            console.log(search)
            action.findProductsByKeywords(search)
        } else {
            action.getProducts()
        }
    }, [params.id, location, search])

    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage, setItemsPerPage] = useState(12)

    const pages = [];
    const productslength = Math.ceil(products.length / itemsPerPage);

    for (let i = 0; i < productslength; i++) {
        pages.push(i + 1);
    }

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const renderPageNumbers = pages && pages.map(number => {
        return (
            <li key={number}>
                <Link to="#" id={number} className={number === currentPage ? "active" : ""}
                   onClick={(e) => handleClickSetCurrentPage(e)}>{number}</Link>
            </li>
        )
    })
    const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);


    const handleClickSetCurrentPage = (e) => {
        setCurrentPage(Number(e.target.id))
        window.scroll(0,0)
    }

    const next = () => {
        if (currentPage <= renderPageNumbers.length - 1) {
            setCurrentPage(currentPage + 1)
            window.scroll(0,0)
        }
    }

    const prev = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
            window.scroll(0,0)
        }
    }

    return (
        <div className="bg-light">
            <div className="container">
                <div className="box">
                    <div className="breadcumb">
                        <Link to="/">home</Link>
                        <span><i className='ti-angle-right'/></span>
                        <Link to="/products">all products</Link>
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
                                    <select name="" id="" className="form-select">
                                        <option value="">Mới nhất</option>
                                        <option value="">Cũ nhất</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <select name="" id="" className="form-select">
                                        <option value="">Giá cao tới thấp</option>
                                        <option value="">Giá thấp tới cao</option>
                                    </select>
                                </div>
                            </div>
                            <div className="box">
                            <span className="filter-header">
                                Khoảng giá
                            </span>
                                <div className="price-range">
                                    <input type="text"/>
                                    <span>-</span>
                                    <input type="text"/>
                                </div>
                                <button className="btn mt-10">Áp dụng</button>
                            </div>
                            <div className="box">
                                <ul className="filter-list">
                                    <li>
                                        <div className="group-checkbox">
                                            <input type="checkbox" id="status1"/>
                                            <label htmlFor="status1">
                                                Sale nhiều
                                                <i className='ti-check'></i>
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="group-checkbox">
                                            <input type="checkbox" id="status2"/>
                                            <label htmlFor="status2">
                                                Còn hàng
                                                <i className='ti-check'></i>
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="group-checkbox">
                                            <input type="checkbox" id="status3"/>
                                            <label htmlFor="status3">
                                                Nổi bật
                                                <i className='ti-check'></i>
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="group-checkbox">
                                            <input type="checkbox" id="status3"/>
                                            <label htmlFor="status3">
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
                                            <input type="checkbox" id="remember1"/>
                                            <label htmlFor="remember1">
                                                Samsung
                                                <i className='ti-check'></i>
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="group-checkbox">
                                            <input type="checkbox" id="remember2"/>
                                            <label htmlFor="remember2">
                                                iPhone
                                                <i className='ti-check'></i>
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="group-checkbox">
                                            <input type="checkbox" id="remember3"/>
                                            <label htmlFor="remember3">
                                                Xiaomi
                                                <i className='ti-check'></i>
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="group-checkbox">
                                            <input type="checkbox" id="remember4"/>
                                            <label htmlFor="remember4">
                                                Huawei
                                                <i className='ti-check'></i>
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="group-checkbox">
                                            <input type="checkbox" id="remember5"/>
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
                                    <li>
                                        <div className="group-checkbox">
                                            <input type="checkbox" id="remember6"/>
                                            <label htmlFor="remember6">
                                                Đỏ
                                                <i className='ti-check'></i>
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="group-checkbox">
                                            <input type="checkbox" id="remember7"/>
                                            <label htmlFor="remember7">
                                                Xanh
                                                <i className='ti-check'></i>
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="group-checkbox">
                                            <input type="checkbox" id="remember8"/>
                                            <label htmlFor="remember8">
                                                Trắng
                                                <i className='ti-check'></i>
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="group-checkbox">
                                            <input type="checkbox" id="remember9"/>
                                            <label htmlFor="remember9">
                                                Vàng
                                                <i className='ti-check'></i>
                                            </label>
                                        </div>
                                    </li>
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
                                        currentItems && currentItems.map((product) => (
                                                <Product key={product.id} product={product}/>
                                            )
                                        )
                                    }
                                    {currentItems.length === 0 && <Loading/>}
                                </div>
                            </div>
                            {
                                renderPageNumbers.length > 0 ?
                                    <div className="box">
                                        <ul className="pagination">
                                            <li><Link to="#"
                                                      onClick={() => prev()}><i
                                                className='ti-angle-left'/></Link></li>
                                            {renderPageNumbers}
                                            <li><Link to="#"
                                                      onClick={() => next()}><i
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
        </div>
    )
}

export default Products