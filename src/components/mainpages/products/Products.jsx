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
    const [keywords] = state.productsApi.keywords
    useEffect(() => {
        if (location.pathname.match("/products/brand/")) {
            action.getProductsByBrandId(params.id)
        } else if (location.pathname.match("/products/category/")) {
            action.getProductsByCategoryId(params.id)
        } else if (location.search.match("/?timkiem=")) {
            action.findProductsByKeywords(keywords)
        } else {
            action.getProducts()
        }
    }, [params.id, location.pathname, keywords])

    



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
                <a href="#" id={number} className={number === currentPage ? "active" : ""}
                   onClick={(e) => handleClickSetCurrentPage(e)}>{number}</a>
            </li>
        )
    })
    const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);


    const handleClickSetCurrentPage = (e) => {
        console.log(e.target.id)
        setCurrentPage(Number(e.target.id))
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
                            {/*<div className="box">*/}
                            {/*<span className="filter-header">*/}
                            {/*    Categories*/}
                            {/*</span>*/}
                            {/*    <ul className="filter-list">*/}
                            {/*        <li><a href="#">Wireless</a></li>*/}
                            {/*        <li><a href="#">In-ear headphone</a></li>*/}
                            {/*        <li><a href="#">Over-ear headphone</a></li>*/}
                            {/*        <li><a href="#">sport headphone</a></li>*/}
                            {/*    </ul>*/}
                            {/*</div>*/}
                            <div className="box">
                            <span className="filter-header">
                                Khoảng giá
                            </span>
                                <div className="price-range">
                                    <input type="text"/>
                                    <span>-</span>
                                    <input type="text"/>
                                </div>
                                <button>Áp dụng</button>
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
                                renderPageNumbers.length<0?
                                    <div className="box">
                                        <ul className="pagination">
                                            <li><a href="#" onClick={() => setCurrentPage(currentPage - 1)}><i
                                                className='ti-angle-left'></i></a></li>
                                            {renderPageNumbers}
                                            <li><a href="#" onClick={() => setCurrentPage(currentPage + 1)}><i
                                                className='ti-angle-right'></i></a></li>
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