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
                        <img src="../img/home/carousel1.png"  />
                       
                    </a>
                </div>
                <div className="carousel__item">
                    <a><img src="../img/home/carousel2.jpg" />
                        </a>
                </div>
                <div className="carousel__item">
                    <a><img src="../img/home/carousel3.jpg"  />
                        </a>
                </div>
                <div className="carousel__item">
                    <a><img src="https://s3img.vcdn.vn/123phim/2020/08/ca-sau-15972253022491.png" src="https://s3img.vcdn.vn/123phim/2020/08/ca-sau-15972253022491.png" width="100%" height="600px" />
                        </a>
                </div>
            </Slider>
    )
}
