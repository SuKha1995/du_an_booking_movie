let initialState = {
    listUser: [],
    userUpdate: '',
    listFilm: [],
    filmUpdate: ''
}
const AdminReducer = (state = initialState , action) =>{
    switch(action.type){
        case 'LAY_DANH_SACH_NGUOI_DUNG':
            state.listUser = action.payload;
            return {...state};
        break;
        case 'CAP_NHAT_THONG_TIN_NGUOI_DUNG':
            state.userUpdate = action.payload;
            return {...state};
        break;
        case 'LAY_DANH_SACH_PHIM' :
            state.listFilm = action.payload;
            return {...state};
        case 'CAP_NHAT_THONG_TIN_PHIM':
            state.filmUpdate = action.payload;
            return {...state}
            break;
        default:
            return state;
    }
}
export default AdminReducer;