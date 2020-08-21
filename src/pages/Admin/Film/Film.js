import React , {useEffect} from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { useDispatch, useSelector, } from 'react-redux'
import { getListFilmAction, adminUpdateFilmAction } from '../../../redux/actions/adminAction'
import { UserService } from '../../../service/userService';
import { adminService } from '../../../service/AdminService';
// import { adminService } from '../../../service/AdminService'
export default function Film() {
    const dispatch = useDispatch();
    const history = useHistory()
    let danhSachPhim = useSelector(state => state.admin.listFilm)

     const renderDanhSachPhim = () =>{
         return danhSachPhim?.map((phim,index) =>{
            return <tr>
            <td style={{width:100}}>{phim.maPhim}</td>
            <td style={{width:150}}>{phim.tenPhim}</td>
            <td><img src={phim.hinhAnh} style={{width:75 , height:100}}/></td>
            <td style={{width:300}}>{phim.moTa}</td>
            <td>{phim.maNhom}</td>
            <td>{phim.ngayKhoiChieu}</td>
            <td>
                <button className="btn btn-success mr-2" onClick={() => updateFilm(phim)}>Sửa</button>
                <button className="btn btn-danger" onClick={() => deleteFilm(phim.maPhim) }>Xóa</button>
            </td>
        </tr>
         })
            
     }
     const updateFilm = (phim) =>{
         dispatch(adminUpdateFilmAction(phim));
         history.push('/updateFilm')
     }
     const  deleteFilm = (maPhim) =>{
         console.log('maphim',maPhim)
         adminService.DeleteFilm(maPhim).then(res =>{
            dispatch(getListFilmAction())

         }).catch(err =>{
             console.log(err)
            
         })
         
     }

     useEffect(() => {
         
        dispatch(getListFilmAction())
         
     }, [])
    return (
        <div>
            <button className="btn btn-success my-3">
            <NavLink  to="/addFilm" style={{color:'white'}}>Thêm Phim</NavLink>
            </button>
            <div>
                <table className="table table-dark">
                    <thead>
                        <tr>
                           
                            <th>Mã phim</th>
                            <th>Tên phim</th>
                            <th>Hình ảnh</th>
                            <th>Mô tả</th>
                            <th>Mã nhóm</th>
                            <th>Ngày khởi chiếu</th>
                            <th>Chức năng</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderDanhSachPhim()}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
