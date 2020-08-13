import React, { useState ,useEffect} from 'react'
import { useDispatch, useSelector, } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { adminService } from '../../service/AdminService'

export default function User() {
    let [danhSachNguoiDung,setDanhSachNguoiDung] = useState([]);
    let tendangnhap= ""
    const _handleSubmit = (values) => { //gọi api tìm người dùng
        // console.log(values)
        tendangnhap = values.taiKhoan
        // console.log('object',tendangnhap)
        adminService.UserSearch(tendangnhap).then(res => {
            console.log(res.data)
        }).catch(err => {
            console.log(err)
        })
    }
    const DeleteUser = (taiKhoan) =>{
        adminService.DeleteUser(taiKhoan).then(res =>{
            console.log(res.data)
            console.log('xóa thành công')
        }).catch(err =>{
            console.log(err)
        })
    }
    useEffect(() => {

        adminService.ListUser().then(listItems => { // gọi api lấy danh sách nguoi dùng phân trang
            setDanhSachNguoiDung(listItems.data)
            console.log(listItems.data)
        }).catch(error => {
            console.log(error)
        });

    }, []);
    
     const renderListUser = () =>{
         return danhSachNguoiDung?.map((user,index)=>{
             return <tr>
                 {/* <td>{user.index}</td> */}
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
            <div>
                <NavLink to="/addUser">Thêm Người Dùng</NavLink>

            </div>
            <Formik
                initialValues={{
                    taiKhoan:""
                }}
                onSubmit={_handleSubmit}
                render={(formimProps) => (
                    <Form>
                        <div>
                            <label>Nhập Tên Tài Khoản Người Dùng</label>
                            <Field className="form-control"
                                name="taiKhoan"
                                type="text"
                                onChange={formimProps.handleChange}
                            />
                        </div>
                        <button className="btn btn-success" type="submit">Tìm</button>
                        
                    </Form>
                )}
                >
               
           </Formik>
           <div style={{ height: 600, overflowY: 'scroll', padding: 5, border: '1px solid #ccc' }}>
               <table className="table table-hover table-bordered">
                    <thead>
                        <tr>
                            {/* <th>STT</th> */}
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
           {/* <div>
                     <button onClick={() => changePage(1)}>1</button> 
                    <button onClick={() => changePage(2)}>2</button>
                    <button onClick={() => changePage(3)}>3</button> 
                    <button onClick={() => changePage(4)}>4</button>
                    <button onClick={() => changePage(5)}>5</button>
                    <button onClick={() => changePage(6)}>6</button>
                    <button onClick={() => changePage(7)}>7</button>
           </div> */}
           

        </div>
    )
}
