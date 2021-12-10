import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {GlobalState} from "../../../GlobalState";
import {formatCash} from "../../../utils/CurrencyCommon";

function Product ({product}) {
    const state = useContext(GlobalState)
    const actionCart = state.cartApi.actionCart
    const actionFavorite = state.favoriteApi.actionFavorite

    const addToCart = () => {
        actionCart.addCart(product, 1).then(res => {
            toast.success(`${product.name} được thêm vào giỏ hàng`,{
                autoClose: 1500
            })
        }).catch(err => {
            toast.error(`Thêm vào giỏ hàng không thành công!`,{
                autoClose: 1500
            })
        })
    }
    const addToFavorite = () => {
        actionFavorite.addFavorite(product)
        toast.success(`${product.name} được thêm vào yêu thích`,{
            autoClose: 1500
        })
    }

    return (
        <div className="col-3 col-md-6 col-sm-12">
            <div className="product-card">
                <div className="product-card-img">
                    <img src={product?.thumbnail} alt=""/>
                    <img src={product?.thumbnail2} alt=""/>
                </div>
                <div className="product-card-info">
                    <div className="product-btn">
                        <Link to={`/product/detail/${product?.id}`} onClick={() => window.scroll(0, 0)}
                              className="btn-flat btn-hover btn-shop-now">shop now
                        </Link>
                        <button className="btn-flat btn-hover btn-cart-add" onClick={() => addToCart()}>
                            <i className='ti-shopping-cart'/>
                        </button>
                        <button className="btn-flat btn-hover btn-cart-add" onClick={() => addToFavorite()}>
                            <i className='ti-heart'/>
                        </button>
                    </div>
                    <div className="product-card-name">
                        {product?.name}
                    </div>

                    <div className="product-card-price">
                        <span className="curr-price-old"><del>{formatCash(product?.regular_price)} <sup>đ</sup> </del></span>
                        <span className="curr-price">{formatCash(product?.sale_price)} <sup>đ</sup> </span>
                    </div>
                </div>
            </div>
            <ToastContainer/>
        </div>
    )
}
export default Product