import React from 'react'
import {useFormik} from 'formik'
import { useDispatch} from 'react-redux'
import {LoginAction} from '../redux/actions/userAction'


 function Login() {
    const dispatch = useDispatch()
   const formik = useFormik({
        initialValues: {
            taiKhoan: "",
            matKhau: ""
        },
        onSubmit: values =>{
            
            dispatch(LoginAction(values));// dispatch lên server gọi api
            
        }
    })
    return (
        <div className="w-50 mx-auto">
            <h1 className="text-center display-4">Đăng nhập</h1>
            <form onSubmit={formik.handleSubmit}>
                <div className="form-group">
                    <label>Tài khoản</label>
                    <input className="form-control"
                        name= "taiKhoan"
                        type= "text"
                        onChange={formik.handleChange}
                        value={formik.values.taiKhoan}
                         />

                </div>
                <div className="form-group">
                    <label>Mật khẩu</label>
                    <input className="form-control"
                        name= "matKhau"
                        type= "password"
                        onChange={formik.handleChange}
                        value={formik.values.matKhau}
                         />

                </div>
                <div>
                    <button className="btn btn-success mr-2" type="submit">
                        Đăng nhập
                    </button>
                    <button className="btn btn-success" type="submit">
                        Đăng ký
                    </button>
                </div>
            </form>
        </div>
    )
}
export default (Login);
