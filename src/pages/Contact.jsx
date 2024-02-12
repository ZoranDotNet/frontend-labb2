import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

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

          alert("Tack för ditt mail.");
        },
        (error) => {
          console.log("FAILED...", error.text);

          alert("Något gick tyvärr fel. Vänligen försök igen.");
        }
      );
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
      </main>
    </>
  );
};

export default Contact;
