import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import '../../templates/HomeTemplate/HomeTemplate.scss';

export default function Header(props) {

    let user = useSelector(state => state.user.thongTinDangNhap)
    let maNguoiDung = user.maLoaiNguoiDung;
    console.log('object', maNguoiDung)
    let loaiNguoiDung = ''
    console.log('user', user)
    const checkUser = (loaiNguoiDung) => {

        if (maNguoiDung == 'KhachHang') {
            loaiNguoiDung = "/user"
        }
        else {
            loaiNguoiDung = "/admin"
        }
        return loaiNguoiDung
    }

    return (
        <div className="header sticky-top">
            
            <nav className="navbar navbar-expand-lg  navbar-dark">
                <NavLink className="navbar-brand " to="/home"><img src="../../img/logo/logo.svg" className="nav-logo " /></NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse  " id="collapsibleNavbar">
                <ul className="navbar-nav  mx-auto    nav-items">
                        <li className="nav-item active">
                            <NavLink className="nav-link  " to="/home">Trang Chủ </NavLink>
                            <div className="nav__link"></div>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link " href="#heThongRap">Hệ Thống Rạp</a>
                            <div className="nav__link "></div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#news">Tin Tức</a>
                            <div className="nav__link"></div>
                        </li>
                    </ul>
                </div>
                <span className="mr-2 "><i class="fa fa-user-circle icon-login"></i></span>
                <div>
                    <div>

                        {user ? <NavLink to={checkUser(loaiNguoiDung)} className="login mr-3">Hi, {user.taiKhoan}</NavLink> :

                            <div className="mr-5" >
                                <NavLink className="login mr-3" to="/regis">Đăng Ký</NavLink>

                                <NavLink className="login" to="/login">Đăng Nhập</NavLink>
                            </div>}
                    </div>

                </div>
            </nav>

        </div>
    )
}

