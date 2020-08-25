import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { qlPhimService } from '../../service/quanLiPhimService';
import Carousel from './Carousel';
import './HomeLayout.scss';
import News from './News';

export default function Home(props) {

    let [danhSachPhim, setDanhSachPhim] = useState([]);
    let [thongTinRap, setthongTinRap] = useState([]);
    let history = useHistory();
    // let isLogin = useSelector(state => state.user.checkLogin)
    let isLogin = JSON.parse(localStorage.getItem('userLogin'))
    
    useEffect(() => {
        //lay danh sách phim
        qlPhimService.layDanhSachPhim().then(res => {
            setDanhSachPhim(res.data)
            // console.log(res.data)
        }).catch(error => {
            console.log(error.response.data)
        })

        //lay danh sách cụm rạp
        qlPhimService.layThongTinLichChieuHeThongRap().then((result) => {
            // console.log(result.data)
            setthongTinRap(result.data)
        }).catch((err) => {
            console.log(err)
        })

    }, []);

    //mở trailer ở tab mới
    const openTrailer = (phim) => {
        window.open(phim)
    }
    const datVe = (maPhim) =>{
        
        if (isLogin) {
            
            history.push(`./moviedetail/${maPhim}`)
        }
        else{
            history.push('/login')
        }
    }
    const datVeHeThongRap = (maLichChieu)=>{
        if (isLogin) {
            
            history.push(`/showTime/${maLichChieu}`)
        }
        else{
            history.push('/login')
        }
    }


    let renderPhim = () => {
        return danhSachPhim.slice(1).map((phim, index) => {
            return <div className="col-lg-3 col-md-4 col-sm-6 col-6 pt-1 movie__card-content" key="{index}">
                <div className="card-img">
                    <img src={phim.hinhAnh}  alt />

                    <div className="card-bg"></div>

                </div>
                <div className="card-body">
                    <span className=" card-title ">{phim.tenPhim}</span>
                    <span className="card-date">{moment(phim.ngayKhoiChieu).format('MMMM Do YYYY')}</span>
                    {/* <NavLink className="btn" to={`/moviedetail/${phim.maPhim}`}>ĐẶT VÉ</NavLink> */}
                    <button className="btn" onClick={()=> datVe(phim.maPhim)}>ĐẶT VÉ</button>
                </div>
                <a className="card-play" onClick={() => openTrailer(phim.trailer)}><i class="fa fa-play"></i>
                </a>

            </div>
        })
    };


    return (
        <div>
            {/* carousel */}
            <Carousel />

            {/* card phim */}
            <div className="container">
            <h2 className="text-center">Phim Đang Chiếu</h2>
                <div className="row movie__card">
                    
                    {renderPhim()}
                </div>
                <div className="my-3" id="heThongRap">

                    <div className="container heThongRap">
                        <div className="heThongRap__title">
                            <h2 className="text-center pb-3">Hệ Thống Rạp</h2>
                            <span className="text-center">Xem Lịch Chiếu Phim Theo Rạp</span>
                            <div className="news__title-line mt-4 mb-5" />
                        </div>
                        
                        <div className="row" >
                            <div className="nav flex-column nav-pills col-3 col-sm-3 heThongRap__body" >
                                {thongTinRap.map((heThongRap, index) => {
                                    return <a key={index} className=" heThongRap__content nav-link"  data-toggle="pill" href={`#${heThongRap.maHeThongRap}`}  >
                                        <p className="">{heThongRap.maHeThongRap}</p>
                                    </a>
                                })}
                            </div>
                            <div className="col-5 col-sm-6 tab-content px-0"  >
                                {thongTinRap?.map((heThongRap, index) => {
                                    return <div
                                        className="tab-pane show nav nav-pills cumRap" id={heThongRap.maHeThongRap} style={{ height: 318, overflowY: 'scroll', padding: 5, border: '1px solid #ccc' }} >

                                        {heThongRap.lstCumRap.map((cumRap, index) => {
                                            return <a key={index} className="nav-link cumRap__body" data-toggle="pill" href={`#${cumRap.maCumRap}`} aria-selected="true">
                                                <p className="tenCumRap">
                                                    {cumRap.tenCumRap}
                                                </p>
                                                <p className="diaChi">
                                                   Địa chỉ : {cumRap.diaChi}
                                                </p>
                                            </a>
                                           
                                             
                                        })}
                                    </div>
                                })}
                            </div>
                            <div className="col-4 col-sm-3 tab-content px-0" >
                                {thongTinRap?.map((heThongRap, index) => {
                                    
                                    return heThongRap.lstCumRap?.map((cumRap, index) => {
                                        return <div className="tab-pane  fade show  nav nav-pills" 
                                            id={cumRap.maCumRap} key={index}    >
                                            {cumRap.danhSachPhim?.map((listPhim, index) => {
                                                return <div >
                                                    <div key={index} aria-selected="true" className="row px-2 ">
                                                        <img src={listPhim.hinhAnh}  className=" col-8 col-sm-8 col-md-8 col-lg-6 hinhAnh" />
                                                        <div className=" col-sm-12 col-md-8 col-lg-6 tenPhim">
                                                            {listPhim.tenPhim}
                                                            
                                                        </div>


                                                    </div>
                                                    <div className="mt-4">
                                                        {listPhim.lstLichChieuTheoPhim?.slice(50).map((lichChieu, index) => {
                                                            return  <a aria-selected="true" className="px-2" >
                                                                <button className="btn-orange" onClick={()=>datVeHeThongRap(lichChieu.maLichChieu)}>{moment(lichChieu.ngayChieuGioChieu).format("hh:mm A")}</button>
                                                                {/* <NavLink to={`/showTime/${lichChieu.maLichChieu}`} className="btn-orange" >
                                                                {moment(lichChieu.ngayChieuGioChieu).format("hh:mm A")}
                                                                </NavLink> */}

                                                                                    
                                                            </a>
                                                            
                                                           
                                                        })}
                                                    </div>

                                                </div>
                                            })}
                                        </div>
                                    })
                                })}
                            </div>
                        </div>
                    </div>
                </div >
            </div>

            {/* tin tuc*/}
            <News/>

        </div>

    )
}

