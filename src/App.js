import React, { Component } from 'react'
import { BrowserRouter ,Redirect} from 'react-router-dom';
import {Button} from 'antd';
import { AdminTemplate } from './templates/AdminTemplate/AdminTemplate'
import Admin from './pages/Admin';
import {HomeTemplate} from './templates/HomeTemplate/HomeTemplate'
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';
import ShowTime from './pages/ShowTime';
import Login from './pages/Login';
import Regis from './pages/Regis';
import "~slick-carousel/slick/slick.css"; 
import "~slick-carousel/slick/slick-theme.css";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <AdminTemplate exact path="/admin" component={Admin}/>
        <HomeTemplate exact path="/moviedetail/:maPhim" component={MovieDetail}/>
        <HomeTemplate exact path="/showtime/:maLichChieu" component={ShowTime}/>
        <HomeTemplate exact path="/home" component={Home}/>
        <HomeTemplate exact path="/login" component={Login}/>
        {/* <HomeTemplate  exact path="/regis" component={Regis}/> */}
        <Redirect to='/home'/>
      </BrowserRouter>
    )
  }
}

