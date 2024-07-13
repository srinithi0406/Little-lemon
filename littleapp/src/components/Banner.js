import React from "react"
import { useNavigate, Link } from 'react-router-dom';
import resta from "../images/resta.jpg"

function Banner(){
    const navigate = useNavigate();

    const handleClick = () => {  
        navigate('/book');
        };

    return(
        <div >
            
            <section id="sec1" style={{backgroundColor: "GRAY", color:"white"}}>
                <article className="promo">
                    <h2 style={{color:"yellow", fontSize:"30px"}}>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p style={{fontSize: "20px"}}>A family-owned Mediterranean restaurant, focused on traditional recipes <br/>served with a modern twist. </p>
                    <Link to="/book"><button type="button" onClick={handleClick} aria-label="On Click" style={{backgroundColor:"yellow", borderRadius:"5px", fontSize:"20px"}}>Reserve a table</button></Link>
                    <img src={resta} alt="restaurant" style={{alignItems:"flex-end"}}/>
                </article>

            </section>
        </div>
        )
}

export default Banner;