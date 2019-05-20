import React from 'react';
import Welcome from './components/welcome/Welcome';
import Login from './components/authentication/Login';
import Admin from './components/admin/Admin';
import { Switch, Route } from 'react-router-dom';
import NewProduct from './components/admin/product/NewProduct';
import RemoveProduct from './components/admin/product/RemoveProduct';
import ToAccept from './components/admin/product/ToAccept';
import ListClient from './components/admin/client/ListClient';
import ListProvider from './components/admin/provider/ListProvider';

function App() {
  return (
    <div className="App">
    <Switch>
        <Route exact path="/" component={ Welcome }/>
        <Route path="/login" component={ Login } />
        <Route path="/new_product" component={ NewProduct } />
        <Route path="/remove_product" component={ RemoveProduct } />
        <Route path="/clients" component={ ListClient } />
        <Route path="/providers" component={ ListProvider } />
        <Route path="/to_accept" component={ ToAccept } />
      </Switch>
    </div>
  );
}

export default App;
