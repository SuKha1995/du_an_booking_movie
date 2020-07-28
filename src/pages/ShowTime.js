import React, {useState, useEffect, Fragment } from 'react'
import { qlPhimService } from '../service/quanLiPhimService';
import { userLogin } from '../settings/config';


export default function ShowTime(props) {

    let[lichChieuPhim,setLichChieuPhim] = useState({});
    let [thongTinLichChieu,setThongTinlichChieu] = useState({thongTinPhim:{},danhSachGhe:[]});
    let [danhSachGheDangDat,setDanhSachGheDangDat] = useState([]);
    



    useEffect(()=>{
        let {maLichChieu} = props.match.params;
        console.log(maLichChieu)
        qlPhimService.layThongTinphongVe(maLichChieu).then((res=>{
            console.log(res.data)
           setThongTinlichChieu({
            danhSachGhe:res.data.danhSachGhe,
            thongTinPhim: res.data.thongTinPhim
           })
            
        })).catch((errors =>{
           console.log(errors.response.data)
        }))
    },[]);
    



    const renderThongTinPhim=()=>{
        let {thongTinPhim,danhSachGhe} = thongTinLichChieu;
        return (<div className="container">
            <h3>
                {danhSachGheDangDat?.reduce((tongTien,gheDangDat,index) => {
                    return tongTien += gheDangDat.giaVe;
                },0).toLocaleString()}
            </h3>
            <hr/>
            <div className="thongTinPhim">
                <h3>
                    <p>{thongTinPhim?.tenPhim}</p>
                    <p>{thongTinPhim?.tenCumRap}</p>
                    <p>Giờ Chiếu: {thongTinPhim.ngayChieu} - {thongTinPhim.gioChieu}</p>
                </h3>
            </div>
            <hr/>
            {danhSachGheDangDat.map((gheDangDat,index)=>{
                return <span style={{fontSize : 17, color : 'green'}} >G-{gheDangDat.tenGhe} , </span>
            })}
            <hr/>
            <button className='btn btn-success' onClick={()=> datVe()}>
                Đặt Vé
            </button>
        </div>)
    }
    const datVe = () =>{
        let taiKhoanNguoiDung = JSON.parse(localStorage.getItem(userLogin)).taiKhoan;
        //tài khoản mặt định
    //    let taiKhoanNguoiDung = "123@admin";
        let thongTinDatVe = {
            "maLichChieu": props.match.params.maLichChieu,
            "danhSachVe":danhSachGheDangDat,
            "taiKhoanNguoiDung": taiKhoanNguoiDung
        }
        qlPhimService.datVe(thongTinDatVe).then(res=>{
            console.log(res.data)
        }).catch(errors=>{
            console.log(errors.response.data)
        })
    }

 
    const renderDanhSachGhe = ()=>{
        return thongTinLichChieu.danhSachGhe?.map((ghe,index)=>{
            return <Fragment key={index}>
                 {renderGhe(ghe)}

                 {(index+1)%16 === 0 ? <br/> : ''}
            </Fragment>
        })
    }

    const renderGhe = (ghe)=>{
        let classGheVip = '';
        if(ghe.loaiGhe === "Vip"){
            classGheVip = "gheVip";
        }
        if(ghe.daDat){
            return <button className= {`ghe gheDaDat ${classGheVip}`} disabled >X</button>
        }
        //thay vì rebder ra ghe thường thì render ra ghế đã có người đặt chưa
        let classGheDangDat = ''
        let index =  danhSachGheDangDat.findIndex(gheDangDat =>gheDangDat.stt === ghe.stt);
        if(index !== -1){
            classGheDangDat = "gheDangDat"
        }
        return <button className={`ghe ${classGheVip} ${classGheDangDat}`} onClick={() =>{chonGhe(ghe)}}>{ghe.stt}</button>
    }

    const chonGhe = (ghe) =>{
        let index = danhSachGheDangDat.findIndex(gheDangDat => gheDangDat.stt === ghe.stt);
        if(index !== -1){
            danhSachGheDangDat.splice(index,1);
        }
        else{
            danhSachGheDangDat.push(ghe)
        }
        setDanhSachGheDangDat([...danhSachGheDangDat])
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-8">
                    {/* {danhsachghe} */}
                    <div className="trapezoid mt-5">
                       
                         
                    </div>
                    <div className="mt-5">{renderDanhSachGhe()}</div>
                    
                </div>
                <div className="col-4">
                    {/* {thong tin phim} */}
                    <div className="">Tổng Tiền</div>
                    {renderThongTinPhim()}
                </div>
            </div>
        </div>
    )
}
