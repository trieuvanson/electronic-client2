import React, {useContext, useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {formatCash} from "../../../utils/CurrencyCommon";
import Product from "./Product";

const Promotion = (props) => {

    const {item} = props
     return (
         <div className="section">
             <div className="container">
                 <div className="section-header">
                     <h2>Sản phẩm nổi bật</h2>
                 </div>
                 <div className="row" id="latest-products">
                     {
                         item && item.map((item, index) => (
                             <Product key={index} product={item}/>
                         ))
                     }


                 </div>
             </div>
         </div>
     );
}

export default Promotion;
