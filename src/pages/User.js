import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/layout/UserLayout.scss';
import { UserService } from '../service/userService';
import {useSelector , useDispatch} from 'react-redux'

export default function User(props) {
    let [thongTinNguoiDung, setThongTinNguoiDung] = useState([])
    let thongTinTaiKhoan = useSelector(state => state.user.thongTinDangNhap)
    let taiKhoan = thongTinTaiKhoan.taiKhoan


    let taiKhoanDN = {
        taiKhoan: taiKhoan
    }
    
    useEffect(() => {

        UserService.UserInfo(taiKhoanDN).then(res => {
            setThongTinNguoiDung(res.data)
            
        }).catch(err => {
            console.log(err)
        })
       
    }, [thongTinTaiKhoan])
    console.log('thongTin',thongTinTaiKhoan )


    return (
        <div className="user__content">
            <div className="container ">

                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a className="nav-link active  user-title" data-toggle="tab" href="#home">Thông Tin Cá Nhân</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link user-title" data-toggle="tab" href="#menu1">Lịch Sử Đặt Vé</a>
                    </li>

                </ul>
                {/* Tab panes */}
                <div className="tab-content">
                    <div className="tab-pane container active" id="home">
                        <div className="row">
                            <div className="col-6">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <td className="out-title">Họ tên : </td>
                                            <td className="out-body">{thongTinNguoiDung.hoTen}</td>

                                        </tr>
                                        <tr>
                                            <td className="out-title">Email : </td>
                                            <td className="out-body">{thongTinNguoiDung.email}</td>
                                        </tr>
                                        <tr>
                                            <td className="out-title">Số điện thoại : </td>
                                            <td className="out-body">{thongTinNguoiDung.soDT}</td>
                                        </tr>
                                        <tr>
                                            <td className="out-title">Tài khoản : </td>
                                            <td className="out-body">{thongTinNguoiDung.taiKhoan}</td>

                                        </tr>
                                        <tr>
                                            <td className="out-title">Mật khẩu : </td>
                                            <td className="out-body">. . . . . . . .</td>
                                        </tr>

                                    </thead>

                                </table>
                                
                                <div className="text-center">
                                    <NavLink to='/userEdit' className="navLink">Sửa Thông Tin</NavLink>
                                    {/* <UserModal thongTin ={thongTinNguoiDung}/> */}
                                </div>

                            </div>
                            <div className="col-6">

                            </div>
                        </div>
                    </div>
                    <div className="tab-pane container fade" id="menu1">
                        {thongTinNguoiDung.thongTinDatVe?.map((phim, index) => {
                            return <div key={index}>

                                <div className="card mb-3" style={{ maxWidth: 540 }}>
                                    <div className="row no-gutters">
                                        <div className="col-md-4">
                                            <img src="..." className="card-img" style={{ width: 150, height: 150 }} />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title">{phim.tenPhim}</h5>
                                                <p className="card-text">
                                                    {phim.danhSachGhe?.map((ghe, index) => {
                                                        return <div>
                                                            <p>  {ghe.tenHeThongRap}</p>
                                                            <span>{ghe.tenRap}</span>
                                                            <span className="ml-5">Số ghế : {ghe.tenGhe}</span>

                                                        </div>
                                                    })}
                                                </p>
                                                <p className="card-text"><small className="text-muted"> Ngày đặt  :
                                    {moment(phim.ngayDat).toString()}
                                                </small></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        })}
                    </div>

                </div>


            </div >
        </div>



    )
}

