import "./ContactsPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

function ContactsPage() {
  return (
    <div className="contactsContainer">
      <div className="btn__container">
        <Link href="#" className="btn">
          <FontAwesomeIcon className="icons" icon={faInstagram} />
          <span>instagram</span>
        </Link>
        <Link href="#" className="btn-f">
          <FontAwesomeIcon className="icons" icon={faFacebook} />
          <span>facebook</span>
        </Link>
      </div>
    </div>
  );
}

export default ContactsPage;
