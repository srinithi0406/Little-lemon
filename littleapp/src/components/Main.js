
import resta from "../images/resta.jpg"
import React from "react"
import {Link} from "react-router-dom";
import lasagna from "../images/lasagna.jpg"
import food2 from "../images/food2.webp"
import food3 from "../images/food3.jpg"

function Main(){
    return(
        <div >
            
            <section id="sec1" style={{backgroundColor: "GRAY", color:"white"}}>
                <article className="promo">
                    <h2 style={{color:"yellow", fontSize:"30px"}}>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p style={{fontSize: "20px"}}>A family-owned Mediterranean restaurant, focused on traditional recipes 
                        served with a modern twist. </p>
                        <a href="./BookingPage.js"><button type="button" aria-label="On Click" style={{backgroundColor:"yellow", borderRadius:"5px", fontSize:"20px"}}>Reserve a table</button></a>
                    <img src={resta} alt="restaurant" style={{alignItems:"flex-end"}}/>
                </article>

            </section>

            <section>
                <h2  style={{marginBottom: "50px", marginTop:"50px"}}>This Week's special</h2>

            </section>

            <section style={{backgroundColor: "white"}}>
                <article>
                    
                    <div className="card">
                        <img src={lasagna} style={{height:"325px", width: "100%"}}/>
                        <div className="container">
                            <h3>Lasagna</h3>
                            <p>Another cornerstone of Italian cuisine, lasagne. This baked dish, typical of Bologna, is made up of layers of fresh pasta covered in béchamel sauce and the famous “ragù bolognese.”

                                A sauce composed of sautéed celery, onion, and carrot to which pieces of meat and concentrated tomato are added and is cooked slowly for a long time.</p>
                            <button type="button" style={{backgroundColor: "skyblue", alignItems:"flex-end", borderRadius: "5px"}}>Order now</button>
                        </div>
                    </div>
                </article>
                <article>
                    
                    <div className="card">
                        <img src={food2} style={{width: "100%"}}/>
                        <div className="container">
                            <h3>Gnocchi</h3>
                            <p>After pasta, we had to follow with gnocchi, another typical Italian dish. Gnocchi are small rounds of potato dough. Each region has its own variation, but the most typical ingredients are cheese, spinach, eggs, and a variety of sauces.</p>
                            <button type="button" style={{backgroundColor: "skyblue", alignItems:"flex-end", borderRadius: "5px"}}>Order now</button>
                        </div>
                    </div>
                </article>
                <article>
                    
                    <div className="card">
                        <img src={food3} style={{height:"325px", width: "100%"}}/>
                        <div className="container">
                            <h3>Panna Cotta</h3>
                            <p>This traditional Italian dessert translates to “cooked cream.” 

Fresh cream is thickened with gelatin and placed in a dome-shaped mold until it sets just enough to stand on its own. 

The custard-like dessert IS topped with fresh fruit or drizzled with chocolate or caramel sauce. 

Other variations may infuse the cream with coffee, vanilla, and other flavorings.</p>
                            <button type="button" style={{backgroundColor: "skyblue", alignItems:"flex-end", borderRadius: "5px"}}>Order now</button>
                        </div>
                    </div>
                </article>

            </section>
        </div>
        
    )
        
}
export default Main