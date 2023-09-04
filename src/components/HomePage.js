import "./HomePage.css";
import React, { useState } from "react";
import img1 from "./img/IMG_0300.jpg";
import img2 from "./img/post388.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleLeft, faCircleRight } from "@fortawesome/free-solid-svg-icons";
import ph1 from "./KrisImages/160523406_2238640739613483_2273484403457168903_n.jpg";
import ph2 from "./KrisImages/161034382_2238640652946825_1536995414065377818_n.jpg";
import ph3 from "./KrisImages/303990024_586104219884241_2043781230069901141_n (1).jpg";
import ph4 from "./KrisImages/326026628_842333426854591_3029466089287749890_n.jpg";

function HomePage() {
  const [showPhotos, setShowPhotos] = useState(false);

  const [currentIndex, setIndex] = useState(0);

  const [fadeOut, setFadeOut] = useState(false);

  const arr = [ph1, ph2, ph3, ph4];

  function handleButtonClick() {
    setShowPhotos(!showPhotos);
  }

  function LeftClick() {
    setIndex((prevIndex) => (prevIndex === 0 ? arr.length - 1 : prevIndex - 1));
    setFadeOut(true);
  }
  function RightClick() {
    setIndex((prevIndex) => (prevIndex === arr.length - 1 ? 0 : prevIndex + 1));
    setFadeOut(true);
  }

  function handleTransitionEnd() {
    setFadeOut(false); 
  }

  return (
    <div className="Main">
      <div className="PromosContainer">
        <div className={`Promo ${showPhotos ? "show" : null}`}>
          <div>
            <img className="Salat1" src={img1} alt="" />
            <img className="Salat2" src={img2} alt="" />
            <h1 className="promoSnej">
              Снежанка <br />+<br /> 200 мл. узо
            </h1>
            <h1 className="promoGr">
              Гръцка салата
              <br /> + <br />
              200 мл. узо
            </h1>
            <h1 className="H-One">22.50 лв</h1>
            <h1 className="H-Two">27.50 лв</h1>
            <h1 className="H-Three">COMBO 32.50 лв</h1>
          </div>
        </div>
        <button className="btn-slice" href="#" onClick={handleButtonClick}>
          <div className="top">
            <span>ПРОМОЦИЯ:</span>
          </div>
          <div className="bottom">
            <span>ПРОМОЦИЯ:</span>
          </div>
        </button>
      </div>

      <div className="PhotoLefRight">
        <button className="Left" onClick={LeftClick}>
          <FontAwesomeIcon icon={faCircleLeft} />
        </button>
        <div className="PhotosContainer"
          onTransitionEnd={handleTransitionEnd}>{<img className="currentPhoto" src={arr[currentIndex]} alt="" />}</div>
        <button className="Right" onClick={RightClick}>
          <FontAwesomeIcon icon={faCircleRight} />
        </button>
      </div>
    </div>
  );
}

export default HomePage;
