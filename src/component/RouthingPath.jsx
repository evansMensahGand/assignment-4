import React from 'react';
import Homepage from "./Homepage";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import { BrowserRouter,Switch,Route } from "react-router-dom";
import Nav from './Nav';

const RouthingPath = () => {
    return (
        <BrowserRouter>
            <Nav/>
            <Switch>
                <Route exact path="/" component={Homepage}/>
                <Route  path="/about" component={About}/>
                <Route  path="/contact" component={Contact}/>
                <Route  path="/signin" component={Signin}/>
                <Route  path="/signup" component={Signup}/>
            </Switch>
        
        </BrowserRouter>
 );
};

export default RouthingPath;
