import React from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Banner from "./Banner"
import BookingForm from './BookingForm';
import ConfirmedBooking from './ConfirmedBooking';

function Header(){
    return(
        <Router>
        <Routes>
          <Route path="/" element={<Banner />} />
          <Route path="/book" element={<BookingForm />} />
          <Route path="/confirmation" element={<ConfirmedBooking />} />
        </Routes>
        </Router>
    )
}

export default Header