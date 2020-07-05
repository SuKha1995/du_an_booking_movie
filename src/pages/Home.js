import React, { useState, useEffect } from 'react'
import { qlPhimService } from '../service/quanLiPhimService';
import { NavLink } from 'react-router-dom';

import  Slider  from 'react-slick';

export default function Home(props) {

    let [danhSachPhim, setDanhSachPhim] = useState([]);

    useEffect(() => {

        qlPhimService.layDanhSachPhim().then(res => {
            setDanhSachPhim(res.data)
        }).catch(error => {
            console.log(error.response.data)
        })

    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    const renderPhim = () => {
        return danhSachPhim.map((phim, index) => {
            return <div className="col-4" key="{index}">
                <div classname="card text-left">
                    <img classname="card-img-top" src={phim.hinhAnh} style={{ width: '100%', height: 400 }} alt />
                    <div classname="card-body">
                        <h4 classname="card-title">{phim.tenPhim}</h4>
                        <NavLink className="btn btn-success" to={`/moviedetail/${phim.maPhim}`}>Đặt Vé</NavLink>
                    </div>
                </div>
            </div>

        })
    };


    return (
        <div>
            <div classname="carousel">
                <div>
                    <h2> Single Item</h2>
                    <Slider {...settings}>
                        <div>
                            <h3>1</h3>
                        </div>
                        <div>
                            <h3>2</h3>
                        </div>
                        <div>
                            <h3>3</h3>
                        </div>
                        <div>
                            <h3>4</h3>
                        </div>
                        <div>
                            <h3>5</h3>
                        </div>
                        <div>
                            <h3>6</h3>
                        </div>
                    </Slider>
                </div>
                
            </div>
            <div className="container">
                    <div className="row">
                        {renderPhim()}
                    </div>
            </div>
        </div >

    )
}

