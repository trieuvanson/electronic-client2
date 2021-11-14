import React, {useState, useContext, useEffect} from 'react'
import Product from "./product/Product";
import {Link, useLocation, useParams} from "react-router-dom";
import {GlobalState} from "../../../GlobalState";
import {formatCash} from "../../../utils/CurrencyCommon";

function Products() {
    const state = useContext(GlobalState)
    const location = useLocation()
    const params = useParams()
    const productAction = state.productsApi.productAction;
    const [products, setProducts] = state.productsApi.products;
    useEffect(() => {
        if(location.pathname.match("/products/brand/")) {
            productAction.getProductsByBrandId(params.id)
        } else  if(location.pathname.match("/products/category/")) {
            productAction.getProductsByCategoryId(params.id)
        } else {
            productAction.getProducts()
        }
    }, [params.id, location.pathname])


    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage, setItemsPerPage] = useState(12)

    const pages =[];
    const productslength = Math.ceil(products.length/itemsPerPage);

    for(let i = 0; i < productslength; i++) {
        pages.push(i+1);
    }

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const renderPageNumbers = pages && pages.map(number => {
        return (
            <li key = {number}>
                <a href="#" id={number} className={number===currentPage? "active" : ""}
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
                            <div className="box">
                            <span className="filter-header">
                                Categories
                            </span>
                                <ul className="filter-list">
                                    <li><a href="#">Wireless</a></li>
                                    <li><a href="#">In-ear headphone</a></li>
                                    <li><a href="#">Over-ear headphone</a></li>
                                    <li><a href="#">sport headphone</a></li>
                                </ul>
                            </div>
                            <div className="box">
                            <span className="filter-header">
                                Price
                            </span>
                                <div className="price-range">
                                    <input type="text"/>
                                    <span>-</span>
                                    <input type="text"/>
                                </div>
                            </div>
                            <div className="box">
                                <ul className="filter-list">
                                    <li>
                                        <div className="group-checkbox">
                                            <input type="checkbox" id="status1"/>
                                            <label htmlFor="status1">
                                                On sale
                                                <i className='ti-check'></i>
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="group-checkbox">
                                            <input type="checkbox" id="status2"/>
                                            <label htmlFor="status2">
                                                In stock
                                                <i className='ti-check'></i>
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="group-checkbox">
                                            <input type="checkbox" id="status3"/>
                                            <label htmlFor="status3">
                                                Featured
                                                <i className='ti-check'></i>
                                            </label>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="box">
                            <span className="filter-header">
                                Brands
                            </span>
                                <ul className="filter-list">
                                    <li>
                                        <div className="group-checkbox">
                                            <input type="checkbox" id="remember1"/>
                                            <label htmlFor="remember1">
                                                JBL
                                                <i className='ti-check'></i>
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="group-checkbox">
                                            <input type="checkbox" id="remember2"/>
                                            <label htmlFor="remember2">
                                                Beat
                                                <i className='ti-check'></i>
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="group-checkbox">
                                            <input type="checkbox" id="remember3"/>
                                            <label htmlFor="remember3">
                                                Logitech
                                                <i className='ti-check'></i>
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="group-checkbox">
                                            <input type="checkbox" id="remember4"/>
                                            <label htmlFor="remember4">
                                                Samsung
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
                                Colors
                            </span>
                                <ul className="filter-list">
                                    <li>
                                        <div className="group-checkbox">
                                            <input type="checkbox" id="remember6"/>
                                            <label htmlFor="remember6">
                                                Red
                                                <i className='ti-check'></i>
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="group-checkbox">
                                            <input type="checkbox" id="remember7"/>
                                            <label htmlFor="remember7">
                                                Blue
                                                <i className='ti-check'></i>
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="group-checkbox">
                                            <input type="checkbox" id="remember8"/>
                                            <label htmlFor="remember8">
                                                White
                                                <i className='ti-check'></i>
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="group-checkbox">
                                            <input type="checkbox" id="remember9"/>
                                            <label htmlFor="remember9">
                                                Pink
                                                <i className='ti-check'></i>
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="group-checkbox">
                                            <input type="checkbox" id="remember10"/>
                                            <label htmlFor="remember10">
                                                Yellow
                                                <i className='ti-check'></i>
                                            </label>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="box">
                            <span className="filter-header">
                                rating
                            </span>
                                <ul className="filter-list">
                                    <li>
                                        <div className="group-checkbox">
                                            <input type="checkbox" id="remember11"/>
                                            <label htmlFor="remember11">
                                            <span className="rating">
                                                <i className='ti-star'></i>
                                                <i className='ti-star'></i>
                                                <i className='ti-star'></i>
                                                <i className='ti-star'></i>
                                                <i className='ti-star'></i>
                                            </span>
                                                <i className='ti-check'></i>
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="group-checkbox">
                                            <input type="checkbox" id="remember12"/>
                                            <label htmlFor="remember12">
                                            <span className="rating">
                                                <i className='ti-star'></i>
                                                <i className='ti-star'></i>
                                                <i className='ti-star'></i>
                                                <i className='ti-star'></i>
                                            </span>
                                                <i className='ti-check'></i>
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="group-checkbox">
                                            <input type="checkbox" id="remember13"/>
                                            <label htmlFor="remember13">
                                            <span className="rating">
                                                <i className='ti-star'></i>
                                                <i className='ti-star'></i>
                                                <i className='ti-star'></i>
                                            </span>
                                                <i className='ti-check'></i>
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="group-checkbox">
                                            <input type="checkbox" id="remember14"/>
                                            <label htmlFor="remember14">
                                            <span className="rating">
                                                <i className='ti-star'></i>
                                                <i className='ti-star'></i>
                                            </span>
                                                <i className='ti-check'></i>
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="group-checkbox">
                                            <input type="checkbox" id="remember15"/>
                                            <label htmlFor="remember15">
                                            <span className="rating">
                                                <i className='ti-star'></i>
                                            </span>
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
                                    {/*{products.length === 0 && <Loading/>}*/}
                                </div>
                            </div>

                            <div className="box">
                                <ul className="pagination">
                                    <li><a href="#" onClick={() => Number(currentPage+1)}><i className='ti-angle-left'></i></a></li>
                                    {renderPageNumbers}
                                    <li><a href="#" onClick={() => currentPage+1}><i className='ti-angle-right'></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products