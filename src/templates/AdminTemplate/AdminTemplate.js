
import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import './AdminTemplate.scss';
import Header from '../../components/Admin/Header';
const AdminLayout = (props) => {
    return (
        <Fragment>
            <Header/>
            {props.children}
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