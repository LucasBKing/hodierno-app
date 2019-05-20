import React, { Fragment } from 'react';
import NavbarAdmin from './NavbarAdmin';
import { Route } from 'react-router-dom';
import NewProduct from './product/NewProduct';
import RemoveProduct from './product/RemoveProduct';
import ListClient from './client/ListClient';
import ListProvider from './provider/ListProvider';
import ToAccept from './product/ToAccept';

const Admin = () => {
    return (
            <Fragment>
                <NavbarAdmin />
            
                <Route path="/new_product" component={NewProduct} />
                <Route path="/remove_product" component={RemoveProduct} />
                <Route path="/clients" component={ListClient} />
                <Route path="/providers" component={ListProvider} />
                <Route path="/to_accept" component={ToAccept} />
                     
            </Fragment>
        );
}

export default Admin;