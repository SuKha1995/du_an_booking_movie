import React, { useState, useEffect } from 'react'
import { qlPhimService } from '../service/quanLiPhimService';
import { NavLink } from 'react-router-dom';
import moment from 'moment';

import Slider from 'react-slick';
import '../assets/layout/HomeLayout.scss';

export default function Home(props) {

    let [danhSachPhim, setDanhSachPhim] = useState([]);
    let [thongTinRap, setthongTinRap] = useState([])

    //lay danh sách phim
    useEffect(() => {

        qlPhimService.layDanhSachPhim().then(res => {
            setDanhSachPhim(res.data)
            console.log(res.data)
        }).catch(error => {
            console.log(error.response.data)
        })

    }, []);

    //lấy danh sách cụm rap
    useState(() => {
        qlPhimService.layThongTinLichChieuHeThongRap().then((result) => {
            // console.log(result.data)
            setthongTinRap(result.data)
        }).catch((err) => {
            console.log(err)
        })
    }, [])
    console.log('thongTinRap', thongTinRap)

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplaySpeed: 3000,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    let renderPhim = () => {
        return danhSachPhim.slice(1).map((phim, index) => {
            return <div className="col-3 pt-1 movie__card-content" key="{index}">
                <div className="card-img">
                    <img src={phim.hinhAnh} style={{ width: '100%', height: 340 }} alt />
                    
                    <div className="card-bg"></div>

                </div>
                <div className="card-body">
                    <span className=" card-title ">{phim.tenPhim}</span>
                    <span className="card-date">{moment(phim.ngayKhoiChieu).format('MMMM Do YYYY')}</span>
                    <NavLink className="btn btn-success" to={`/moviedetail/${phim.maPhim}`}>ĐẶT VÉ</NavLink>
                </div>
                <a  href={phim.trailer} className="card-play"><i class="fa fa-play"></i>
                    </a>
                
            </div>
        })
    };


    return (
        <div>
            <Slider {...settings} className="text-center carousel">
                <div className="carousel__item">
                    <a>
                        <img src="../img/home/carousel1.png" width="100%" height="600px" />
                        <i class="fa fa-play"></i>
                    </a>
                </div>
                <div className="carousel__item">
                    <a><img src="../img/home/carousel2.jpg" width="100%" height="600px" />
                        <i class="fa fa-play"></i></a>
                </div>
                <div className="carousel__item">
                    <a><img src="../img/home/carousel3.jpg" width="100%" height="600px" />
                        <i class="fa fa-play"></i></a>
                </div>
                <div className="carousel__item">
                    <a><img src="../img/home/carousel4.jpg" width="100%" height="600px" />
                        <i class="fa fa-play"></i></a>
                </div>
            </Slider>
            <div className="container">
                <div className="row movie__card">
                    {renderPhim()}
                </div>
                <div className="my-3" id="heThongRap">

                    <div className="container">
                        <h2 className="text-center pb-3">Hệ Thống Rạp</h2>
                        <div className="row" >
                            <div className="nav flex-column nav-pills col-2 heThongRap" >
                                {thongTinRap.map((heThongRap, index) => {
                                    return <a key={index} className=" heThongRap__body" data-toggle="pill" href={`#${heThongRap.maHeThongRap}`}  >
                                        <p className="ml-3 heThongRap__rap">{heThongRap.maHeThongRap}</p>
                                    </a>
                                })}
                            </div>
                            <div className="col-4 tab-content px-0" style={{ height: 300, overflowY: 'scroll', padding: 5, border: '1px solid #ccc' }} >
                                {thongTinRap?.map((heThongRap, index) => {
                                    return <div
                                        className="tab-pane fade show active nav nav-pills " id={heThongRap.maHeThongRap}  >

                                        {heThongRap.lstCumRap.map((cumRap, index) => {
                                            return <a key={index} className="" data-toggle="pill" href={`#${cumRap.maCumRap}`} aria-selected="true">
                                                <p className="tenCumRap">
                                                    {cumRap.tenCumRap}
                                                </p>
                                                <p className="diaChi">
                                                    {cumRap.diaChi}
                                                </p>
                                            </a>
                                        })}
                                    </div>
                                })}
                            </div>
                            <div className="col-6 tab-content px-0" style={{ height: 300, overflowY: 'scroll', padding: 5, border: '1px solid #ccc' }}>
                                {thongTinRap?.map((heThongRap, index) => {
                                    // return <div className="tab-pane" key={index} id="bhd-star-cineplex-pham-hung" >
                                    return heThongRap.lstCumRap?.map((cumRap, index) => {
                                        return <div className="tab-pane  fade show active nav nav-pills"
                                            id={cumRap.maCumRap} key={index}    >
                                            {cumRap.danhSachPhim?.map((listPhim, index) => {
                                                return <div >
                                                    <div key={index} aria-selected="true" className="row">
                                                        <img src={listPhim.hinhAnh} style={{ width: 35, height: 50 }} className="col-2" />
                                                        <div className="col-10">
                                                            {listPhim.tenPhim}

                                                        </div>

 
                                                    </div>
                                                    <div className="mt-2 text-left">
                                                        {listPhim.lstLichChieuTheoPhim?.slice(50).map((lichChieu, index) => {
                                                            return <a aria-selected="true" className="px-2" ><button>
                                                                {moment(lichChieu.ngayChieuGioChieu).format("hh:mm A")}
                                                            </button>

                                                            </a>
                                                        })}
                                                    </div>

                                                </div>
                                            })}
                                        </div>
                                    })
                                    // </div>

                                })}
                            </div>
                        </div>
                    </div>



                </div >
            </div>
        </div>

    )
}

