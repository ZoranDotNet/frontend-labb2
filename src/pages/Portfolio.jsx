import React, { useEffect, useState } from "react";
import csharp from "../assets/c-sharp-c.svg";
import htmlicon from "../assets/html-icon.svg";
import cssicon from "../assets/css-icon.svg";
import jsicon from "../assets/js-icon.svg";
import reacticon from "../assets/react-icon.svg";
import githubicon from "../assets/github-mark.svg";
import DotLoader from "react-spinners/DotLoader";

const Portfolio = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [projectData, setProjectData] = useState([]);
  const [error, setError] = useState();

  const URL = "https://api.github.com/users/ZoranDotNet/repos";

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(URL);

        if (!response.ok) {
          throw new Error("Bad fetch response");
        }

        const projectData = await response.json();

        setProjectData(projectData);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <h2>Something went wrong! Please try again.</h2>;
  }

  return (
    <>
      <main>
        <div className="main-container">
          <h1>Portfolio</h1>
          <div className="portfolio-wrapper">
            <div className="box">
              <img src={csharp} alt="C# logo" />
              <h3>Bank app</h3>
              <p>Grupparbete där vi skapade en bank</p>
              <a href="#bankapp" className="read-more">
                Read more
              </a>
            </div>
            <div className="box">
              <img src={htmlicon} alt="Html logo" />
              <h3>Labb 1</h3>
              <p>Skapa en personlig hemsida utan javascript</p>
              <a href="#labb1" className="read-more">
                Read more
              </a>
            </div>
            <div className="box">
              <img src={cssicon} alt="Css logo" />
              <h3>Eget projekt</h3>
              <p>Skapat hemsida med html och css utan ramverk</p>
              <a href="#egetprojekt" className="read-more">
                Read more
              </a>
            </div>
            <div className="box">
              <img src={jsicon} alt="Javascript logo" />
              <h3>Labb 2</h3>
              <p>Bygger vidare på Labb 1. Nu även med javascript</p>
              <a href="#labb2" className="read-more">
                Read more
              </a>
            </div>
            <div className="box">
              <img src={reacticon} alt="React logo" />
              <h3>React projects</h3>
              <p>Har gjort flera mindre projekt med React</p>
              <a href="#react" className="read-more">
                Read more
              </a>
            </div>
          </div>
          {isLoading && (
            <div className="portfolio-loader">
              <DotLoader
                className="spinner"
                color="white"
                cssOverride={{}}
                size={25}
                speedMultiplier={2}
              />{" "}
              <p className="loading">Loading...</p>
            </div>
          )}
          {!isLoading && (
            <div className="github-wrapper">
              <h2 className="github-heading">Github Repositories</h2>
              <img
                src={githubicon}
                alt="Github Logo"
                className="github-image"
              />

              <div className="table-container">
                <table className="portfolio-table">
                  <thead className="table-head">
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Description</th>
                      <th scope="col">Link</th>
                    </tr>
                  </thead>
                  <tbody>
                    {projectData.map((item) => (
                      <tr key={item.id}>
                        <th scope="row"> {item.name}</th>
                        <td>{item.description}</td>
                        <td>
                          <a
                            href={item.svn_url}
                            className="github-link"
                            target="_blanck"
                          >
                            Github
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </main>
      <div className="popup" id="bankapp">
        <div className="popup-inner">
          <h3>C# Bank app</h3>
          <p>
            Som slutarbete i vår C# kurs gjorde vi ett grupparbete. Vi fick en
            backlog där vi skulle göra en bank. Som administratör till banken
            skulle man kunna öppna konton, göra insättningar, överföringar samt
            öppna konton i utländsk valuta. Vi skulle även ha olika
            användarkonton med olika rättigheter och login.
          </p>
          <a href="#" className="popup-button">
            Close
          </a>
        </div>
      </div>
      <div className="popup" id="labb1">
        <div className="popup-inner">
          <h3>Labb 1</h3>
          <p>
            I vår Frontend kurs så ska vi bygga en egen hemsida. Vi använder
            endast HTML och CSS, inga ramverk.
          </p>
          <a href="#" className="popup-button">
            Close
          </a>
        </div>
      </div>
      <div className="popup" id="egetprojekt">
        <div className="popup-inner">
          <h3>Eget Projekt</h3>
          <p>
            Har gjort flera egna projekt. Har byggt några sidor och börjat lära
            mig mer och mer. Har även testat på Bootstrap och gjort några
            projekt.
          </p>
          <a href="#" className="popup-button">
            Close
          </a>
        </div>
      </div>
      <div className="popup" id="labb2">
        <div className="popup-inner">
          <h3>Labb 2</h3>
          <p>
            Vi ska bygga vidare på Labb 1 men nu även använda lite js och react.
            Vi hämtar projekt på denna sida med githubs API.
          </p>
          <a href="#" className="popup-button">
            Close
          </a>
        </div>
      </div>
      <div className="popup" id="react">
        <div className="popup-inner">
          <h3>React</h3>
          <p>
            Har övat mycket med React. Gjort enklare project som ToDo List,
            enklare hemsidor, testat lite olika libraries bl.a framer-motion med
            olika animationer.
          </p>
          <a href="#" className="popup-button">
            Close
          </a>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
