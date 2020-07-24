

let initialState ={
    thongTinDangNhap: null
}
const userReducers = (state = initialState, action)=>{
    switch(action.type){
        case 'TAI_KHOAN_DANG_NHAP':
            state.thongTinDangNhap = action.payload;
            console.log('thongTinDangNhap', state.thongTinDangNhap)
            return {...state};
           
        default:
            return state;
    }
}
export default userReducers;