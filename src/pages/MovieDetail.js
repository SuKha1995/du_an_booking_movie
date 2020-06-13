import React, { useState, useEffect, Fragment } from 'react'
import { qlPhimService } from '../service/quanLiPhimService';
import { NavLink } from 'react-router-dom';
import moment from 'moment';

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

    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <img style={{ width: '200', height: '300' }} />
                </div>
                <div className="col-6">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Tên Phim</th>
                                <th>Lâu Đài Máu</th>
                            </tr>
                            <tr>
                                <th>
                                    Mô Tả
                                </th>
                                <th>Mô Tả ...</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
            <hr/>
            <div className="container">
                <div className="row">
                    <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        {thongTinPhim.heThongRapChieu?.map((heThongRap,index)=>{
                            return<a key={index} className="nav-link" id="v-pills-home-tab" data-toggle="pill" href={`#${heThongRap.maHeThongRap}`} role="tab" aria-controls="v-pills-home" aria-selected="true">
                                    <img src={heThongRap.logo} style={{width:'35px',height:'35px'}}/>
                                    <span className="ml-3">{heThongRap.tenHeThongRap}</span>
                                    </a>
                            
                        })}
                        {/* <a class="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</a>
                        <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Profile</a>
                        <a class="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Messages</a>
                        <a class="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</a> */}
                    </div>
                    <div className="tab-content col-8"  id="v-pills-tabContent">
                        
                             {thongTinPhim.heThongRapChieu?.map((heThongRap,index)=>{
                                 return <div 
                                 className="tab-pane fade show " id={heThongRap.maHeThongRap} role="tabpanel" aria-labelledby="v-pills-home-tab">
                                    {/* {heThongRap.tenHeThongRap} */}
                                    {heThongRap.cumRapChieu?.map((cumRap,index)=>{
                                        return <div key={index}>
                                           <p>{cumRap.tenCumRap}</p> 
                                           {cumRap.lichChieuPhim?.slice(0,12).map((lichChieu,index)=>{
                                               return  <NavLink to={`/showtime/${lichChieu.maLichChieu}`} key={index}>
                                                  
                                                       {moment(lichChieu.ngayChieuGioChieu).format("hh:mm A")}
                                                   </NavLink>
                                              
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
