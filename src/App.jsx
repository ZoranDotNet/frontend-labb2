import { Route, Routes } from "react-router-dom";
import { Home, About, Cv, Portfolio, Contact } from "./pages/Index";
import "./style.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import EasterEgg from "./components/EasterEgg";

function App() {
  const [enteredKeys, setEnteredKeys] = useState("");
  const secret = "1337";
  const [showSecretMessage, setShowSecretMessage] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      setEnteredKeys((enteredKeys) => enteredKeys + e.key);

      if ((enteredKeys + e.key).slice(-4) == secret) {
        setShowSecretMessage(true);
        //console.log("Secret: 1337");
        setEnteredKeys("");
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [enteredKeys]);

  const handleClose = () => {
    setShowSecretMessage(false);
    setEnteredKeys("");
  };
  return (
    <>
      <Navbar />
      <EasterEgg
        handleClose={handleClose}
        showSecretMessage={showSecretMessage}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cv" element={<Cv />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
