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
                <div className="row">
                    <div className="col-12 col-md-12 col-sm-12">
                        <div className="row">
                            <div className="glider-contain">
                                <div className="glider">
                                    {
                                        item && item.map((item, index) => (
                                            <div className="col-4 col-md-6 col-sm-12" key={item.id}>
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


                                    <button aria-label="Previous" className="glider-prev">
                                        <i className="ti-angle-double-left"></i>
                                    </button>
                                    <button aria-label="Next" className="glider-next">
                                        <i className="ti-angle-double-right"></i>
                                    </button>
                                    <div role="tablist" className="dots"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section-footer">
                    <button onClick={() => viewAll()} className="btn-flat btn-hover">view all</button>
                </div>
            </div>
        </div>
    );

    // File css
    // <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/glider-js@1/glider.min.css">

    // File js
    // <script src="https://cdn.jsdelivr.net/npm/glider-js@1/glider.min.js"></script>

    // Code js để chạy slider
    // <script>
    //     new Glider(document.querySelector('.glider'), {
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     scrollLock: true,
    //     dots: '#dots',
    //     arrows: {
    //     prev: '.glider-prev',
    //     next: '.glider-next'
    // },
    //     responsive: [
    // {
    //     breakpoint: 775,
    //     settings: {
    //     slidesToShow: 'auto',
    //     slidesToScroll: 'auto',
    //     itemWidth: 150,
    //     duration: 0.25
    // }
    // },
    // {
    //     breakpoint: 1024,
    //     settings: {
    //     slidesToShow: 4,
    //     slidesToScroll: 1,
    //     itemWidth: 150,
    //     duration: 0.25
    // }
    // }
    //     ]
    // });
    // </script>
}

export default Promotion;
