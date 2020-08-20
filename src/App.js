import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import AddUser from './pages/Admin/AddUser';
import Admin from './pages/Admin/Admin';
import AdminUpdateUser from './pages/Admin/AdminUpdateUser';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import MovieDetail from './pages/MovieDetail/MovieDetail';
import NotFound from './pages/NotFound';
import Regis from './pages/registration/Regis';
import ShowTime from './pages/ShowTime/ShowTime';
import User from './pages/User/User';
import UserEdit from './pages/UserUpdate/UserEdit';
import { userAction } from './redux/type/userType';
import { AdminTemplate } from './templates/AdminTemplate/AdminTemplate';
import { HomeTemplate } from './templates/HomeTemplate/HomeTemplate';
import { UserTemplate } from './templates/UserTemplate/UserTemplate';
import UpdateFilm from './pages/Admin/Film/UpdateFilm';
import AddFilm from './pages/Admin/Film/AddFilm';

 class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {/* <HomeTemplate exact path="/" component={Home}/> */}
          <AdminTemplate exact path="/admin" component={Admin}/>
          <AdminTemplate exact path="/addUser" component={AddUser}/>
          <AdminTemplate exact path="/updateUser" component={AdminUpdateUser}/>
          <AdminTemplate exact path="/addFilm" component={AddFilm} />
          <AdminTemplate exact path="/updateFilm" component={UpdateFilm}  />
          <HomeTemplate exact path="/moviedetail/:maPhim" component={MovieDetail}/>
          <HomeTemplate exact path="/showtime/:maLichChieu" component={ShowTime}/>
          <HomeTemplate exact path="/home" component={Home}/>
          <UserTemplate exact path="/login" component={Login}/>
          <UserTemplate  exact path="/regis" component={Regis}/>
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
