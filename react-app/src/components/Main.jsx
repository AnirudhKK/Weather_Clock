import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Clock from "./Clock";
import Login from "./Login";
import Register from "./Register"

const Main = () => {
  return (
    <Switch> 
      <Route exact path='/' component={Clock}></Route>
      <Route exact path='/login' component={Login}></Route>
      <Route exact path='/register' component={Register}></Route>
    </Switch>
  );
}

export default Main;