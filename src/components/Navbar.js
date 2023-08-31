import React, { useState } from "react";
import './Navbar.css'
import { faKickstarterK } from "@fortawesome/free-brands-svg-icons"; 
import { faHouse, faAddressBook, faMapPin } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <button className="HomeButton">HOME<FontAwesomeIcon className="HomeIcon" icon={faHouse} size="lg"/></button>
          <button className="ContactsButton">CONTACTS <FontAwesomeIcon icon={faAddressBook} /></button>
          <button className="MenuButton">MENU<FontAwesomeIcon className="IconK" icon={faKickstarterK} /></button>
          <button className="locationButton">LOCATION <FontAwesomeIcon icon={faMapPin} bounce /></button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
