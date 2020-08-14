let initialState = {
    listUser: []
}
const AdminReducer = (state = initialState , action) =>{
    switch(action.type){
        case 'LAY_DANH_SACH_NGUOI_DUNG':
            state.listUser = action.payload;
            return {...state}
            
        default:
            return state;
    }
}
export default AdminReducer;