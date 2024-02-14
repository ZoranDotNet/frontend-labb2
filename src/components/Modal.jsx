import styles from "./modal.module.css";

const Modal = ({ isVisible, closeModal, message, title }) => {
  return (
    <div>
      {isVisible && (
        <div className={styles.overlay}>
          <div className={styles.modal}>
            {title && <p className={styles.title}>{title}</p>}
            <p className={styles.content}>{message}</p>
            <button className={styles.modalBtn} onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
