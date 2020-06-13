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
import { Layout, Menu, Breadcrumb } from 'antd';
import Header from '../../components/Header'
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;
const {  Content, Sider,  } = Layout;


const HomeLayout = (props) => {
    return (
        <Fragment>
           <Layout>
                    <Header/>
                    <Content>
                        {props.children}
                    </Content>
                    
                </Layout>
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