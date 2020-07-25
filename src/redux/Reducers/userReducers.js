

let initialState ={
    thongTinDangNhap: null,
    checkLogin: false
}
const userReducers = (state = initialState, action)=>{
    switch(action.type){
        case 'TAI_KHOAN_DANG_NHAP':
            state.thongTinDangNhap = action.payload;
            console.log('thongTinDangNhap', state.thongTinDangNhap)
            return {...state};
        break;
        case 'KIEM_TRA_DANG_NHAP':
            state.checkLogin =action.payload
            return {...state}
        default:
            return state;
    }
}
export default userReducers;