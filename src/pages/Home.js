import React, { useState, useEffect } from 'react'
import { qlPhimService } from '../service/quanLiPhimService';
import { NavLink } from 'react-router-dom';

export default function Home(props) {

    let [danhSachPhim, setDanhSachPhim] = useState([]);

    useEffect(() => {

        qlPhimService.layDanhSachPhim().then(res => {
            setDanhSachPhim(res.data)
        }).catch(error => {
            console.log(error.response.data)
        })

    }, [])
    const renderPhim = () => {
        return danhSachPhim.map((phim, index) => {
            return <div className="col-4" key="{index}">
                <div classname="card text-left">
                    <img classname="card-img-top" src={phim.hinhAnh} style={{width:'100%'}} alt />
                    <div classname="card-body">
                        <h4 classname="card-title">{phim.tenPhim}</h4>
                        <NavLink className="btn btn-success" to={`/moviedetail/${phim.maPhim}`}>Đặt Vé</NavLink> 
                    </div>
                </div>
            </div>

        })
    }

    return (
        <div className="row">
            {renderPhim()}
        </div>
    )
}

