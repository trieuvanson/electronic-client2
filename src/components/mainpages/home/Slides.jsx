import React, {useContext, useState} from 'react';
import {Link} from "react-router-dom";
import {formatCash} from "../../../utils/CurrencyCommon";
const Slides = (props) => {
    const slides = props.item
    const [current, setCurrent] = useState(0);
    const length = slides?.length;
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }
    return (
        <div className="hero">
        <div className="slider">
            <div className="container">
                {
                    slides.map((slide,index) => {
                        return (
                            <div className={index === current ? 'slide active' : 'slide'} key={slide.id}>
                                <div className="info">
                                    <div className="info-content">
                                        <h3 className="top-down">
                                            {formatCash(slide.product?.sale_price)} <sup>đ</sup>
                                        </h3>
                                        <h2 className="top-down trans-delay-0-2">
                                            {slide.product?.name}
                                        </h2>
                                        <p className="top-down trans-delay-0-4">
                                            {slide?.product?.description}
                                        </p>
                                        <div className="top-down trans-delay-0-6">
                                            <Link to={`/product/detail/${slide.product?.id}`} className="btn-flat btn-hover">
                                                <span>shop now</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="img top-down">
                                    <img src={slide.product?.thumbnail} alt=""/>
                                </div>
                            </div>
                        )
                    })
                }
                {/*slide item*/}
                {/*<!-- end slide item -->*/}
                {/* <!-- slide item -->*/}
                {/*<!-- end slide item -->*/}
            </div>
            {/*<!-- slider controller -->*/}
            <button className="slide-controll slide-next" onClick={nextSlide}>
                <i className='ti-angle-right'/>
            </button>
            <button className="slide-controll slide-prev" onClick={prevSlide}>
                <i className='ti-angle-left'/>
            </button>
            {/*<!-- end slider controller -->*/}
        </div>
    </div>
    );
}

export default Slides;
