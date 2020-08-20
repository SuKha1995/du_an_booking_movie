import React, { Component } from 'react'
import Film from './Film/Film'
import User from './User'

export default class Admin extends Component {
    render() {
        return (
            <div>
                <div>
                    {/* Nav tabs */}
                    <ul className="nav nav-tabs">
                        
                        <li className="nav-item">
                            <a className="nav-link active" data-toggle="tab" href="#quanLiNguoiDung">Quản Lí Người Dùng</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " data-toggle="tab" href="#quanLiPhim">Quản Lí Phim</a>
                        </li>
                        
                    </ul>
                    {/* Tab panes */}
                    <div className="tab-content">
                        <div className="tab-pane container fade" id="quanLiPhim">
                            <Film/>
                        </div>
                        <div className="tab-pane container active " id="quanLiNguoiDung">
                            <User/>
                        </div>
                        
                    </div></div>

            
            </div >
        )
    }
}
