import "./Navbar.css";
import { faKickstarterK } from "@fortawesome/free-brands-svg-icons";
import {faHouse,faAddressBook,faMapPin,faBars,faXmark} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
function Navbar() {

  return (
    <>
      <nav className="navbar">
          <Link to="/" className="HomeButton">
            HOME
            <FontAwesomeIcon className="HomeIcon" icon={faHouse} size="lg" />
          </Link>
          <Link to="/contacts" className="ContactsButton">
            CONTACTS <FontAwesomeIcon icon={faAddressBook} />
          </Link>
          <Link className="MenuButton">
            MENU <FontAwesomeIcon className="IconK" icon={faKickstarterK} />
          </Link>
          <Link className="locationButton">
            LOCATION <FontAwesomeIcon icon={faMapPin} bounce />
          </Link>
      </nav>
    </>
  );
}

export default Navbar;
