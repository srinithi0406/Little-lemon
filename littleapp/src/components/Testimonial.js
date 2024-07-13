import React from "react"
import user from "../images/user.webp"
import star from "../images/star.png"


function Testimonial(){
    return(
    <section className="testi">
    <div>
        <h2>Customer Testimonial</h2>
        
        <img src={user} alt="profile" style={{justifyContent:"center", height:"250px", width:"300px", float:"left"}} />
        <h3>Tilly</h3>
        <p style={{fontSize:"20px"}}>"We are using the Little Lemon online table booking system in Italy. We are loving it and we will definitely recommend it to everyone. It doesn’t require too much effort. It’s great to use and easy to manage"</p>
        <img src={star} alt="stars" style={{borderRadius:"20PX", height:"60px"}}/>

    </div>
    </section>
    )
}

export default Testimonial;