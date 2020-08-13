import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import * as yup from 'yup'
import { userAction } from '../../redux/type/userType'
import { UserService } from '../../service/userService'

export default function UserEdit(props) {
    const history = useHistory();
    const dispatch = useDispatch()
    // const thongTinNguoiDung = JSON.parse(localStorage.getItem('userLogin'))

    let thongTinNguoiDung = useSelector(state => state.user.thongTinDangNhap)
    const RegisSchema = yup.object().shape({
        taiKhoan: yup.string().required("*Vui lòng nhập tên tài khoản"),
        matKhau: yup.string().required("*Vui lòng nhập tên tài khoản").min(8, "*Mật khẩu phải dài hởn 8 kí tự"),
        email: yup.string().required("*Vui lòng nhập email").email("*Email không đúng"),
        soDT: yup.string().required("*Vui lòng nhập số điện thoại").matches("^[0-9]+$", "Vui lòng nhập đúng số điện thoại"),
        maNhom: yup.string().required("*Vui lòng chọn mã nhóm "),

        hoTen: yup.string().required("*Vui lòng nhập họ tên")
    })
    const _handleSubmit = (values) => {
        UserService.UserEditInfo(values).then(res => {
            // console.log(res.data)

            dispatch(userAction(values))
            history.push('/user')
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <div className="formRegis">
            <div className="w-50 mx-auto">
                <h1 className='text-center  display-4 form__title'>Sửa Thông Tin Tài Khoản</h1>
                <Formik
                    initialValues={{
                        taiKhoan: thongTinNguoiDung.taiKhoan,
                        matKhau: thongTinNguoiDung.matKhau,
                        email: thongTinNguoiDung.email,
                        soDT: thongTinNguoiDung.soDT,
                        maNhom: thongTinNguoiDung.maNhom,
                        maLoaiNguoiDung: thongTinNguoiDung.maLoaiNguoiDung,
                        hoTen: thongTinNguoiDung.hoTen,

                    }}
                    validationSchema={RegisSchema}
                    onSubmit={_handleSubmit}
                    render={(formikProps) => (
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
                                        (err) => <div >{err}</div>
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
                                        (err) => <div>{err}</div>
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
                                        (err) => <div>{err}</div>
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
                                        (err) => <div>{err}</div>
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

        </div>


    )
}
