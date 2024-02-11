import data from "../data/cv.json";
import cvpicture from "../assets/profilbild-cv.png";

const Cv = () => {
  function fetchData(type, data) {
    if (type === "job") {
      return data.map((item) => (
        <div className="box-cv" key={item.id}>
          <h3>{item.company}</h3>
          <h4>{item.title}</h4>
          <p>{item.description}</p>
        </div>
      ));
    } else if (type === "education") {
      return data.map((item) => (
        <div className="box-cv" key={item.id}>
          <h3>{item.name}</h3>
          <h4>{item.school}</h4>
          <p>{item.description}</p>
        </div>
      ));
    }
  }
  //console.log(data);
  return (
    <main className="cv-main">
      <h1>CV</h1>
      <div className="cv-wrapper">
        <img src={cvpicture} alt="profilbild av Zoran" />
        <div className="contact-container">
          <p>
            Zoran Matovic
            <br />
            <span className="cv-icon">
              <i className="fa-regular fa-envelope"></i>
            </span>
            matovic.zoran73@gmail.com
            <br />
            <span className="cv-icon">
              <i className="fa-solid fa-phone"></i>
            </span>
            0708-960940
          </p>
        </div>
      </div>
      <div className="intro-cv">
        <p>
          Blivande systemutvecklare med logiskt tänkande. Gillar problemlösning
          och att skapa. Har en lång bakgrund inom försäljning och är van att
          arbeta i högt tempo mot uppsatta mål och budget. Efter nästan 20 år
          som fastighetsmäklare kände jag det var dags för något nytt. Har
          alltid varit intresserad av IT. Hoppade på en utbildning för att skola
          om mig till systemutvecklare. Går nu mot slutfasen i utbildningen och
          söker en LIA-plats
        </p>
      </div>

      <div className="cv-container">
        <div className="left-side-cv">
          <h2>Arbete</h2>
          <div className="arbete-container">{fetchData("job", data.job)}</div>
        </div>
        <div className="right-side-cv">
          <h2>Utbildning</h2>
          <div className="utbildning-container">
            {fetchData("education", data.education)}
          </div>
        </div>
      </div>
      <section>
        <div className="more-info">
          <h2>More info</h2>
          <div className="flex-container">
            <div className="left-column">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos, libero ipsa provident maxime ullam velit possimus
                atque sapiente cum, incidunt dicta, laudantium nihil accusantium
                debitis tempora modi dolore quidem eaque quam alias totam.
                Ducimus nisi porro ipsam qui libero, deleniti obcaecati et harum
                dolorem repudiandae, possimus eum, magnam tenetur quae?
              </p>
            </div>
            <div className="right-container">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
                libero dolorem atque modi, molestiae perspiciatis iure eum
                voluptatem sequi facere sapiente, quam distinctio. Fugiat
                mollitia, dignissimos, enim adipisci sint alias aut excepturi
                repellendus vero accusantium dolorum velit quam soluta
                laboriosam sed quas animi maxime! Dolorum, laboriosam itaque.
                Ullam, id iusto!
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Cv;
