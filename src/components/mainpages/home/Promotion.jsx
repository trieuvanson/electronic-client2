import React, {useContext, useEffect, useState} from 'react';
import {GlobalState} from "../../../GlobalState";
import {Link} from "react-router-dom";

const Promotion = (props) => {
    const {item} = props
    return (
        <div className="promotion">
            <div className="row">
                {
                    item && item.map((item, index) => {
                        return (
                            <div className="col-4 col-md-12 col-sm-12" key={index}>
                                <div className="promotion-box">
                                    <div className="text">
                                        <h3>{item.name}</h3>
                                        <Link to={`/products/brand/${item.id}`}
                                              className="btn-flat btn-hover"><span>shop collection</span></Link>
                                    </div>
                                    <img src="./images/product22.jpg" alt=""/>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Promotion;
