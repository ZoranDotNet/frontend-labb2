import { useEffect, useState } from "react";
import profilepic from "../assets/profilepic.jpg";

const About = () => {
  const [isDarkGrey, setIsDarkGrey] = useState(false);

  useEffect(() => {
    const img = document.querySelector(".about-me-pic");

    const handleClick = () => {
      setIsDarkGrey((prevIsDarkGrey) => !prevIsDarkGrey);
    };

    if (img) {
      img.addEventListener("click", handleClick);
    }

    return () => {
      if (img) {
        img.removeEventListener("click", handleClick);
      }
    };
  }, []);

  useEffect(() => {
    document.body.style.backgroundColor = isDarkGrey ? "darkgrey" : "";
  }, [isDarkGrey]);

  return (
    <>
      <main>
        <div className="about-me">
          <div className="main-info">
            <h1>About me</h1>
            <h2>Läser mitt första år på utbildning till systemutvecklare</h2>
            <p>
              Jag har en lång bakgrund inom försäljning, har bl.a arbetat som
              fastighetsmäklare i nästan 20 år. Behövde ett ombyte och IT har
              alltid intresserat mig. <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consequatur, dolore error dolorem vero incidunt illum temporibus
              beatae sint corrupti, ullam eligendi repudiandae consequuntur
              neque. Delectus repudiandae reprehenderit libero recusandae
              quisquam?
              <br />
              <br />
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure
              esse unde aperiam maiores, placeat quaerat neque quae rerum. Totam
              sit maxime nostrum commodi porro animi facilis labore, excepturi
              est. Doloribus!
            </p>
          </div>
          <div className="profile-img">
            <img
              src={profilepic}
              alt="Bild på Zoran"
              className="about-me-pic"
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
