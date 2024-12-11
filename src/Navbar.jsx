import React, { useContext } from "react";
import MyContext from "./Context-Api/MyContext";

function Navbar() {
    
    const {UserDetails} = useContext(MyContext);
    return (
        <>

            <div className="navbar">

                <div className="logo-container">
                        <div className="logo-text">{UserDetails.name}</div>
                </div>

                <div className="nav-items">
                    <div><a href="#projects">Projects</a></div>
                    <div><a href="#skill">Skills</a></div>
                    <div><a href="#contactme">Contact Me</a></div>
                </div>

            </div>
        </>
    )
}

export default Navbar;