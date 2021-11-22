import React, {useState} from 'react';
function Footer() {
    return (
        <footer className="bg-second">
            <div className="container">
                <div className="row">
                    <div className="col-3 col-md-6">
                        <h3 className="footer-head">Chính sách</h3>
                        <ul className="menu">
                            <li><a href="#">Chính sách bảo mật thông tin</a></li>
                            <li><a href="#">Chính sách vận chuyển</a></li>
                            <li><a href="#">Chính sách đổi / trả hàng</a></li>
                            <li><a href="#">Chính sách thanh toán</a></li>
                        </ul>
                    </div>
                    <div className="col-3 col-md-6">
                        <h3 className="footer-head">Về công ty</h3>
                        <ul className="menu">
                            <li><a href="#">Giới thiệu công ty</a></li>
                            <li><a href="#">Tuyển dụng</a></li>
                            <li><a href="#">Gửi góp ý, khiếu nại</a></li>
                        </ul>
                    </div>
                    <div className="col-3 col-md-6">
                        <h3 className="footer-head">Địa chỉ</h3>
                        <ul className="menu">
                            <li><p href="#">Địa chỉ: Tp.HCM</p></li>
                            <li>
                                <p href="#">Hotline Tư Vấn: </p>
                                <a href="tel:+84987010358">+84 987010358</a>
                            </li>
                            <li>
                                <p href="#">Email: </p>
                                <a href="mailto:channancuocdoi@gmail.com">channancuocdoi@gmail.com</a>
                            </li>
                            <li><p href="#">Website: cuocdoiquakho.com.vn</p></li>
                        </ul>
                    </div>
                    <div className="col-3 col-md-6 col-sm-12">
                        <div className="contact">
                            <h3 className="contact-header">
                                Smart Things
                            </h3>
                            <ul className="contact-socials">
                                <li><a href="#">
                                    <i className='ti-facebook'></i>
                                </a></li>
                                <li><a href="#">
                                    <i className='ti-instagram'></i>
                                </a></li>
                                <li><a href="#">
                                    <i className='ti-linkedin'></i>
                                </a></li>
                                <li><a href="#">
                                    <i className='ti-twitter'></i>
                                </a></li>
                            </ul>
                        </div>
                        <div className="subscribe">
                            <input type="email" placeholder="ENTER YOUR EMAIL"/>
                                <button>subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
