import React, { useState ,useEffect} from 'react'
import { useDispatch, useSelector, } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { adminService } from '../../service/AdminService'
import { getListUserAction } from '../../redux/actions/adminAction'

export default function User() {
    // let [danhSachNguoiDung,setDanhSachNguoiDung] = useState([]);
    let danhSachNguoiDung = useSelector(state => state.admin.listUser)
    let [nguoiDungTimThay,setNguoiDungTimThay] = useState([]);
    const dispatch = useDispatch()
    let tendangnhap= ""
    const _handleSubmit = (values) => { //gọi api tìm người dùng
        // console.log(values)
        tendangnhap = values.taiKhoan
        // console.log('object',tendangnhap)
        adminService.UserSearch(tendangnhap).then(res => {
            console.log(res.data)
            setNguoiDungTimThay(res.data)
        }).catch(err => {
            console.log(err)
        })
    };
    console.log('danhsach',danhSachNguoiDung)
    const DeleteUser = (taiKhoan) =>{ // gọi api xóa người dùng
        adminService.DeleteUser(taiKhoan).then(res =>{
            console.log('xóa thành công')
           
        }).catch(err =>{
            console.log(err)
        })
    };

    useEffect(() => {

        dispatch(getListUserAction())

    }, []);

    const renderUserFind = () =>{
        return nguoiDungTimThay?.map((userFind,index) =>{
            return <tr key={index}>
                    <td>{userFind.taiKhoan}</td>
                    <td>{userFind.matKhau}</td>
                    <td>{userFind.hoTen}</td>
                    <td>{userFind.email}</td>
                    <td>{userFind.soDt}</td>
                </tr>
            
        })
    }
    
     const renderListUser = () =>{
         return danhSachNguoiDung.map((user,index)=>{
             return <tr key={index}>
                 <td>{index + 1}</td>
                 <td>{user.taiKhoan}</td>
                 <td>{user.matKhau}</td>
                 <td>{user.hoTen}</td>
                 <td>{user.email}</td>
                 <td>{user.soDt}</td>
                 <td className="text-center">
                     <button className="btn btn-success mr-2">Sửa</button>
                     <button className="btn btn-danger" onClick={()=> DeleteUser(user.taiKhoan)}>Xóa</button>
                 </td>
             </tr>
         })

     }
    return (
        <div >
            <button className="btn btn-success my-3">
                <NavLink to="/addUser" style={{color: 'white'}}>Thêm Người Dùng</NavLink>

            </button>
            <Formik
                initialValues={{
                    taiKhoan:""
                }}
                
                onSubmit={_handleSubmit}
                render={(formimProps) => (
                    <Form>
                        <span>
                            <label>Nhập Tên Tài Khoản Người Dùng Cần Tìm</label>
                            <Field className="form-control"
                            style={{width: 500}}
                                name="taiKhoan"
                                type="text"
                                onChange={formimProps.handleChange}
                            />
                        </span>
                        <span>
                             <button className="btn btn-success" type="submit">Tìm</button>
                        </span>
                        
                        
                    </Form>
                )}
                >
               
           </Formik>

            <div>
                <table className="table">
                    <thead>
                        <tr>
                           
                            <th>Tài Khoản</th>
                            <th>Mật Khẩu</th>
                            <th>Họ Tên</th>
                            <th>Email</th>
                            <th>Số ĐT</th>
                            <th>Chức Năng</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderUserFind()}
                    </tbody>
                </table>
            </div>

           <div style={{ height: 600, overflowY: 'scroll', padding: 0, border: '1px solid #ccc' }} className="mt-5 text-center">
               <table className="table table-hover table-bordered">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tài Khoản</th>
                            <th>Mật Khẩu</th>
                            <th>Họ Tên</th>
                            <th>Email</th>
                            <th>Số ĐT</th>
                            <th>Chức Năng</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderListUser()}
                    </tbody>
               </table>
               
              
           </div>
           {danhSachNguoiDung.taiKhoan}
           
        </div>
    )
}
