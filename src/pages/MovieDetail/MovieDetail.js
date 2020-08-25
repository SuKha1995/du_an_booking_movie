import moment from 'moment';
import React, { useEffect, useState } from 'react';

import { NavLink } from 'react-router-dom';
import { qlPhimService } from '../../service/quanLiPhimService';
import './MovieDetail.scss';

export default function MovieDetail(props) {

    let [thongTinPhim, setThongTinPhim] = useState({});

    //gọi service lấy dữ liệu hiển thị tai lifecycal dismount
    useEffect(() => {
        qlPhimService.layThongTinLichChieuPhim(props.match.params.maPhim).then((res) => {// match.params.maPhim lấy mã phim từ url
            console.log(res.data)
            setThongTinPhim(res.data)
        }).catch((error) => {
            console.log(error.response.data)
        })
    }, [])
    console.log('thongTinPhim', thongTinPhim)
    const openTrailer = () => {
        window.open(thongTinPhim.trailer, "trailer")
    }

    return (
        <div className="container">
            <div className="row moviDetail">
                <div className="col-4 movieDetail__Img">
                    <img src={thongTinPhim.hinhAnh} />
                </div>

                <div className="col-8 movieDetail__content mt-3">
                    <div className="movieDetail__content--nameFilm">{thongTinPhim.tenPhim}</div>

                    <div className="movieDetail__content--painted">{thongTinPhim.moTa}</div>

                    <table >
                        <thead>
                            <tr>
                                <th className="movieDetail__content--text">Ngày chiếu : </th>
                                <th className="movieDetail__content--text">{moment(thongTinPhim.ngayKhoiChieu).format('MMMM Do YYYY')}</th>
                            </tr>
                            <tr>
                                <th className="movieDetail__content--text">Điểm đánh giá : </th>
                                <th className="movieDetail__content--text">{thongTinPhim.danhGia}</th>

                            </tr>
                        </thead>
                    </table>
                    <div className="my-3">
                        <button onClick={openTrailer} className="btn-orange mr-3 ">
                            Trailer
                        </button>
                        <button className="btn-orange" href="#datVe">
                            Đặt vé
                        </button>
                    </div>
                </div>
            </div>
            <hr />
            <div className="container">
                <h2 id="datVe">Chọn Rạp</h2>
                <div className="row">
                    <div className="nav flex-column nav-pills MovieDetail col-4" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        {thongTinPhim.heThongRapChieu?.map((heThongRap, index) => {
                            return <a key={index} className="nav-link MovieDetail__cumRap " id="v-pills-home-tab" data-toggle="pill" href={`#${heThongRap.maHeThongRap}`} role="tab" aria-controls="v-pills-home" aria-selected="true">
                                <img className="cumRap__img" src={heThongRap.logo} style={{ width: '35px', height: '35px' }} />
                                <span className="ml-3">{heThongRap.tenHeThongRap}</span>
                            </a>

                        })}

                    </div>
                    <div className="tab-content col-8" id="v-pills-tabContent">

                        {thongTinPhim.heThongRapChieu?.map((heThongRap, index) => {
                            return <div key={index}
                                className="tab-pane fade show" id={heThongRap.maHeThongRap} role="tabpanel" aria-labelledby="v-pills-home-tab">
                                {/* {heThongRap.tenHeThongRap} */}
                                {heThongRap.cumRapChieu?.map((cumRap, index) => {
                                    return <div key={index} >
                                        <p className="tenRap">{cumRap.tenCumRap}</p>
                                        {cumRap.lichChieuPhim?.slice(0, 12).map((lichChieu, index) => {
                                            return <button className="btn-orange mr-1 mb-1">
                                                <NavLink to={`/showtime/${lichChieu.maLichChieu}`} key={index} className="movieDetail__content--date">

                                                    {moment(lichChieu.ngayChieuGioChieu).format("hh:mm A")}
                                                </NavLink>
                                            </button>

                                        })}
                                    </div>
                                })}
                            </div>
                        })}

                        {/* <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">Home</div>
                        <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">Profile</div>
                        <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">Messages</div>
                        <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">Settings</div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
