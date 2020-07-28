import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import './AdminTemplate.scss';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;


const AdminLayout = (props) => {
    return (
        <Fragment>
            
        </Fragment>
    )
}
export const AdminTemplate = (props) => (
    <Route path={props.path} {...props.exact} render={
        (propsComponent) => (
            <AdminLayout>
                <props.component {...propsComponent} />
            </AdminLayout>
        )
    } />
)