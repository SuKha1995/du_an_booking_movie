import React from 'react'
import { Redirect, useHistory, NavLink } from 'react-router-dom'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as yup from 'yup'
import { adminService } from '../../service/AdminService';



export default function AddUser() {
    const history = useHistory();

    const RegisSchema = yup.object().shape({
        taiKhoan: yup.string().required("*Vui lòng nhập tên tài khoản"),
        matKhau: yup.string().required("*Vui lòng nhập tên tài khoản").min(8, "Mật khẩu phải dài hởn 8 kí tự"),
        email: yup.string().required("*Vui lòng nhập email").email("Email không đúng"),
        soDT: yup.string().required("*Vui lòng nhập số điện thoại").matches("^[0-9]+$", "*Vui lòng nhập đúng số điện thoại"),
        maNhom: yup.string().required("*Vui lòng chọn mã nhóm "),

        hoTen: yup.string().required("*Vui lòng nhập họ tên")
    })
    const handleThemNguoiDung = (values) => {
        // console.log(values)

       adminService.AddUser(values).then(res => {
            alert('Đăng ký thành công')
            history.push('/admin')
        }).catch(err => {
            console.log(err)
            alert('Đăng ký thất bại')

        })
    }

    return (
        <div className="formRegis">
            <div className="w-50 mx-auto">
                <h1 className='text-center  display-4  form__title'>Thêm Người Dùng</h1>
                <Formik
                    initialValues={{
                        taiKhoan: "",
                        matKhau: "",
                        email: "",
                        soDT: "",
                        maNhom: "GP01",

                        hoTen: "",
                        maLoaiNguoiDung: "KhachHang"

                    }}
                    validationSchema={RegisSchema}
                    onSubmit={handleThemNguoiDung}
                    render={(formikProps) => (
                        <Form>
                            <div className="form-group">
                                <label >Tài khoản</label>
                                <Field className="form-control"
                                    name="taiKhoan"
                                    type="text"
                                    onChange={formikProps.handleChange}

                                />
                                <ErrorMessage name="taiKhoan">
                                    {
                                        (err) => <div >{err}</div>
                                    }
                                </ErrorMessage>
                            </div>
                            <div className="form-group">
                                <label >Mật khẩu</label>
                                <Field className="form-control"
                                    name="matKhau"
                                    type="text"
                                    onChange={formikProps.handleChange}

                                />
                                <ErrorMessage name="matKhau">
                                    {
                                        (err) => <div >{err}</div>
                                    }
                                </ErrorMessage>
                            </div>
                            <div className="form-group">
                                <label >Họ tên</label>
                                <Field className="form-control"
                                    name="hoTen"
                                    type="text"
                                    onChange={formikProps.handleChange}

                                />
                                <ErrorMessage name="hoTen">
                                    {
                                        (err) => <div >{err}</div>
                                    }
                                </ErrorMessage>
                            </div>
                            <div className="form-group">
                                <label >Email</label>
                                <Field className="form-control"
                                    name="email"
                                    type="email"
                                    onChange={formikProps.handleChange}

                                />
                                <ErrorMessage name="email">
                                    {
                                        (err) => <div >{err}</div>
                                    }
                                </ErrorMessage>
                            </div>
                            <div className="form-group">
                                <label >Số điện thoại</label>
                                <Field className="form-control"
                                    name="soDT"
                                    type="text"
                                    onChange={formikProps.handleChange}

                                />
                                <ErrorMessage name="soDT">
                                    {
                                        (err) => <div >{err}</div>
                                    }
                                </ErrorMessage>
                            </div>
                            <div className="form-group">
                                <label >Mã nhóm</label>
                                <Field className="form-control"
                                    component="select"
                                    name="maNhom"
                                    type="text"
                                    onChange={formikProps.handleChange}

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


                                </Field>
                                <ErrorMessage name="maNhom">
                                    {
                                        (err) => <div >{err}</div>
                                    }
                                </ErrorMessage>
                            </div>
                            <div className="form-group">
                                <label >Mã loại người dùng</label>
                                <Field className="form-control"
                                    component="select"
                                    name="maLoaiNguoiDung"
                                    type="text"
                                    onChange={formikProps.handleChange}

                                >
                                    <option>KhachHang</option>
                                    <option>QuanTri</option>
                                    
                                    


                                </Field>
                                <ErrorMessage name="maLoaiNguoiDung">
                                    {
                                        (err) => <div >{err}</div>
                                    }
                                </ErrorMessage>
                            </div>
                            
                            
                            <div className="text-center">
                                <button className="btn btn-success" type="submit">Thêm</button>
                                
                            </div>
                        </Form>
                    )}
                >
                </Formik>
            </div>
        </div>


    )
}
