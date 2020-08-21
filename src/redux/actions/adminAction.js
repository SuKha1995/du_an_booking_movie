import { adminService } from "../../service/AdminService";
import { getListUser, updateUser, getListFilm, updateFilm } from "../type/adminType";
import { UserService } from "../../service/userService";
import { qlPhimService } from "../../service/quanLiPhimService";
import {
    createBrowserHistory,
    createHashHistory,
    createMemoryHistory
  } from 'history'


export const getListUserAction = () =>{
    return dispatch =>{
        adminService.ListUser().then(res => { // gọi api lấy danh sách nguoi dùng phân trang
            // setDanhSachNguoiDung(listItems.data)
            // console.log(listItems.data)
            dispatch(getListUser(res.data))
        }).catch(error => {
            console.log(error)
        });
    }
}
export const adminUpdateAction = (user) =>{
    return dispatch =>{
       dispatch(updateUser(user))
    }
}
export const getListFilmAction = () =>{
    return dispatch =>{
        qlPhimService.layDanhSachPhim().then(res =>{
            dispatch(getListFilm(res.data))
        })
    }
};

export const adminUpdateFilmAction = (phim) =>{
    return dispatch =>{
        dispatch(updateFilm(phim))
    }
};

// export const addFilmAction = (form_data) =>{
//     return dispatch =>{
//         adminService.AddFilm(form_data).then(res =>{
//           alert('Thêm thành công');
//             history.push({ pathname: '/admin' })
//         }).catch(err =>{
//             console.log(err)
//         })
//     }
// }
