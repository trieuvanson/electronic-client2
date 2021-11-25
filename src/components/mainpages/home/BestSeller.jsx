import React, {useContext, useEffect, useState} from 'react';
import {GlobalState} from "../../../GlobalState";
import {Link, useHistory, useLocation} from "react-router-dom";
import {formatCash} from "../../../utils/CurrencyCommon";

const Promotion = (props) => {
    const {item} = props
    const history = useHistory()
    const viewAll = () => {
        history.push(`/products/`)
        window.location.reload()
        window.scroll(0, 0)
    }
    return (
        <div className="section">
            <div className="container">
                <div className="section-header">
                    <h2>Sản phẩm bán chạy</h2>
                </div>
                <div className="row" id="latest-products">
                    {
                        item && item.map((item, index) => (
                            <div className="col-3 col-md-6 col-sm-12" key={item.id}>
                                <div className="product-card">
                                    <div className="product-card-img">
                                        <img src={item.thumbnail} alt=""/>
                                        <img src={item.thumbnail2} alt=""/>
                                    </div>
                                    <div className="product-card-info">
                                        <div className="product-btn">
                                            <Link to={`/product/detail/${item.id}`} className="btn-flat btn-hover btn-shop-now">shop now</Link>
                                            <button className="btn-flat btn-hover btn-cart-add">
                                                <i className='ti-shopping-cart'/>
                                            </button>
                                            <button className="btn-flat btn-hover btn-cart-add">
                                                <i className='ti-heart'/>
                                            </button>
                                        </div>
                                        <div className="product-card-name">
                                            {item.name}
                                        </div>
                                        <div className="product-card-price">
                                            <span><del>{formatCash(item.regular_price)} <sup>đ</sup></del></span>
                                            <span className="curr-price">{formatCash(item.sale_price)} <sup>đ</sup></span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        ))
                    }
                    {/*<div className="col-3 col-md-6 col-sm-12">*/}
                    {/*    <div className="product-card">*/}
                    {/*        <div className="product-card-img">*/}
                    {/*            <img src="./images/product1_1.jpg" alt=""/>*/}
                    {/*                <img src="./images/product24.jpg" alt=""/>*/}
                    {/*        </div>*/}
                    {/*        <div className="product-card-info">*/}
                    {/*            <div className="product-btn">*/}
                    {/*                <a href="products.html" className="btn-flat btn-hover btn-shop-now">shop now</a>*/}
                    {/*                <button className="btn-flat btn-hover btn-cart-add">*/}
                    {/*                    <i className='ti-shopping-cart'></i>*/}
                    {/*                </button>*/}
                    {/*                <button className="btn-flat btn-hover btn-cart-add">*/}
                    {/*                    <i className='ti-heart'></i>*/}
                    {/*                </button>*/}
                    {/*            </div>*/}
                    {/*            <div className="product-card-name">*/}
                    {/*                Tên sản phẩm*/}
                    {/*            </div>*/}
                    {/*            <div className="product-card-price">*/}
                    {/*                <span><del>$300</del></span>*/}
                    {/*                <span className="curr-price">$200</span>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                </div>

                <div className="section-footer">
                    <button onClick={() => viewAll()} className="btn-flat btn-hover">view all</button>
                </div>
            </div>
        </div>
    );
}

export default Promotion;
