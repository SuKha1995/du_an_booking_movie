import { UserService } from "../../service/userService"
import {userAction, checkLogin} from '../type/userType'
import {useHistory,NavLink} from 'react-router-dom'


export const LoginAction = (user) =>{
    return dispatch =>{
        UserService.Login(user).then(res =>{
            dispatch(userAction(res.data)); //dispatch action lưu dữ liệu lên reducers
            localStorage.setItem('userLogin', JSON.stringify(res.data)) // lưu dưới local
            // 
            dispatch(checkLogin(true))
            
        }).catch(err=>{
            console.log(err) 
            alert('Tài khoản hoặc Mật khẩu không đúng')
        })
        
    }
}