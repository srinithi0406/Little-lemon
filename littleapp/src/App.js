import React from 'react';
import './App.css';
import Nav from "./components/Nav"
import Main from "./components/Main"
import Footer from "./components/Footer"
import Header from "./components/Header"
import BookingForm from './components/BookingForm';

function App() {
  return (
    <div>
      <Nav/>
      <Main/>
      <BookingForm/>
      <Footer/>
    </div>
    
  );
}

export default App;
