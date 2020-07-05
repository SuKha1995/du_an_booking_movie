// import React, { Component } from 'react';
// import {Fragment} from 'react';
// import {Layout} from 'antd';
// import {Route} from 'react-router-dom'
// const {Header,Footer,Sider,Content}= Layout;


// const HomeLayout = (props) => {
    
//         return (
//             <Fragment>
//                 <Layout>
//                     <Header>Header</Header>
//                     <Component>
//                         {props.children}
//                     </Component>
//                     <Footer>Footer</Footer>
//                 </Layout>
//             </Fragment>
//         )
//     }

// export const HomeTemplate = (props) => (
//     <Route path={props.path} {...props.exact} render={
//         (propsComponent) => (
//             <HomeLayout>
//                 {/* <props.component {...propsComponent} /> */}
//                 22
//             </HomeLayout>
//         )
//     } />
// )

import React, { Fragment, Component } from 'react';
import { Route } from 'react-router-dom';
import Header from '../../components/Header'
import Footer from '../../components/Footer';
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