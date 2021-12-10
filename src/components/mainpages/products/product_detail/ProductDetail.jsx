import React, {useContext, useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import Product from "../product/Product";
import {GlobalState} from "../../../../GlobalState";
import {formatCash} from "../../../../utils/CurrencyCommon";
import Pagination from "../../../../api/Pagination";
import StarRatings from "react-star-ratings";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Helmet} from "react-helmet";

function ProductDetail() {
    const state = useContext(GlobalState)
    const params = useParams();
    const action = state.productsApi.productAction
    const [products] = state.productsApi.products
    const [detail, setDetail] = useState([])
    const cartAction = state.cartApi.actionCart
    const [comments] = state.commentsApi.commentsBy
    const [ratingByProductId] = state.commentsApi.ratingByProductId
    const commentsAction = state.commentsApi.action
    let [value, setValue] = useState(1)
    const rating = ratingByProductId.reduce((acc, item) => {
        acc += item.star
        return acc
    }, 0) / ratingByProductId.length || 0
    const pagination = new Pagination(comments)
    const [user] = state.userAPI.personal
    useEffect(() => {
        if (products) {
            action.getProductsByLink("/products/")
        }
        getDetails();
    }, [params.id, products])

    async function getDetails() {
        await products.forEach(product => {
            if (product.id == params.id) {
                commentsAction.getCommentsByProductId(product.id)
                commentsAction.getRatingByProductId(product.id)
                setDetail(product)
            }
        })
    }

    const increment = () => {
        setValue(value += 1)
    }

    const decrement = () => {
        if (value > 1) {
        }
    }

    function addToCart(e) {
        e.preventDefault()
        console.log(value)
        cartAction.addCart(detail, value)
            .then(res => {
                toast.success(`Thêm ${detail.name} vào giỏ hàng thành công`, {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 1500
                })
            })
            .catch(err => {
                toast.error(`Thêm ${detail.name} vào giỏ hàng thất bại`, {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 1500
                })
            })

    }

    console.log(detail)
    return (
        <>
            <Helmet>
                <title>SmartThings - Chi tiết sản phẩm</title>
            </Helmet>
            <div className="bg-light">
                <div className="container">
                    <div className="box">
                        <div className="breadcumb">
                            <Link to="/">Trang chủ</Link>
                            <span><i className='ti-angle-right'/></span>
                            <Link to="/products">Tất cả sản phẩm</Link>
                            <span><i className='ti-angle-right'/></span>
                            <Link to="#">Chi tiết</Link>
                        </div>
                    </div>
                    <div className="row product-row">
                        <div className="col-5 col-md-12">
                            <div className="product-img" id="product-img">
                                <img src={detail.thumbnail} alt=""/>
                            </div>
                            <div className="box">
                                <div className="product-img-list">
                                    <div className="product-img-item">
                                        <img src={detail.thumbnail} alt=""/>
                                    </div>
                                    <div className="product-img-item">
                                        <img src={detail.thumbnail2} alt=""/>
                                    </div>
                                    <div className="product-img-item">
                                        <img src="./images/product19.jpg" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-7 col-md-12">
                            <div className="product-info">
                                <h1>
                                    {detail.name}
                                </h1>
                                <div className="product-info-detail">

                                    <div className="product-detail__star">
                                        <u className="product-info-detail-title">{rating > 0 ? rating.toFixed(1) : rating}</u>
                                        <span className="rating">
                                    <StarRatings
                                        rating={rating || 0}
                                        starRatedColor="orange"
                                        starDimension="20px"
                                        starSpacing="0"
                                        numberOfStars={5}
                                        name="rating"
                                    />
                                    </span>
                                    </div>
                                    <div className="product-evaluate">
                                        <u className="product-evaluate-number">{comments.length}</u>
                                        <span>Đánh giá</span>
                                    </div>
                                    <div className="product-sold">
                                        <p className="product-sold-number">4.9</p>
                                        <span>Đã bán</span>
                                    </div>
                                </div>
                                <div className="product-info-detail">
                                    <span className="product-info-detail-title">Hãng: </span>
                                    <Link
                                        to={`/products/category/${detail?.category?.id}`}>{detail.category?.name}</Link>
                                </div>
                                <div className="product-info-detail">
                                    <span className="product-info-detail-title">Màu sắc: </span>
                                    <Link
                                        to={`#`}>{detail?.color}</Link>
                                </div>

                                <div
                                    className="product-info-price">{detail.sale_price ? formatCash(detail.sale_price) : null}
                                    <sup>đ</sup></div>
                                <div className="product-quantity-wrapper">
                            <span className="product-quantity-btn">
                                <i className='ti-minus' onClick={() => decrement()}/>
                            </span>
                                    <span className="product-quantity">{value}</span>
                                    <span className="product-quantity-btn">
                                <i className='ti-plus' onClick={() => increment()}/>
                            </span>
                                </div>
                                <div>
                                    <button className="btn-flat btn-hover" onClick={addToCart}>Thêm vào giỏ</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <div className="box-header">
                            Mô tả
                        </div>
                        <div className="product-detail-description">
                            <button className="btn-flat btn-hover btn-view-description" id="view-all-description">
                                view all
                            </button>
                            <div className="product-detail-description-content">
                                <p>
                                    {detail.description}
                                </p>
                                <img src={detail.thumbnail} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <div className="box-header">
                            Bình luận
                        </div>
                        <div className="product-detail-cmt">
                            <div className="product-detail-info">
                                <div className="product-detail-user-avt">
                                    <img src={`${user.avatar}`} alt=""/>
                                </div>
                            </div>
                            <div className="product-detail-rate-cmt">
                            <span className="rating">
                                <StarRatings
                                    rating={0}
                                    starRatedColor="orange"
                                    starDimension="25px"
                                    starSpacing="0"
                                    numberOfStars={5}
                                    changeRating={""}
                                    name="rating"
                                />
                            </span>
                                <div className="cmt">
                                    <textarea placeholder="Chia sẽ một số cảm nhận về sản phẩm" cols="30"
                                              rows="10"/>
                                    <button>Bình luận</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <div className="box-header">
                            Tất cả bình luận ({comments.length})
                        </div>
                        <div>
                            {
                                pagination.currentItems.sort((a,b) => {
                                    return new Date(b.update_at).getTime() -
                                        new Date(a.update_at).getTime()
                                }).map((comment, index) => {
                                    return (
                                        <div className="user-rate">
                                            <div className="user-info">
                                                <div className="user-avt">
                                                    <img src={comment?.user?.avatar} alt=""/>
                                                </div>
                                                <div className="user-name">
                                                    <span className="name">{comment?.user?.fullname}</span>
                                                </div>
                                            </div>
                                            <div className="user-rate-content">
                                                {comment?.comment}
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            {comments.length === 0 && <div className="no-comment">Chưa có bình luận nào</div>}
                            {
                                pagination.renderPageNumbers.length > 0 ?
                                    <div className="box">
                                        <ul className="pagination">
                                            <li><Link to="#"
                                                      onClick={() => pagination.prev()}><i
                                                className='ti-angle-left'/></Link></li>
                                            {pagination.renderPageNumbers}
                                            <li><Link to="#"
                                                      onClick={() => pagination.next()}><i
                                                className='ti-angle-right'/></Link></li>
                                        </ul>
                                    </div>
                                    :
                                    null
                            }
                        </div>

                    </div>
                    <div className="box">
                        <div className="box-header">
                            Sản phẩm liên quan
                        </div>
                        <div className="row" id="related-products">
                            {
                                detail && products && products.map(product => {
                                    if (product.category.id === detail.category?.id && product.id !== detail.id) {
                                        return <Product key={product.id} product={product}/>
                                    }
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default ProductDetail;
