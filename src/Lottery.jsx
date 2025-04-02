import { useState } from "react";

import { genticket,sum } from "./helper";
import  Ticket from "./Ticket"

export default function Lottery({n=3,winCondition}){

    let[ticket,setTicket]=useState(genticket(n));
    let iswinning=winCondition(ticket);
    let buyTicket=()=>{
        setTicket(genticket(n));
    }
    return(
    <><div >
        <h1>Lottery Game!</h1>
        <Ticket ticket={ticket}/>
        <button onClick={buyTicket}>Buy New Ticket</button>
        <br></br>
        <h3>{iswinning && "Congratulations,you won!"}</h3>
        </div></>
        
        );
}