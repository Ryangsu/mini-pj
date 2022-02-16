import './App.css';
import React from "react";
import { Button } from '../elements';

import {BrowserRouter, Route} from "react-router-dom";
import { ConnectedRouter } from "connected-react-router" 
import { history } from "../redux/configureStore"

import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Main from "../pages/Main"
import Write from "../pages/Write"
import Detail from '../pages/Detail';


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
<<<<<<< HEAD
        <Route path="/detail" exact component={Detail}/>
=======
        {/* <Route path="/detail/:id" exact component={Detail}/> */}
>>>>>>> 9d5fd5c3d95fa2c658ac0673c554350f9ec10d9c
      </ConnectedRouter>
      </BrowserRouter>

    </React.Fragment>
  );
}

export default App;