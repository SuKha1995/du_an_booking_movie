import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { UserService } from '../service/userService';
import { userLogin } from '../settings/config';
import UserModal from './UserEdit'
import moment from 'moment';
import { NavLink } from 'react-router-dom';

export default function User(props) {
    let [thongTinNguoiDung, setThongTinNguoiDung] = useState([])


    const getTaiKhoan = localStorage.getItem('userLogin')
    const TK = JSON.parse((getTaiKhoan));
    const taiKhoan = TK.taiKhoan
    
    let taiKhoanDN = {
        taiKhoan: taiKhoan
    }


    useEffect(() => {

        UserService.UserInfo(taiKhoanDN).then(res => {
            console.log(res.data)
            setThongTinNguoiDung(res.data)
        }).catch(err => {
            console.log(err)
        })
    }, [])


    return (
        <div className="container">

            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a className="nav-link active" data-toggle="tab" href="#home">Thông tin cá nhân</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#menu1">Lịch sử đặt vé</a>
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
                                        <td>Họ tên : </td>
                                        <td>{thongTinNguoiDung.hoTen}</td>

                                    </tr>
                                    <tr>
                                        <td>Email : </td>
                                        <td>{thongTinNguoiDung.email}</td>
                                    </tr>
                                    <tr>
                                        <td>Số điện thoại : </td>
                                        <td>{thongTinNguoiDung.soDT}</td>
                                    </tr>
                                    <tr>
                                        <td>Tài khoản : </td>
                                        <td>{thongTinNguoiDung.taiKhoan}</td>

                                    </tr>
                                    <tr>
                                        <td>Mật khẩu : </td>
                                        <td>. . . . . . . .</td>
                                    </tr>

                                </thead>

                            </table>
                            <button className="btn btn-success" >
                                
                                <NavLink to='/userEdit'>Sửa Thông Tin</NavLink>
                                {/* <UserModal thongTin ={thongTinNguoiDung}/> */}
                                </button>

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
       

    )
}

