export const getListUser = (listUser) =>{
    return {
        type: 'LAY_DANH_SACH_NGUOI_DUNG',
         payload: listUser
    }
    
}
export const updateUser = (user) =>{
    return {
        type: 'CAP_NHAT_THONG_TIN_NGUOI_DUNG',
        payload: user
    }
}
export const getListFilm = (listFilm) =>{
    return {
        type: 'LAY_DANH_SACH_PHIM',
        payload: listFilm
    }
}

export const updateFilm = (phim) =>{
    return {
        type: 'CAP_NHAT_THONG_TIN_PHIM',
        payload: phim
    }
}