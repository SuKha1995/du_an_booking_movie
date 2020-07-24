import { UserService } from "../../service/userService"
import {userAction} from '../type/userType'


export const LoginAction = (user) =>{
    return dispatch =>{
        UserService.Login(user).then(res =>{
            dispatch(userAction(res.data)); //dispatch action lên reducers
            localStorage.setItem('userLogin', JSON.stringify(res.data))
            // console.log(res.data)
        }).catch(err=>{
            console.log(err)
        })
    }
}