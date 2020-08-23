import React, {useState , useEffect} from 'react'
import {useDispatch , useSelector} from 'react-redux'
import { adminService } from '../../../service/AdminService';
import {useHistory} from 'react-router-dom'

export default function UpdateFilm() {

    let thongTinPhimCapNhat = useSelector(state => state.admin.filmUpdate);

    const history = useHistory()
    let [thongTinPhim,setThongTinPhim] = useState({
        values:{
        hinhAnh: {},
        maPhim: '',
        tenPhim: '',
        biDanh: '',
        trailer:'',
        moTa:'',
        maNhom: 'GP05',
        ngayKhoiChieu: '',
        danhGia: ''
        }
    ,
         errors:{
            hinhAnh: {},
        maPhim: '',
        tenPhim: '',
        biDanh: '',
        trailer:'',
        moTa:'',
        maNhom: '',
        ngayKhoiChieu: '',
        danhGia: ''
         }

        }
    );
    useEffect(() => {
       setThongTinPhim({...thongTinPhim,values:thongTinPhimCapNhat})
    }, [])
        
    // console.log('ttp',thongTinPhimCapNhat)
    const handleChange = (e) => {
        let target = e.target;
        let errorMessege = '';

        if(target.value.trim() === ''){
            errorMessege = "* Vui lòng điền thông tin" //kiem tra loi rong cho the input
        };
        let newValues = ''
        let newError = ''
        if(target.name === 'hinhAnh'){
            newValues = {...thongTinPhim.values, hinhAnh: target.files[0]}
        }
        else{
            newValues = {...thongTinPhim.values, [target.name]:target.value}
            newError = {...thongTinPhim.errors, [target.name]:errorMessege}
            // console.log(newError)
        }
        console.log(thongTinPhim)
        setThongTinPhim({
            values:newValues,
            errors:newError
        })
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        let form_data = new FormData();
        for (let key in thongTinPhim.values) {
            form_data.append(key, thongTinPhim.values[key]);
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
                        <input name="maPhim" value={thongTinPhim.values.maPhim}  className="form-control"  onChange={handleChange} onBlur={handleChange}/>
                        <p className="text-danger">{thongTinPhim.errors.maPhim}</p>
                    </div>
                    <div className="form-group">
                        <label>Tên phim</label>
                        <input name="tenPhim" value={thongTinPhim.values.tenPhim} className="form-control" onChange={handleChange} onBlur={handleChange}/>
                        <p className="text-danger">{thongTinPhim.errors.tenPhim}</p>
                    </div>
                    <div className="form-group">
                        <label>Bí danh</label>
                        <input name="biDanh" value={thongTinPhim.values.biDanh} className="form-control" onChange={handleChange} onBlur={handleChange}/>
                        <p className="text-danger">{thongTinPhim.errors.biDanh}</p>
                    </div>
                    <div className="form-group">
                        <label>Trailer</label>
                        <input name="trailer" value={thongTinPhim.values.trailer} className="form-control" onChange={handleChange} onBlur={handleChange}/>
                        <p className="text-danger">{thongTinPhim.errors.trailer}</p>
                    </div>
                    <div className="form-group">
                        <label>Hình ảnh</label>
                        <input type="file" name="hinhAnh" className="form-control" onChange={handleChange} />
                        
                    </div>
                    <div className="form-group">
                        <label>Mô tả</label>
                        <input name="moTa" value={thongTinPhim.values.moTa} className="form-control" onChange={handleChange} onBlur={handleChange}/>
                        <p className="text-danger">{thongTinPhim.errors.moTa}</p>
                    </div>
                    <div className="form-group">
                        <label>Mã nhóm</label>
                        <input name="maNhom" value={thongTinPhim.values.maNhom} value="GP05" className="form-control" onChange={handleChange} onBlur={handleChange}/>
                        <p className="text-danger">{thongTinPhim.errors.maNhom}</p>
                    </div>
                    <div className="form-group">
                        <label>Ngày khởi chiếu</label>
                        <input name="ngayKhoiChieu" value={thongTinPhim.values.ngayKhoiChieu}  className="form-control" onChange={handleChange} onBlur={handleChange}/>
                        <p className="text-danger">{thongTinPhim.errors.ngayKhoiChieu}</p>
                    </div>
                    <div className="form-group">
                        <label>Đánh giá</label>
                        <input name="danhGia" value={thongTinPhim.values.danhGia} className="form-control" onChange={handleChange} onBlur={handleChange}/>
                        <p className="text-danger">{thongTinPhim.errors.danhGia}</p>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-success">Submit</button>
                        </div>
                    

                </form>
            </div>
    )
}
