import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {GlobalState} from "../../../../GlobalState";
import {formatCash} from "../../../../utils/CurrencyCommon";


function Product ({product}) {
    const state = useContext(GlobalState)
    const actionCart = state.cartApi.actionCart
    const actionFavorite = state.favoriteApi.actionFavorite

    return (
        <div className="col-4 col-md-6 col-sm-12">
            <div className="product-card">
                <div className="product-card-img">
                    <img src={product.thumbnail} alt=""/>
                    <img src={product.thumbnail} alt=""/>
                </div>
                <div className="product-card-info">
                    <div className="product-btn">
                        <Link to={`/product/detail/${product.id}`}
                              className="btn-flat btn-hover btn-shop-now">shop now
                        </Link>
                        <button className="btn-flat btn-hover btn-cart-add" onClick={() => actionCart.addCart(product, 1)}>
                            <i className='ti-shopping-cart'/>
                        </button>
                        <button className="btn-flat btn-hover btn-cart-add" onClick={() => actionFavorite.addFavorite(product)}>
                            <i className='ti-heart'/>
                        </button>
                    </div>
                    {/**/}
                    <div className="product-card-name">
                        {product.name}
                    </div>
                    <div className="product-card-price">
                        <span><del>{product.regular_price} <sup>đ</sup> </del></span>
                        <span className="curr-price">{product.sale_price} <sup>đ</sup> </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Product