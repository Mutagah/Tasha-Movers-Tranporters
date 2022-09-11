import React from "react"
import "./Navbar.css"
import { NavLink } from "react-router-dom"
function Navbar(){
    return (
        <div className="Navbar">
        <h1 id="tasha_home">Tasha Movers & Transporters</h1>
        <div className="linkStyling">
             <NavLink to="/">Home</NavLink>
             <NavLink to="registertask">Register Task</NavLink>
             <NavLink to="assignvehicle">Assign Vehicle</NavLink>
             <NavLink to="viewtask">View Task</NavLink>
            </div>
    </div>
    )
}
export default Navbar