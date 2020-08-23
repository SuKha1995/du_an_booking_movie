import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../../templates/HomeTemplate/HomeTemplate.scss';



export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="container">
                    <div className="footer__top">
                        <div className="row">
                            <div class="col-md-12 col-lg-4 footer__top--about">
                                <h4>Giới Thiệu</h4>
                                <p>Nam libero tempore cum vulputate id est id, pretium semper enim. Morbi viverra congue nisi vel pulvinar posuere sapien eros.</p>
                            </div>
                            <div class="col-md-12 col-lg-4 footer__top--news">
                                <h4>Góc Điện Ảnh</h4>
                                <p>
                                    <i class="fa fa-arrow-circle-right"></i>
                                    <span>Lorem ipsum neque vulputate</span>
                                </p>
                                <p>
                                    <i class="fa fa-arrow-circle-right"></i>
                                    <span>Lorem ipsum neque vulputate</span>
                                </p>
                                <p>
                                    <i class="fa fa-arrow-circle-right"></i>
                                    <span>Lorem ipsum neque vulputate</span>
                                </p>
                                <p>
                                    <i class="fa fa-arrow-circle-right"></i>
                                    <span>Lorem ipsum neque vulputate</span>
                                </p>
                                <p>
                                    <i class="fa fa-arrow-circle-right"></i>
                                    <span>Lorem ipsum neque vulputate</span>
                                </p>
                            </div>
                            <div class="col-md-12 col-lg-4 footer__top--contact">
                                <h4>Liên Hệ</h4>
                                <p>
                                    <i class="fa fa-map-signs"></i> <span>11/6 Đs 1 - P.Bình Thuận - Q7.</span>
                                    </p>
                                <p>
                                    <i class="fa fa-envelope"></i>
                                    <span>phamkha13e@gmail.com</span>
                                </p>
                                <p>
                                    <i class="fa fa-phone"></i>
                                    <span>0966280219</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="footer__bottom">
                       
                        <a> <i class="fab fa-facebook-square"></i></a>
                       <a> <i class="fab fa-twitter-square"></i></a>
                       <a> <i class="fab fa-youtube-square"></i></a>
                       
                        
                    </div>
                </div>

            </div>
        )
    }
}
