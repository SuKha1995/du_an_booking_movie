import React, { Component } from 'react'
import axios from 'axios'
import {domain,groupID, accessToken} from '../settings/config'

 class quanLiPhimService extends Component {
    layDanhSachPhim = ()=>{
        return axios({
            url:`${domain}/QuanLyPhim/LayDanhSachPhim?maNhom=${groupID}`,
            method:'GET'
        })
    };
    layThongTinLichChieuPhim =(maPhim)=>{
        return axios({
            url:`${domain}/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
            method:'GET'
        })
    };

    layThongTinphongVe = (maLichChieu)=>{
        console.log(maLichChieu,'maLichChieu')
        return axios({
            url:`${domain}/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`,
            method:'GET'
        })
    }
    datVe = (thongTinDatVe) =>{
        return axios({
            url: `${domain}/QuanLyDatVe/DatVe`,
            method:'POST',
            data: thongTinDatVe,
            headers:{
                "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiMTIzQGFkbWluIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiS2hhY2hIYW5nIiwibmJmIjoxNTkxOTcxNTk2LCJleHAiOjE1OTE5NzUxOTZ9.dahXRlqX0Bp0qU-7zc3gjr70AcslQmTBuWz5hbJTEhI`
            }
        })
    }
    layThongTinLichChieuHeThongRap (){
        return axios({
            url:`${domain}/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${groupID}`,
            method: 'GET',

        })
    }



    }
       

export const qlPhimService = new quanLiPhimService();
