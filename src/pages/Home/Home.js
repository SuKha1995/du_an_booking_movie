import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { qlPhimService } from '../../service/quanLiPhimService';
import Carousel from './Carousel';
import './HomeLayout.scss';

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
    const openTrailer = (phim) => {
        window.open(phim)
    }

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
                    <NavLink className="btn" to={`/moviedetail/${phim.maPhim}`}>ĐẶT VÉ</NavLink>
                </div>
                <a className="card-play" onClick={() => openTrailer(phim.trailer)}><i class="fa fa-play"></i>
                </a>

            </div>
        })
    };


    return (
        <div>
            <Carousel />
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
                                    return <a key={index} className=" heThongRap__content nav-link"  data-toggle="pill" href={`#${heThongRap.maHeThongRap}`}  >
                                        <p className="">{heThongRap.maHeThongRap}</p>
                                    </a>
                                })}
                            </div>
                            <div className="col-4 tab-content px-0"  >
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
                            <div className="col-6 tab-content px-0" >
                                {thongTinRap?.map((heThongRap, index) => {
                                    
                                    return heThongRap.lstCumRap?.map((cumRap, index) => {
                                        return <div className="tab-pane  fade show  nav nav-pills" 
                                            id={cumRap.maCumRap} key={index}    >
                                            {cumRap.danhSachPhim?.map((listPhim, index) => {
                                                return <div >
                                                    <div key={index} aria-selected="true" className="row px-2">
                                                        <img src={listPhim.hinhAnh} style={{ width: 50, height: 75 }} className="col-2" />
                                                        <div className="col-10 tenPhim">
                                                            {listPhim.tenPhim}
                                                            
                                                        </div>


                                                    </div>
                                                    <div className="mt-4">
                                                        {listPhim.lstLichChieuTheoPhim?.slice(50).map((lichChieu, index) => {
                                                            return  <a aria-selected="true" className="px-2" >
                                                                <NavLink to={`/showTime/${lichChieu.maLichChieu}`} className="btn-orange" >
                                                                {moment(lichChieu.ngayChieuGioChieu).format("hh:mm A")}
                                                                </NavLink>
                                                                                    
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
        </div>

    )
}

