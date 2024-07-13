import React, {useState} from "react"
import { useNavigate } from 'react-router-dom';

function BookingForm(){

    const [date,setDate]=useState("");
    const [time,setTime]=useState("");
    const [guests,setGuests]=useState("");
    const [occasion,setOccasion]=useState("");
    
    const navigate = useNavigate();
    

    /*const handleChange = (e) => {
        setDate(e);
        props.dispatch(e);
    }*/
    
    const handleSumbit = (e) => {
        e.preventDefault();
        console.log("form submitted")
        console.log("Table reserved for",{date})
        console.log("at",{time})
        console.log({guests}, "person(s)")
        navigate('/confirmation');
        };
        
    return(
    <div style={{borderStyle:"solid", backgroundColor:""}}>
        <h2>Please fill the details below</h2>
    <form  style={{display: "grid", maxWidth: "200px", gap: "20px", marginBottom:"20px"}} onSubmit={handleSumbit}>
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date" value={date} onChange={(e) => setDate(e.target.value)} required/>
      <label htmlFor="res-time">Choose time</label>
     <select id="res-time " value={time} onChange={(e) => setTime(e.target.value)} required>
      <option>17:00</option>
      <option>18:00</option>
      <option>19:00</option>
      <option>20:00</option>
      <option>21:00</option>
      <option>22:00</option>
   </select>
   <label htmlFor="guests">Number of guests</label>
   <input type="number" placeholder="0" min="1" max="10" id="guests" value={guests} onChange={(e) => setGuests(e.target.value)} required/>
   <label htmlFor="occasion">Occasion</label>
   <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)} required>
      <option>Birthday</option>
      <option>Anniversary</option>
      <option>Casual</option>
   </select>
   <input type="submit" value="Make Your reservation"/>
</form>
</div>
    )
}

export default BookingForm;
