import { adminService } from "../../service/AdminService";
import { getListUser, updateUser } from "../type/adminType";
import { UserService } from "../../service/userService";



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