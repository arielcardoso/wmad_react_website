import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Places from './pages/Places';
import Restaurants from './pages/Restaurants';
import RestaurantDetails from './pages/RestaurantDetails';
import Hotels from './pages/Hotels';
import HotelDetails from './pages/HotelDetails';

import './assets/styles/style.scss';

ReactDOM.render(
    <Router>
      <Header/>
      <Switch>
        <Route exact={true} path="/" component={Home} ></Route>
        <Route path="/about" component={About} />
        <Route path="/places" component={Places} />
        <Route path="/restaurants" component={Restaurants} />
        <Route path="/restaurant/" component={RestaurantDetails} />
        <Route path="/hotels" component={Hotels} />
        <Route path="/hotel/" component={HotelDetails} />
      </Switch>
      <Footer/>
    </Router>,
  document.getElementById('root')
);
