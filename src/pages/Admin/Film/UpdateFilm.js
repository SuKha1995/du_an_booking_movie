import React, {useState , useEffect} from 'react'
import {useDispatch , useSelector} from 'react-redux'
import { addFilmAction } from '../../../redux/actions/adminAction';
import { adminService } from '../../../service/AdminService';
import {useHistory} from 'react-router-dom'

export default function UpdateFilm() {

    let thongTinPhimCapNhat = useSelector(state => state.admin.filmUpdate);

    const history = useHistory()
    let [thongTinPhim,setThongTinPhim] = useState({hinhAnh: {},
        maPhim: '',
        tenPhim: '',
        biDanh: '',
        trailer:'',
        moTa:'',
        maNhom: 'GP05',
        ngayKhoiChieu: '',
        danhGia: ''
    });
        
    console.log('ttp',thongTinPhimCapNhat)
    const handleChange = (e) => {
        let target = e.target;
        if (target.name === 'hinhAnh') {
            setThongTinPhim({...thongTinPhim, hinhAnh: e.target.files[0] }, 
             
            console.log(thongTinPhim)
            );
        } else {
           setThongTinPhim({...thongTinPhim, [e.target.name]: e.target.value },
            
            console.log(thongTinPhim)
            );
        }
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        let form_data = new FormData();
        for (let key in thongTinPhim) {
            form_data.append(key, thongTinPhim[key]);
        };
        console.log('formData',form_data)
        adminService.UpdateFilm(form_data).then(res=>{
            alert('Thêm phim thành công')
            history.push('/admin')
        })

        
    }
    return (
        <div className="w-50 mx-auto">
                <form onSubmit={handleSubmit} >
                    <h3 className="text-center">
                        Cập nhật phim
                    </h3>

                    <div className="form-group">
                        <label>Mã phim</label>
                        <input name="maPhim" value={thongTinPhimCapNhat.maPhim}  className="form-control" required onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Tên phim</label>
                        <input name="tenPhim" value={thongTinPhimCapNhat.tenPhim} className="form-control" onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Bí danh</label>
                        <input name="biDanh" value={thongTinPhimCapNhat.biDanh} className="form-control" onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Trailer</label>
                        <input name="trailer" value={thongTinPhimCapNhat.trailer} className="form-control" onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Hình ảnh</label>
                        <input type="file" name="hinhAnh" className="form-control" onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Mô tả</label>
                        <input name="moTa" value={thongTinPhimCapNhat.moTa} className="form-control" onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Mã nhóm</label>
                        <input name="maNhom" value={thongTinPhimCapNhat.maNhom} value="GP05" className="form-control" onChange={handleChange}/>
                    </div>
                    <div className="form-group">
                        <label>Ngày khởi chiếu</label>
                        <input name="ngayKhoiChieu" value={thongTinPhimCapNhat.ngayKhoiChieu}  className="form-control" onChange={handleChange}/>
                    </div>
                    <div className="form-group">
                        <label>Đánh giá</label>
                        <input name="danhGia" value={thongTinPhimCapNhat.danhGia} className="form-control" onChange={handleChange} />
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-success">Submit</button>
                        </div>
                    

                </form>
            </div>
    )
}
