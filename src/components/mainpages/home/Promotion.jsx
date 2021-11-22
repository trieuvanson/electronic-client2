import React, {useContext, useEffect, useState} from 'react';
import {GlobalState} from "../../../GlobalState";
import {Link} from "react-router-dom";

const Promotion = () => {
    const state = useContext(GlobalState)
    const [brands] = state.categoriesApi.brands
    const [promotion, setPromotion] = useState([]);


    useEffect(() => {
        getPromotion()
    }, [brands])

    const getPromotion = () => {
        const newArray = [];
        for (let i = 0; i < brands.length; i++) {
            console.log(brands[i]?.name)
            if (brands[i]?.name.match("Điện Thoại") || brands[i]?.name.match("Laptop") || brands[i]?.name.match("Máy tính bảng")) {
                newArray.push(brands[i])
            }
        }
        setPromotion(newArray)
    }


    return (
        <div className="promotion">
            <div className="row">
                {
                    brands && promotion.map((item, index) => {
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
