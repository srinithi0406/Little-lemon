import React from "react"
function Footer(){
    return(
        <section id="footer" style={{backgroundColor:"black"}}>
        
        
    <div className="footer">
        <h3>Document Navigation</h3>
    <ul>
        <li>Home</li>
        <li>About</li>
        <li>Menu</li>
        <li>Reservations</li>
        <li>Order Online</li>
        <li>Login</li>
    </ul>
    </div>
    <div className="footer">
        <h3 style={{marginLeft:"20px"}}>Contact</h3>
    <ul>
        <li>Address - 7, Express Avenue, Italy</li>
        <li>Phone Number - 9080900809</li>
        <li>Email - littlelemon@gmail.com</li>
    </ul>
    </div>
    <div className="footer">
        <h3>Social Media Links</h3>
    <ul>
        <li>Youtube - The_Little_Lemon</li>
        <li>Facebook</li>
        <li>Instagram - @TheLittle_Lemon</li>
        <li>Twitter</li>
        <div style={{justifyContent:"flex-end"}} >
            <p style={{color:"white"}}>© copyright Little Lemon</p>
        </div>
    </ul>
    </div>
    </section>

        
    )
}
export default Footer 