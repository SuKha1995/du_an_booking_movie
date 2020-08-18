import React from 'react'
import Slider from 'react-slick';

export default function Carousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplaySpeed: 3000,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    return (
        <Slider {...settings} className="text-center carousel">
                <div className="carousel__item">
                    <a>
                        <img src="../img/home/carousel1.png" width="100%" height="600px" />
                       
                    </a>
                </div>
                <div className="carousel__item">
                    <a><img src="../img/home/carousel2.jpg" width="100%" height="600px" />
                        </a>
                </div>
                <div className="carousel__item">
                    <a><img src="../img/home/carousel3.jpg" width="100%" height="600px" />
                        </a>
                </div>
                <div className="carousel__item">
                    <a><img src="../img/home/carousel4.jpg" width="100%" height="600px" />
                        </a>
                </div>
            </Slider>
    )
}
