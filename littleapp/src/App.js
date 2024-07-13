import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from "./components/Nav"
import Main from "./components/Main"
import Footer from "./components/Footer"
import Banner from "./components/Banner"
import Header from "./components/Header"
import Testimonial from "./components/Testimonial"
import BookingForm from './components/BookingForm';
import ConfirmedBooking from './components/ConfirmedBooking';

function App() {
  return (
    
    <div>
      <Nav/>
      <Header />
      <Main/>
      <Testimonial />
      <Footer/>
    </div>
    
  );
}

export default App;
