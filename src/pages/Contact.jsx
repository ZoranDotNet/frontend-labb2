import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Modal from "../components/Modal";

const Contact = () => {
  const form = useRef();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
          form.current.reset();

          setModalContent({
            title: "Success",
            message: "Tack för ditt mail.",
          });
          setIsModalVisible(true);
        },
        (error) => {
          console.log("FAILED...", error);

          setModalContent({
            title: "Error",
            message: "Något gick tyvärr fel. Vänligen försök igen.",
          });
          setIsModalVisible(true);
        }
      );
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <main className="contact-main">
        <div className="form-container">
          <form ref={form} onSubmit={sendEmail} method="post">
            <h2>Contact me</h2>
            <br />
            <label htmlFor="name">Namn</label>
            <input
              type="text"
              id="name"
              name="from_name"
              placeholder="Namn"
              required
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
            />

            <label htmlFor="phone">Mobilnummer</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Mobilnummer"
            />

            <label>Meddelande</label>
            <br />
            <textarea name="message" cols="50" rows="8"></textarea>
            <br />
            <input type="submit" value="Skicka" className="btn" />
          </form>
        </div>
        <Modal
          isVisible={isModalVisible}
          closeModal={closeModal}
          title={modalContent.title}
          message={modalContent.message}
        />
      </main>
    </>
  );
};

export default Contact;
