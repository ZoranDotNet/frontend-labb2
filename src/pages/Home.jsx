import React, { useState } from "react";
import Modal from "../components/Modal";
import profilepicture from "../assets/profilmotiv.png";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counter, setCounter] = useState(0);

  const shortMsg = "Nyfiken på Systemutvecklare?";

  const title = "Systemutvecklare enligt Wikipedia:";
  const longMsg =
    "Systemutvecklare designar och utvecklar datorsystem eller delar av datorsystem med utgångspunkt i den verksamhet tekniken skall ge stöd åt. Systemutvecklarens utgångspunkt är därför människorna som använder eller påverkas av teknik snarare än tekniken i sig. Förenklat kan man tala om systemering där verksamhetens behov (kraven) översätts till realiserbara funktioner respektive programmering där realisering av dessa funktioner sker, som två huvudsakliga kärnuppgifter i det arbete som utförs av denna yrkeskategori. Systemutvecklare måste inte designa hela datorsystemet utan kan också programmera på den delen som användaren inte ser, medan en IT-designer kan sköta utseendet och känslan av datorsystemet.";

  const closeModal = () => {
    setIsVisible(false);
  };

  return (
    <>
      <main className="main-content">
        <div className="container">
          <div className="left-wrapper">
            <h1>Zoran Matovic</h1>
            <h2
              onClick={() => {
                setIsVisible(true);
                setCounter(counter + 1);
              }}
            >
              Systemutvecklare
            </h2>
            <Modal
              isVisible={isVisible}
              renderModal={() => {
                //console.log(counter);
                return counter === 1
                  ? { message: shortMsg }
                  : { message: longMsg, title: title };
              }}
              closeModal={closeModal}
            />
            <p>
              Blivande systemutvecklare med logiskt tänkande. Gillar
              problemlösning och att skapa. Titta gärna in på mina projekt och
              tveka inte att höra av dig med eventuella frågor.
            </p>
            <div className="btn-box">
              <a
                href="/cv.pdf"
                target="_blank"
                download
                className="download-cv"
              >
                Download CV
              </a>
            </div>
            <div className="home-icons">
              <a href="https://github.com/ZoranDotNet" target="_blank">
                <i className="fa-brands fa-github icon"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/zoran-matovic-68a593b0/"
                target="_blank"
              >
                <i className="fa-brands fa-linkedin-in icon"></i>
              </a>
            </div>
          </div>
          <div className="right-wrapper">
            <img
              src={profilepicture}
              alt="Profilbild av Zoran"
              className="hero-image"
            />
          </div>
        </div>
        <div className="box-info">
          <h3>Välkommen till min sida</h3>
        </div>
      </main>
    </>
  );
};

export default Home;
