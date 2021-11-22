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
                <div className="col-4 col-md-12 col-sm-12">
                    <div className="promotion-box">
                        <div className="text">
                            <h3>Điện thoại</h3>
                            <button className="btn-flat btn-hover"><span>shop collection</span></button>
                        </div>
                        <img src="./images/product22.jpg" alt=""/>
                    </div>
                </div>
                <div className="col-4 col-md-12 col-sm-12">
                    <div className="promotion-box">
                        <div className="text">
                            <h3>Điện thoại</h3>
                            <button className="btn-flat btn-hover"><span>shop collection</span></button>
                        </div>
                        <img src="./images/product23.jpg" alt=""/>
                    </div>
                </div>
                <div className="col-4 col-md-12 col-sm-12">
                    <div className="promotion-box">
                        <div className="text">
                            <h3>Điện thoại</h3>
                            <button className="btn-flat btn-hover"><span>shop collection</span></button>
                        </div>
                        <img src="./images/product24.jpg" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Promotion;
