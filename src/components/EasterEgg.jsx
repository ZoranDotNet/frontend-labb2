import styles from "./easterEgg.module.css";

const EasterEgg = ({ handleClose, showSecretMessage }) => {
  return (
    <>
      {showSecretMessage && (
        <div className={styles.secretMessage} onClick={handleClose}>
          <div className={styles.secretWrapper}>
            <h2>ELITE</h2>
            <p>You entered secret sequence!</p>
          </div>
        </div>
      )}
    </>
  );
};

export default EasterEgg;
