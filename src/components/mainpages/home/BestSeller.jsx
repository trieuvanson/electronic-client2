import React, {useContext, useEffect, useState} from 'react';
import {GlobalState} from "../../../GlobalState";
import {Link, useHistory, useLocation} from "react-router-dom";
import {formatCash} from "../../../utils/CurrencyCommon";
import Product from "./Product";

const Promotion = (props) => {
    const {item} = props
    const history = useHistory()
    const viewAll = () => {
        history.push(`/products`)
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
                            <Product key={index} product={item}/>
                        ))
                    }


                </div>


                <div className="section-footer">
                    <button onClick={() => viewAll()} className="btn-flat btn-hover">view all</button>
                </div>
            </div>
        </div>
    );
}

export default Promotion;
