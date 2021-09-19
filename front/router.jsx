import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
// import loadable from '@loadable/component';
import Home from './pages/Home';
import Test from './pages/Test';

function Router(){
  return <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/test' component={Test}/>
    </Switch>
  </BrowserRouter>
}
export default Router;