import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import Index from './components/Index';
import Category from './components/Category';
import Food from './components/Food';
import Orders from './components/Orders';
import Users from './components/Users';


const Routes = (props) => {
  return (
    <Fragment>
      <Switch>
        <Route path="/" exact component={Index} ></Route>
        <Route path="/category" component={Category}></Route>
        <Route path="/food" component={Food}></Route>
        <Route path="/Orders" component={Orders}></Route>
        <Route path="/users" component={Users}></Route>
      </Switch>
    </Fragment>
   );
}

export default Routes;