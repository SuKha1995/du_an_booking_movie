import { ErrorMessage, Field, Form, Formik } from 'formik'
import React, {useEffect} from 'react'
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
        soDt: yup.string().required("*Vui lòng nhập số điện thoại").matches("^[0-9]+$", "Vui lòng nhập đúng số điện thoại"),
        maNhom: yup.string().required("*Vui lòng chọn mã nhóm "),

        hoTen: yup.string().required("*Vui lòng nhập họ tên")
    })
    console.log('tt',thongTinNguoiDung )
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
                        soDt: thongTinNguoiDung.soDT,
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
                                    type="password"
                                    
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
                                        (err) => <div>{err}</div>
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
                                    name="soDt"
                                    type="text"
                                    onChange={formikProps.handleChange}

                                />
                                <ErrorMessage name="soDt">
                                    {
                                        (err) => <div>{err}</div>
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
