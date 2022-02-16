import './App.css';
import React from "react";
import { Button } from '../elements';

import {BrowserRouter, Route} from "react-router-dom";
import { ConnectedRouter } from "connected-react-router" 
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Main from "../pages/Main"
import Write from "../pages/Write"
// import Detail from '../pages/Detail';
import { history } from "../redux/configureStore"


function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
      <ConnectedRouter history={history}>
        <Route path="/signup" exact component={Signup}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/" exact component={Main}/>
        <Route path="/write" exact component={Write}/>
        <Route path="/write/:id" exact component={Write}/>
        {/* <Route path="/detail/:id" exact component={Detail}/> */}
      </ConnectedRouter>
      </BrowserRouter>

    </React.Fragment>
  );
}

export default App;