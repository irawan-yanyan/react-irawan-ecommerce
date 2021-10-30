import React, { Component} from 'react';
import {Switch, Route} from 'react-router-dom';
//import {BrowserRouter as Router} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Productlist from './components/Productlist';
import Detail from './components/Detail';
import Cart from './components/Cart';
import Default from './components/Default';
import Modal from './components/Modal';
//import React from 'react';

function App() {
  return (
            <React.Fragment>
                <Navbar/>
                <Switch>
                    <Route exact path="/" component={Productlist}></Route>
                    <Route path="/details" component={Detail}></Route>
                    <Route path="/cart" component={Cart}></Route>
                    <Route component={Default}></Route>
                </Switch>
               
            </React.Fragment>
    
  );
}

export default App;
