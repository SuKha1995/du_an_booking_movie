

import React, { Fragment, Component } from 'react';
import { Route } from 'react-router-dom';
import Header from '../../components/Home/Header'
import Footer from '../../components/Home/Footer';
const HomeLayout = (props) => {
    return (
        <Fragment>
          
                    <Header/>
                   
                        {props.children}
                    <Footer/>
                   
                    
               
        </Fragment>
    )
}
export const HomeTemplate = (props) => (
    <Route path={props.path} {...props.exact} render={
        (propsComponent) => (
            <HomeLayout>
                <props.component {...propsComponent} />
            </HomeLayout>
        )
    } />
)