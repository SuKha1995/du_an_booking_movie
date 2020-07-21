import React, { Component } from 'react'
import axios from 'axios'
import {domain} from '../settings/config'

 class userService extends Component {
    Registration = (data) =>{
        return axios ({
            url: `${domain}/QuanLyNguoiDung/DangKy`,
            method: 'POST',
            data
        })
    }
}

export const UserService = new userService();
