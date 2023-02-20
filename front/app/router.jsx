import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";

// reaftor: 페이지들이 묶여서 import 되지 않은 점 개선하기
import Home from "pages/Home";
import read from "pages/menu/read";
import create from "pages/menu/create";
import writeRead from "pages/write/read";
import writeCreate from "pages/write/create";
import WriteSetting from "pages/write/setting";
// import loadable from "@loadable/component";

function Router(){
  return <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        {/* <Route path="/menu/read" component={read}/> */}
        {/* <Route path="/menu/create" component={create}/> */}
        <Route path="/write/read" component={writeRead}/>
        <Route path="/write/create/:page" component={writeCreate}/>
        <Route path="/write/setting" component={WriteSetting}/>
      </Switch>
  </BrowserRouter>
}
export default Router;