import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                   
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item ">
                                <NavLink className="nav-link" to="/home">Trang Chủ <span className="sr-only">(current)</span></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/showtime/:maLichChieu">Cum Rạp</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/home">Tin Tức</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/home">Ứng Dụng</NavLink>
                            </li>
                            
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
            </div>

        )
    }
}
