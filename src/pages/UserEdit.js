import React,{useEffect} from 'react'
import {useSelector , useDispatch} from 'react-redux'
import {  Redirect, useHistory, NavLink} from 'react-router-dom'
import { Formik,Field, Form, ErrorMessage} from 'formik'
import * as yup from 'yup'
import { UserService } from '../service/userService';
import { userAction } from '../redux/type/userType'

export default function UserEdit(props) {
    const history = useHistory();
    const dispatch = useDispatch()
    // const thongTinNguoiDung = JSON.parse(localStorage.getItem('userLogin'))
    const thongTinNguoiDung = useSelector(state => state.user.thongTinDangNhap)
    const RegisSchema = yup.object().shape({
        taiKhoan: yup.string().required("Vui lòng điền tên tài khoản"),
        matKhau: yup.string().required("Vui lòng điền tên tài khoản").min(8,"Mật khẩu phải dài hởn 8 kí tự"),
        email:yup.string().required("Vui lòng nhập email").email("Email không đúng"),
        soDT: yup.string().required("Vui lòng nhập số điện thoại").matches("^[0-9]+$" , "Vui lòng nhập đúng số điện thoại"),
        maNhom: yup.string().required("Vui lòng chọn mã nhóm "),

        hoTen: yup.string().required("Vui lòng nhập họ tên")
    })
    const _handleSubmit = (values)=>{
        UserService.UserEditInfo(values).then(res =>{
            // console.log(res.data)

            dispatch(userAction(values))
            history.push('/user')
        }).catch(err =>{
            console.log(err)
        })
    }
    // useEffect(() => {
    //     effect
    //     return () => {
    //         cleanup
    //     }
    // }, [input])
    return (
        <div className="w-50 mx-auto">
        <h1 className='text-center  display-4'>Sửa Thông Tin Tài Khoản</h1>
        <Formik 
            initialValues = {{
                        taiKhoan: thongTinNguoiDung.taiKhoan,
                        matKhau: thongTinNguoiDung.matKhau,
                        email: thongTinNguoiDung.email,
                        soDT: thongTinNguoiDung.soDT,
                        maNhom: thongTinNguoiDung.maNhom,
                        maLoaiNguoiDung: thongTinNguoiDung.maLoaiNguoiDung,
                        hoTen: thongTinNguoiDung.hoTen,
            
                    }}
            validationSchema = {RegisSchema}
            onSubmit ={_handleSubmit}
            render = {(formikProps) =>(
                <Form>
                    <div className="form-group">
                        <label >Tài khoản</label>
                        <Field className="form-control"
                            name="taiKhoan"
                            type="text"
                            // values= {thongTinNguoiDung.taiKhoan}
                            onChange={formikProps.handleChange}
                            
                        />
                        <ErrorMessage name="taiKhoan"> 
                            {
                                (err)=> <div className="alert alert-danger">{err}</div>
                            }
                        </ErrorMessage>
                    </div>
                    <div className="form-group">
                        <label >Mật khẩu</label>
                        <Field className="form-control"
                            name="matKhau"
                            type="password  "
                            // values={thongTinNguoiDung.matKhau}
                            onChange={formikProps.handleChange}
                        
                        />
                        <ErrorMessage name="matKhau"> 
                            {
                                (err)=> <div className="alert alert-danger">{err}</div>
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
                                (err)=> <div className="alert alert-danger">{err}</div>
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
                                (err)=> <div className="alert alert-danger">{err}</div>
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
                                (err)=> <div className="alert alert-danger">{err}</div>
                            }
                        </ErrorMessage>
                    </div>
                    <div className="text-center">
                        <button className="btn btn-success" type="submit">Xác Nhận</button>
                        
                    </div>




            </Form>
            )}
        >
            
        </Formik>
    </div>

           
    )
}
