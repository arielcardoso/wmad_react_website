import React, { useRef } from 'react';
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

import LoginModal from './components/LoginModal';
import ContactModal from './components/ContactModal';

const App = () => {
  const childRefLogin = useRef();
  const childRefContact = useRef();

  const openContactModal = (e) => {
    e.preventDefault();
    childRefContact.current.handleContactModal()
  };
  const openLoginModal = (e) => {
    e.preventDefault();
    childRefLogin.current.handleLoginModal()
  };

  return (
    <Router>
      <Header openLoginModal={openLoginModal} />
      <Switch>
        <Route exact={true} path="/" component={Home} ></Route>
        <Route path="/about" >
          <About openContactModal={openContactModal} />  
        </Route>
        <Route path="/places" component={Places} />
        <Route path="/restaurants" component={Restaurants} />
        <Route path="/restaurant/:id" component={RestaurantDetails} />
        <Route path="/hotels" component={Hotels} />
        <Route path="/hotel/:id" component={HotelDetails} />
      </Switch>
      <Footer/>

      <LoginModal ref={childRefLogin} />
      <ContactModal ref={childRefContact} />
    </Router>
  );
}

export default App;