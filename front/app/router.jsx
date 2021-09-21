import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import home from '../pages/home';
import read from '../pages/menu/read';
import create from '../pages/menu/create';
import writeRead from '../pages/write/read';
import writeCreate from '../pages/write/create';
// import loadable from '@loadable/component';

function Router(){
  return <BrowserRouter>
      <Switch>
        <Route exact path='/' component={home}/>
        <Route exact path='/menu/read' component={read}/>
        <Route exact path='/menu/create' component={create}/>
        <Route exact path='/write/read' component={writeRead}/>
        <Route exact path='/write/create' component={writeCreate}/>
      </Switch>
  </BrowserRouter>
}
export default Router;