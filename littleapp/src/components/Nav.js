import React from "react"
import logo from "../images/logo1.png"
function Nav(){
    return(
        <nav>
            <img src={logo} alt="logo" style={{height:"100px", width:"200px"}}/>
            <div class="icon"></div>
            <div class="icon"></div>
            <div class="icon"></div>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Menu</a></li>
                <li><a href="">Reserve table</a></li>
                <li><a href="">Order online</a></li>
                <li><a href="">Login</a></li>
            </ul>
        </nav>

    )
}
export default Nav