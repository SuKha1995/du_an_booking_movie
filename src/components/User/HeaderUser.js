import React from 'react'
import {NavLink} from 'react-router-dom'
export default function HeaderUser() {
    return (
        <div className="header mb-3">
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
                    <button>Đăng Xuất</button>
                </div>


            </nav>

        </div>
    )
}
