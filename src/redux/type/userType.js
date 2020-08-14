export const userAction = (user) =>{
    return {
        type: 'TAI_KHOAN_DANG_NHAP',
         payload: user
    }
    
}
export const checkLogin =(value)=>{
    return {
        type: 'KIEM_TRA_DANG_NHAP',
        payload: value
    }
}