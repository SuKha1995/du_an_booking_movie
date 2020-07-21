import React from 'react'
import { BrowserRouter ,Redirect} from 'react-router-dom'
import { useFormik } from 'formik'
import { UserService } from '../service/userService';

export default function Regis() {
    const formik = useFormik({
        initialValues: {
            taiKhoan: "",
            matKhau: "",
            email: "",
            soDT: "",
            maNhom: "",

            hoTen: "",

        },
        onSubmit :values =>{
            console.log(values)
            UserService.Registration(values).then(res =>{
               
                return <Redirect to="/login"/>
               
               
            }).catch(err =>{
                console.log(err)
                alert('Đăng ký thất bại')
                
            })
        }
    });
    
    return (<div className="w-50 mx-auto">
        <h1 className='text-center  display-4'>Đăng Ký</h1>
        <form onSubmit={formik.handleSubmit}>
            <div className="form-group">
                <label >Tài khoản</label>
                <input className="form-control"
                    name="taiKhoan"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.taiKhoan}
                />
            </div>
            <div className="form-group">
                <label >Mật khẩu</label>
                <input className="form-control"
                    name="matKhau"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.matKhau}
                />
            </div>
            <div className="form-group">
                <label >Email</label>
                <input className="form-control"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
            </div>
            <div className="form-group">
                <label >Số điện thoại</label>
                <input className="form-control"
                    name="soDT"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.soDT}
                />
            </div>
            <div className="form-group">
                <label >Mã nhóm</label>
                <select className="form-control"
                    name="maNhom"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.maNhom}
                >
                    <option>GP01</option>
                    <option>GP02</option>
                    <option>GP03</option>
                    <option>GP04</option>
                    <option>GP05</option>
                    <option>GP06</option>
                    <option>GP07</option>
                    <option>GP08</option>
                    <option>GP09</option>
                    <option>GP10</option>


                </select>
            </div>
            <div className="form-group">
                <label >Họ tên</label>
                <input className="form-control"
                    name="hoTen"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.hoTen}
                />
            </div>
            <div className="text-center">
                <button className="btn btn-success" type="submit">Đăng ký</button>
            </div>




        </form>
    </div>

    )
}
