import axios from 'axios'
import {domain,groupID, accessToken} from '../settings/config'
import React, { Component } from 'react'

 class AdminService extends Component {
     UserSearch = (taiKhoan) =>{
        return axios({
            url:`${domain}/QuanLyNguoiDung/TimKiemNguoiDung?maNhom=${groupID}&tuKhoa=${taiKhoan}`,
            method:'GET'
        })
    };
    ListUser = () =>{
        return axios({
            url: `${domain}/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${groupID}`,
            method: 'GET'
        })
    };
    DeleteUser = (taiKhoan) =>{
        return axios({
            url:`${domain}/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`,
            method: 'DELETE',
            headers: {
                "Authorization": `Bearer ${accessToken}`
            }

        })
    }
    
     
}
export const adminService = new AdminService()
