import React , {Component, Fragment} from 'react'
import {Route} from 'react-router-dom'
import HeaderUser from '../../components/User/HeaderUser'
import Footer from '../../components/Home/Footer'

 const UserLayout = (props) =>{
    return (
        <Fragment>
            <HeaderUser/>
                {props.children}
            

        </Fragment>
    )
}
export const UserTemplate = (props) =>(
    <Route path={props.path} {...props.exact} render= {
        (propsComponent) =>(
            <UserLayout>
                <props.component {...propsComponent}/>
            </UserLayout>
        )
    }/>
)
