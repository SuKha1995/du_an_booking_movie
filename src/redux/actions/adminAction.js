import { adminService } from "../../service/AdminService";
import { getListUser } from "../type/adminType";



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