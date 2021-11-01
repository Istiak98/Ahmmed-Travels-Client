import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import Navbar from "./components/Shared/Navbar/Navbar";
import Footer from "./components/Shared/Footer/Footer";
import AuthProvider from "./context/AuthProvider";
import Login from "./components/Shared/Login/Login";
import NotFound from "./components/Shared/NotFound/NotFound";
import About from "./components/Home/AboutUs/About";
import ContactUs from "./components/Home/Contact/ContactUs";
import PrivateRoute from './components/Shared/Login/PrivateRoute/PrivateRoute'
// import TourDetail from "./components/TourDetail/TourDetail";
import PlaceOrder from "./components/Home/PlaceOrder/PlaceOrder";
import MyOrders from "./components/Home/MyOrders/MyOrders";
import ManageOrders from './components/Home/ManageOrders/ManageOrders'
import AddTours from './components/Home/AddTours/AddTours'
function App() {
  return (
    
      <AuthProvider>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            
            <PrivateRoute path="/placeOrder/:tourId">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/contact">
              <ContactUs></ContactUs>
            </Route>
            
             <PrivateRoute exact path ="/myOrders">
             <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path="/managerOrders">
              <ManageOrders></ManageOrders>
            </PrivateRoute>
            <PrivateRoute path='/addTours'>
            <AddTours/>
            </PrivateRoute>
           
           
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    
  );
}

export default App;
