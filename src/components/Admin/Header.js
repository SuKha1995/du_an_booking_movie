import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { userAction, checkLogin } from '../../redux/type/userType'

export default function Header() {
    let user = useSelector(state => state.user.thongTinDangNhap)
    const dispatch = useDispatch()
    const hangdleLogOut = () => {
        localStorage.clear()
        dispatch(userAction(''))
        dispatch(checkLogin(false))
    }

    return (
        <div>
            <div className="header row ">
                <div className="col-lg-9 col-md-7 col-sm-6 col-4">
                    <nav className="navbar navbar-expand-md navbar-dark py-0">
                        <NavLink class="navbar-brand " to="/home"><img src="../../img/logo/logo.svg" className="nav-logo " /></NavLink>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mx-auto   nav-items">
                                <li className="nav-item active">
                                    <NavLink className="nav-link  " to="/home">Trang Chủ </NavLink>
                                    <div className="nav__link"></div>
                                </li>

                            </ul>
                        </div>




                    </nav>
                </div>
                <div className="col-lg-3 col-md-5 col-sm-6 col-8 navbar ">
                    {user ? <div>
                        <NavLink to="/userEdit" style={{ color: 'white', fontSize: 18 }} className="mr-3" >Hi, {user.taiKhoan}</NavLink>
                        <NavLink to="/home" className="btn-orange" onClick={hangdleLogOut}>Đăng Xuất</NavLink>
                    </div>
                        : ""}

                </div>

            </div>

        </div>
    )
}
