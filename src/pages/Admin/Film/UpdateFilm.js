import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import * as yup from 'yup'
import { adminService } from '../../../service/AdminService'

export default function UpdateFilm() {
    const history = useHistory();
    const dispatch = useDispatch()

    let thongTinPhim = useSelector(state => state.admin.filmUpdate)
    // let thongTinNguoiDung = useSelector(state => state.user.thongTinDangNhap)
    
    const FilmSchema = yup.object().shape({
        maPhim: yup.string().required("*Vui lòng nhập mã phim"),
        tenPhim: yup.string().required("*Vui lòng nhập tên phim"),
        biDanh: yup.string().required("*Vui lòng nhập bí danh"),
        hinhAnh: yup.string().required("*Vui lòng nhập link hình ảnh"),
        moTa: yup.string().required("*Vui lòng nhập mô tả"),
        maNhom: yup.string().required("*Vui lòng chọn mã nhóm "),
        ngayKhoiChieu: yup.string().required("*Vui lòng ngày khởi chiếu"),
        danhGia: yup.string().required("*Vui lòng nhập điểm"),
    })
    const handleUpdateFilm = (values) => {
        adminService.UpdateFilm(values).then(res => {
            
            history.push('/admin')
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
                        maPhim: thongTinPhim.maPhim,
                        tenPhim: thongTinPhim.tenPhim,
                        biDanh: thongTinPhim.biDanh,
                        hinhAnh: thongTinPhim.hinhAnh,
                        moTa: thongTinPhim.moTa,
                        maNhom: thongTinPhim.maNhom,
                        ngayKhoiChieu: thongTinPhim.ngayKhoiChieu,
                        danhGia:thongTinPhim.danhGia

                    }}
                    validationSchema={FilmSchema}
                    onSubmit={handleUpdateFilm}
                    render={(formikProps) => (
                        <Form>
                            <div className="form-group">
                                <label >Mã phim</label>
                                <Field className="form-control"
                                    name="maPhim"
                                    type="text"
                                    // values= {thongTinNguoiDung.taiKhoan}
                                    onChange={formikProps.handleChange}

                                />
                                <ErrorMessage name="maPhim">
                                    {
                                        (err) => <div >{err}</div>
                                    }
                                </ErrorMessage>
                            </div>
                            <div className="form-group">
                                <label >Tên phim</label>
                                <Field className="form-control"
                                    name="tenPhim"
                                    type="text"
                                    // values={thongTinNguoiDung.matKhau}
                                    onChange={formikProps.handleChange}

                                />
                                <ErrorMessage name="tenPhim">
                                    {
                                        (err) => <div >{err}</div>
                                    }
                                </ErrorMessage>
                            </div>
                            <div className="form-group">
                                <label >Bí danh</label>
                                <Field className="form-control"
                                    name="biDanh"
                                    type="text"
                                    // values={thongTinNguoiDung.matKhau}
                                    onChange={formikProps.handleChange}

                                />
                                <ErrorMessage name="biDanh">
                                    {
                                        (err) => <div >{err}</div>
                                    }
                                </ErrorMessage>
                            </div>
                            <div className="form-group">
                                <label >Hinh Ảnh</label>
                                <Field className="form-control"
                                    name="hinhAnh"
                                    type="text"
                                    onChange={formikProps.handleChange}

                                />
                                <ErrorMessage name="hinhAnh">
                                    {
                                        (err) => <div>{err}</div>
                                    }
                                </ErrorMessage>
                            </div>
                            <div className="form-group">
                                <label >Mô tả</label>
                                <Field className="form-control"
                                    name="moTa"
                                    type="text"
                                    onChange={formikProps.handleChange}

                                />
                                <ErrorMessage name="moTa">
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
                                <label >Ngày khởi chiếu</label>
                                <Field className="form-control"
                                    name="ngayKhoiChieu"
                                    type="text"
                                    onChange={formikProps.handleChange}

                                />
                                <ErrorMessage name="ngayKhoiChieu">
                                    {
                                        (err) => <div>{err}</div>
                                    }
                                </ErrorMessage>
                            </div>
                            <div className="form-group">
                                <label >Đánh giá</label>
                                <Field className="form-control"
                                    name="danhGia"
                                    type="text"
                                    onChange={formikProps.handleChange}

                                />
                                <ErrorMessage name="danhGia">
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

