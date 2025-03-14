

import React from "react"
import Swal from 'sweetalert2'

import lasagna from "../images/lasagna.jpg"
import food2 from "../images/food2.webp"
import food3 from "../images/food3.jpg"


function Main(){
    const handleOrder=()=>{
        
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, order it!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Ordered!",
                text: "Your order has been placed.It will be delivered soon!",
                icon: "success"
              });
              console.log( "Order received")
            }
          });
    }
    
    return (
        <div>
            <section>
                <h2  style={{marginBottom: "50px", marginTop:"50px"}}>This Week's special</h2>

            </section>

            <section style={{backgroundColor: "white"}}>
                <article>
                    
                    <div className="card">
                        <img src={lasagna} style={{height:"", width: "100%"}}/>
                        <div className="container">
                            <h3>Lasagna<h3 style={{display:"inline", float:"right"}}>$10.00</h3></h3>
                            
                            <p>Another cornerstone of Italian cuisine, lasagne. This baked dish, typical of Bologna, is made up of layers of fresh pasta covered in béchamel sauce and the famous “ragù bolognese.”

                                A sauce composed of sautéed celery, onion, and carrot to which pieces of meat and concentrated tomato are added and is cooked slowly for a long time.</p>
                            <button type="button" onClick={handleOrder} style={{backgroundColor: "yellow", alignItems:"flex-end", borderRadius: "5px"}}>Order now</button>
                        </div>
                    </div>
                </article>
                <article>
                    
                    <div className="card">
                        <img src={food2} style={{width: "100%"}}/>
                        <div className="container">
                            <h3>Gnocchi<h3 style={{display:"inline", float:"right"}}>$12.00</h3></h3>
                            <p>After pasta, we had to follow with gnocchi, another typical Italian dish. Gnocchi are small rounds of potato dough. Each region has its own variation, but the most typical ingredients are cheese, spinach, eggs, and a variety of sauces.</p>
                            <button type="button" onClick={handleOrder} style={{backgroundColor: "yellow", alignItems:"flex-end", borderRadius: "5px"}}>Order now</button>
                        </div>
                    </div>
                </article>
                <article>
                    
                    <div className="card">
                        <img src={food3} style={{height:"", width: "100%"}}/>
                        <div className="container">
                            <h3>Panna Cotta<h3 style={{display:"inline", float:"right"}}>$15.00</h3></h3>
                            <p>This traditional Italian dessert translates to “cooked cream.” 

Fresh cream is thickened with gelatin and placed in a dome-shaped mold until it sets just enough to stand on its own. 

The custard-like dessert IS topped with fresh fruit or drizzled with chocolate or caramel sauce. 

Other variations may infuse the cream with coffee, vanilla, and other flavorings.</p>
                            <button type="button" onClick={handleOrder} style={{backgroundColor: "yellow", alignItems:"flex-end", borderRadius: "5px"}}>Order now</button>
                        </div>
                    </div>
                </article>

            </section>
        </div>
        
    )
        
}
export default Main