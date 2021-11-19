import React, {useContext, useEffect, useState} from 'react';
import Menu from "../Menu";
import {Link} from "react-router-dom";
import {GlobalState} from "../../../../GlobalState";
import {formatCash} from "../../../../utils/CurrencyCommon";

const Favorite = () => {
    const state = useContext(GlobalState)
    const [favorites] = state.favoriteApi.favorites
    const actionFavorite = state.favoriteApi.actionFavorite;
    return (
        <>
            <div className="bg-light">
                <div className="container">
                    <div className="box">
                        <div className="breadcumb">
                            <Link to="/">home</Link>
                            <span><i className='ti-angle-right'/></span>
                            <Link to="/account/favorites">Sản phẩm yêu thích</Link>
                        </div>
                    </div>

                    <div className="box">
                        <div className="row">
                            {/*Bên trái/*/}
                            <Menu/>
                            {/*Bên phải*/}
                            <div className="col-8 col-sm-12">
                                <div className="wish">
                                    <h1>Sản phẩm yêu thích ({favorites.length})</h1>
                                    <ul className="wish-list">
                                        {
                                            favorites && favorites.map(favorite => {
                                                return (
                                                    <li className="wish-item">
                                                        <button className="btn-delete" onClick={() => actionFavorite.deleteFavorite(favorite.id, favorite.user?.username)}>X</button>
                                                        <div className="wish-img">
                                                            <Link to={`/product/detail/${favorite.product?.id}`}>
                                                                <img src={favorite.product?.thumbnail} alt="ảnh"/>
                                                            </Link>
                                                        </div>
                                                        <div className="wish-body">
                                                            <Link to={`/product/detail/${favorite.product?.id}`} className="wish-name">{favorite.product?.name}</Link>
                                                            <div className="wish-rating">
                                                                <div className="wish-rating__base">
                                                                    <i className="ti-heart"></i>
                                                                    <i className="ti-heart"></i>
                                                                    <i className="ti-heart"></i>
                                                                    <i className="ti-heart"></i>
                                                                    <i className="ti-heart"></i>
                                                                </div>
                                                                <span className="review-count">(1156 nhận xét)</span>
                                                            </div>
                                                            <div className="wish-description">
                                                                {favorite.product?.description}
                                                            </div>
                                                        </div>
                                                        <div className="wish-footer">
                                                            <div className="wish-price">{formatCash(favorite.product.sale_price)}<sup>đ</sup></div>
                                                        </div>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Favorite;