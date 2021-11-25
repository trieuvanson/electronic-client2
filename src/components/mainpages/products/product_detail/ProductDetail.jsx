import React, {useContext, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import Product from "../product/Product";
import {GlobalState} from "../../../../GlobalState";
import {formatCash} from "../../../../utils/CurrencyCommon";

function ProductDetail() {
    const state = useContext(GlobalState)
    const params = useParams();
    const action = state.productsApi.productAction
    const [products] = state.productsApi.products
    var [detail, setDetail] = useState([])
    const [carts, setCarts] = state.cartApi.cart
    const [cart, setCart] = useState([]);
    const actionCart = state.cartApi.actionCart
    let [value, setValue] = useState(cart.quantity || 1)
    useEffect(() => {
        if (products) {
            action.getProducts()
        }
        getDetails();
        getCart()
    }, [params.id, products, carts])




    async function getDetails() {
        await products.forEach(product => {
            if (product.id == params.id) {
                setDetail(product)
            }
        })
    }

    const increment = () =>{
        setValue(value+=1)
    }

    const decrement = () =>{
        if (value > 1) {
        }
    }

    async function getCart() {
        await carts.forEach(cart => {
            if (cart.product?.id == params.id) {
                console.log(cart)
                setCart(cart)
            }
        })
    }





    return (
        <>
            <div className="bg-light">
                <div className="container">
                    <div className="box">
                        <div className="breadcumb">
                            <a href="./index.html">home</a>
                            <span><i className='ti-angle-right'/></span>
                            <a href="./products.html">all products</a>
                            <span><i className='ti-angle-right'/></span>
                            <a href="./product-detail.html">Điện thoại</a>
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
                                    <span className="product-info-detail-title">Hãng:</span>
                                    <a href="#">{detail.category?.name}</a>
                                </div>
                                <div className="product-info-detail">
                                    <span className="product-info-detail-title">Rated:</span>
                                    <span className="rating">
                                <i className='ti-star'/>
                                <i className='ti-star'/>
                                <i className='ti-star'/>
                                <i className='ti-star'/>
                                <i className='ti-star'/>
                            </span>
                                </div>
                                {/*<p className="product-description">*/}
                                {/*    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo libero alias officiis*/}
                                {/*    dolore doloremque eveniet culpa dignissimos, itaque, cum animi excepturi sed*/}
                                {/*    veritatis*/}
                                {/*    asperiores soluta, nisi atque quae illum. Ipsum.*/}
                                {/*</p>*/}
                                <div className="product-info-price">{detail.sale_price?formatCash(detail.sale_price):null} <sup>đ</sup></div>
                                <div className="product-quantity-wrapper">
                            <span className="product-quantity-btn">
                                <i className='ti-minus' onClick={() => decrement()} />
                            </span>
                                    <span className="product-quantity">{value}</span>
                                    <span className="product-quantity-btn">
                                <i className='ti-plus' onClick={() => increment()}/>
                            </span>
                                </div>
                                <div>
                                    <button className="btn-flat btn-hover">add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <div className="box-header">
                            description
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
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis accusantium officia,
                                    quae fuga in exercitationem aliquam labore ex doloribus repellendus beatae facilis
                                    ipsam. Veritatis vero obcaecati iste atque aspernatur ducimus.
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat quam praesentium
                                    id sit amet magnam ad, dolorum, cumque iste optio itaque expedita eius similique, ab
                                    adipisci dicta. Quod, quibusdam quas. Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Odit, in corrupti ipsam sint error possimus commodi incidunt
                                    suscipit sit voluptatum quibusdam enim eligendi animi deserunt recusandae earum
                                    natus voluptas blanditiis?
                                </p>
                                <img src="./images/product12.jpg" alt=""/>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ullam quam fugit
                                    veniam ipsum recusandae incidunt, ex ratione, magnam labore ad tenetur officia!
                                    In, totam. Molestias sapiente deserunt animi porro?
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <div className="box-header">
                            review
                        </div>
                        <div>
                            <div className="user-rate">
                                <div className="user-info">
                                    <div className="user-avt">
                                        <img src="./images/product11.jpg" alt=""/>
                                    </div>
                                    <div className="user-name">
                                        <span className="name">Đại tiền tỉ</span>
                                        <span className="rating">
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                </span>
                                    </div>
                                </div>
                                <div className="user-rate-content">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ea iste,
                                    veritatis
                                    nobis amet illum, cum alias magni dolores odio, eius quo excepturi veniam ipsa
                                    voluptatibus natus voluptas vero? Aspernatur!
                                </div>
                            </div>
                            <div className="user-rate">
                                <div className="user-info">
                                    <div className="user-avt">
                                        <img src="./images/product13.jpg" alt=""/>
                                    </div>
                                    <div className="user-name">
                                        <span className="name">Đại tiền tỉ</span>
                                        <span className="rating">
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                </span>
                                    </div>
                                </div>
                                <div className="user-rate-content">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ea iste,
                                    veritatis
                                    nobis amet illum, cum alias magni dolores odio, eius quo excepturi veniam ipsa
                                    voluptatibus natus voluptas vero? Aspernatur!
                                </div>
                            </div>
                            <div className="user-rate">
                                <div className="user-info">
                                    <div className="user-avt">
                                        <img src="./images/product13.jpg" alt=""/>
                                    </div>
                                    <div className="user-name">
                                        <span className="name">Đại tiền tỉ</span>
                                        <span className="rating">
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                </span>
                                    </div>
                                </div>
                                <div className="user-rate-content">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ea iste,
                                    veritatis
                                    nobis amet illum, cum alias magni dolores odio, eius quo excepturi veniam ipsa
                                    voluptatibus natus voluptas vero? Aspernatur!
                                </div>
                            </div>
                            <div className="user-rate">
                                <div className="user-info">
                                    <div className="user-avt">
                                        <img src="./images/product13.jpg" alt=""/>
                                    </div>
                                    <div className="user-name">
                                        <span className="name">Đại tiền tỉ</span>
                                        <span className="rating">
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                </span>
                                    </div>
                                </div>
                                <div className="user-rate-content">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ea iste,
                                    veritatis
                                    nobis amet illum, cum alias magni dolores odio, eius quo excepturi veniam ipsa
                                    voluptatibus natus voluptas vero? Aspernatur!
                                </div>
                            </div>
                            <div className="user-rate">
                                <div className="user-info">
                                    <div className="user-avt">
                                        <img src="./images/product13.jpg" alt=""/>
                                    </div>
                                    <div className="user-name">
                                        <span className="name">Đại tiền tỉ</span>
                                        <span className="rating">
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                </span>
                                    </div>
                                </div>
                                <div className="user-rate-content">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ea iste,
                                    veritatis
                                    nobis amet illum, cum alias magni dolores odio, eius quo excepturi veniam ipsa
                                    voluptatibus natus voluptas vero? Aspernatur!
                                </div>
                            </div>
                            <div className="box">
                                <ul className="pagination">
                                    <li><a href="#"><i className='ti-angle-left'></i></a></li>
                                    <li><a href="#" className="active">1</a></li>
                                    <li><a href="#">2</a></li>
                                    <li><a href="#">3</a></li>
                                    <li><a href="#">4</a></li>
                                    <li><a href="#">5</a></li>
                                    <li><a href="#"><i className='ti-angle-right'></i></a></li>
                                </ul>
                            </div>
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
