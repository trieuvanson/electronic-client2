import React, {useContext} from 'react';
import Menu from "../Menu";
import {Link} from "react-router-dom";
import {GlobalState} from "../../../../GlobalState";
import {formatCash} from "../../../../utils/CurrencyCommon";
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import StarRatings from "react-star-ratings";
import {Helmet} from "react-helmet";

const Favorite = () => {
    const state = useContext(GlobalState)
    const [favorites] = state.favoriteApi.favorites
    const actionFavorite = state.favoriteApi.actionFavorite;
    const [ratings] = state.commentsApi.ratings;
    const [comments] = state.commentsApi.comments;
    const removeFavorite = (e, favorite) => {
        e.preventDefault();
        actionFavorite.deleteFavorite(favorite.id, favorite?.user?.username)
            .then(toast.success(`Đã xoá ${favorite.product?.name} khỏi danh sách yêu thích`),{
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 1500
            })
    }

    const getRatingByProductId = (productId) => {
        const rating = ratings.filter(rating => rating.product?.id === productId)
        return rating.reduce((total, current) => total + current.star, 0) / rating.length || 0
    }

    const getCommentByProductId = (productId) => {
        const comment = comments.filter(comment => comment.product?.id === productId)
        return comment.length
    }
    return (
        <>
            <Helmet>
                <title>SmartThings - Yêu thích</title>
            </Helmet>
            <div className="bg-light">
                <div className="container">
                    <div className="box">
                        <div className="breadcumb">
                            <Link to="/">Trang chủ</Link>
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
                                                        <button className="btn-delete" onClick={(e) => removeFavorite(e, favorite)}>X</button>
                                                        <div className="wish-img">
                                                            <Link to={`/product/detail/${favorite.product?.id}`}>
                                                                <img src={favorite.product?.thumbnail} alt="ảnh"/>
                                                            </Link>
                                                        </div>
                                                        <div className="wish-body">
                                                            <Link to={`/product/detail/${favorite.product?.id}`} className="wish-name">{favorite.product?.name}</Link>
                                                            <div className="wish-rating">
                                                                <StarRatings
                                                                    rating={getRatingByProductId(favorite.product?.id)||0}
                                                                    starRatedColor="orange"
                                                                    starDimension="20px"
                                                                    starSpacing="5px"
                                                                    numberOfStars={5}
                                                                    name="rating"
                                                                />
                                                                <span className="review-count">({getCommentByProductId(favorite?.product?.id)} nhận xét)</span>
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
            <ToastContainer/>
        </>
    );
}
export default Favorite;