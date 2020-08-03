import React, { Component } from 'react'
import {connect} from 'react-redux'
import { BrowserRouter ,Redirect, Switch, Route} from 'react-router-dom';
import { AdminTemplate } from './templates/AdminTemplate/AdminTemplate'
import Admin from './pages/Admin';
import {HomeTemplate} from './templates/HomeTemplate/HomeTemplate'
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';
import ShowTime from './pages/ShowTime';
import Login from './pages/Login';
import Regis from './pages/Regis';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import NotFound from './pages/NotFound';
import { userAction } from './redux/type/userType';
import User from './pages/User';
import UserEdit from './pages/UserEdit';
import { UserTemplate } from './templates/UserTemplate/UserTemplate';

 class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {/* <HomeTemplate exact path="/" component={Home}/> */}
          <AdminTemplate exact path="/admin" component={Admin}/>
          <HomeTemplate exact path="/moviedetail/:maPhim" component={MovieDetail}/>
          <HomeTemplate exact path="/showtime/:maLichChieu" component={ShowTime}/>
          <HomeTemplate exact path="/home" component={Home}/>
          <HomeTemplate exact path="/login" component={Login}/>
          <HomeTemplate  exact path="/regis" component={Regis}/>
          <UserTemplate exact path="/user" component={User}/>
          <UserTemplate exact path="/userEdit" component={UserEdit}/>
          <HomeTemplate exact path="/" component={Home}/>
          <Route component={NotFound}/>
        </Switch>
      </BrowserRouter>
    )
  }
  layThongTinDangNhap =() =>{
    const isLogin  = localStorage.getItem('userLogin')
    if(isLogin){
        this.props.dispatch(userAction(JSON.parse(isLogin)))
    }
  }
  componentDidMount(){
    this.layThongTinDangNhap()
  }
}
export default connect()(App)
