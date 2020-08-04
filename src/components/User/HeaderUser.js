import React from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import { useSelector } from 'react-redux'
export default function HeaderUser() {
    const user = useSelector(state => state.user.thongTinDangNhap);
    
    const getCheckLogin = useSelector(state => state.user.checkLogin);
    const history = useHistory();
    const hangdleLogOut = () => {
        localStorage.clear()

        history.push('/home')
    }
    return (
        <div className="header ">
            <nav className="navbar navbar-expand-lg  py-0">
                <NavLink class="navbar-brand " to="/home"><img src="../../img/logo/logo.svg" className="nav-logo " /></NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav    nav-items">
                        <li className="nav-item active">
                            <NavLink className="nav-link  " to="/home">Trang Chủ </NavLink>
                            <div className="nav__link"></div>
                        </li>
                    </ul>
                </div>
               
                <div>
                    {user?  <NavLink to="/home" className="btn-orange" onClick={hangdleLogOut}>Đăng Xuất</NavLink> : ""}
                   
                </div>


            </nav>

        </div>
    )
}
