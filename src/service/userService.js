import React, { Component } from 'react'
import axios from 'axios'
import {domain,groupID, accessToken} from '../settings/config'

 class userService extends Component {
    Registration = (data) =>{
        return axios ({
            url: `${domain}/QuanLyNguoiDung/DangKy`,
            method: 'POST',
            data
        })
    };
    Login = (user) =>{
        return axios({
            url: `${domain}/QuanLyNguoiDung/DangNhap`,
            method: 'POST',
            data: user,
        })
    };
    UserInfo = (taiKhoan) =>{
        return axios({
            url: `${domain}//QuanLyNguoiDung/ThongTinTaiKhoan`,
            method: 'POST',
            data: taiKhoan,
        })
    };
    UserEditInfo = (data)=>{
        return axios({
            url: `${domain}/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
            method: 'PUT',
            data,
            headers: {
                "Authorization": `Bearer ${accessToken}`
            }
        })
    }
}

export const UserService = new userService();
