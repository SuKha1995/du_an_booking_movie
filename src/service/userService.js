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
    }
}

export const UserService = new userService();
