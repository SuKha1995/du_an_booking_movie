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
    AddUser = (values) =>{
        return axios({
            url:`${domain}/QuanLyNguoiDung/ThemNguoiDung`,
            method:'POST',
            data: values,
            headers: {
                "Authorization": `Bearer ${accessToken}`
            }
        })
    }
    UpdateUser = (data)=>{
        return axios({
            url: `${domain}/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
            method: 'PUT',
            data,
            headers: {
                "Authorization": `Bearer ${accessToken}`
            }
        })
    }
    AddFilm = (values) =>{
        return axios({
            url: `${domain}/QuanLyPhim/ThemPhimUploadHinh`,
            method: 'POST',
            data: values,
            headers: {
                "Authorization": `Bearer ${accessToken}`
            }
        })
    }
    UpdateFilm = (phim) =>{
        return axios({
            url: `${domain}/QuanLyPhim/CapNhatPhimUpload`,
            method:'POST',
            data:phim,
            headers: {
                "Authorization": `Bearer ${accessToken}`
            }
        })
    }
    DeleteFilm = (maPhim) =>{
        return axios({
            url: `${domain}/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`,
            method: 'DELETE',
            headers: {
                "Authorization": `Bearer ${accessToken}`
            }
        })
    }
    
     
}
export const adminService = new AdminService()
