import styles from "./modal.module.css";

const Modal = ({ isVisible, renderModal, closeModal }) => {
  const modalContent = renderModal();
  return (
    <div>
      {isVisible && (
        <div className={styles.overlay}>
          <div className={styles.modal}>
            {modalContent.title && (
              <p className={styles.title}>{modalContent.title}</p>
            )}
            <p className={styles.content}>{modalContent.message}</p>
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
