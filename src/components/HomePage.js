import "./HomePage.css";
import React, { useState } from "react";
import img1 from "./img/153303680_2221456447998579_386986701392511140_n.jpg";
import img2 from "./img/153303680_2221456447998579_386986701392511140_n.jpg";
function HomePage() {
  const [Photos, setPhotos] = useState(false);

  return (
    <div className="Main">
      <div className="PromosContainer">
        <div className="Promo">
          {Photos ? null : (
            <div>
              <img className="Salat1" src={img1} alt="" />
              <img className="Salat2" src={img2} alt="" />
              <h1 className="H-One">22.50 лв</h1>
              <h1 className="H-Two">27.50 лв</h1>
              <h1 className="H-Three">COMBO 32.50 лв</h1>
            </div>
          )}
          <button class="btn-slice" href="#" onClick={() => setPhotos(!Photos)}>
            <div class="top">
              <span>ПРОМОЦИЯ:</span>
            </div>
            <div class="bottom">
              <span>ПРОМОЦИЯ:</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
