import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import '../../pages/User/UserLayout.scss';
import { UserService } from '../../service/userService';

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

    }, [])
    console.log('thongTin', thongTinNguoiDung)

    return (
        <div className="user__content">
            <div className="container ">

                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a className="nav-link active  user-title" data-toggle="tab" href="#thongTinCaNhan">Thông Tin Cá Nhân</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link user-title" data-toggle="tab" href="#lichSuDatVe">Lịch Sử Đặt Vé</a>
                    </li>

                </ul>
                {/* Tab panes */}
                <div className="tab-content">
                    <div className="tab-pane container active" id="thongTinCaNhan">
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-6">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <td className="info-title">Họ tên : </td>
                                            <td className="info-body">{thongTinNguoiDung.hoTen}</td>

                                        </tr>
                                        <tr>
                                            <td className="info-title">Email : </td>
                                            <td className="info-body">{thongTinNguoiDung.email}</td>
                                        </tr>
                                        <tr>
                                            <td className="info-title">Số điện thoại : </td>
                                            <td className="info-body">{thongTinNguoiDung.soDT}</td>
                                        </tr>
                                        <tr>
                                            <td className="info-title">Tài khoản : </td>
                                            <td className="info-body">{thongTinNguoiDung.taiKhoan}</td>

                                        </tr>
                                        <tr>
                                            <td className="info-title">Mật khẩu : </td>
                                            <td className="info-body">. . . . . . . .</td>
                                        </tr>

                                    </thead>

                                </table>

                                <div className="text-center">
                                    <NavLink to='/userEdit' className="navLink">Sửa Thông Tin</NavLink>
                                    {/* <UserModal thongTin ={thongTinNguoiDung}/> */}
                                </div>

                            </div>
                            
                        </div>
                    </div>
                    <div className="tab-pane container fade film" id="lichSuDatVe">
                        {thongTinNguoiDung.thongTinDatVe?.map((thongTinPhimDaDat, index) => {
                            return <div key={index}>

                                <div className="card mb-3 film__card pb-5" >
                                    <div className="row no-gutters">
                                        <div className="col-md-2">
                                            <img src="..." className="card-img"  />
                                        </div>
                                        <div className="col-10">
                                            <div className="">
                                                <h5 className="card-title film__Name">{thongTinPhimDaDat.tenPhim}</h5>
                                                <div className="card-text">
                                                    {thongTinPhimDaDat.danhSachGhe?.map((phim, index) => {
                                                        return <div key={index} className="film__content">
                                                            <p>  {phim.tenHeThongRap}</p>
                                                            <span>{phim.tenRap}</span>
                                                            <span className="ml-5">Số ghế : {phim.tenGhe}</span>

                                                        </div>
                                                    })}
                                                </div>
                                                <p className="card-text"><small className="text-muted film__date"> Ngày đặt  :
                                    {moment(thongTinPhimDaDat.ngayDat).toString()}
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

