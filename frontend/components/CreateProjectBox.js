import React, { useState } from "react";
import styles from '../styles/CreateProjectBox.module.css';
import BootstrapHead from "./BootstrapHead";
import Modal from "react-modal";

function CreateProjectBox() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleCreateProject = (e) => {
    e.preventDefault();
  };

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
    document.body.style.overflowY = "hidden";
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closeModal = () => {
    setModalIsOpen(false);
    document.body.style.overflowY = "auto";
  };

  return (
    <>
        <BootstrapHead/>
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className={styles.createProjectBox}>
            {/* 이름 입력받기 */}
            <div>name</div>
            <div>
              <input
                className={styles.input}
                id="name"
                value={name}
                pattern="^[a-zA-Z0-9ㄱ-힣]+"
                onChange={handleNameChange}
                required
              />
            </div>
            {/* 줄 사이 공백 */}
            <div className={styles.space}></div>
            {/* 패스워드 입력받기 */}
            <div>description</div>
            <div>
              <textarea
                className={styles.descriptionInput}
                id="description"
                value={description}
                onChange={handleDescriptionChange}
                required
              />
            </div>
            {/* 줄 사이 공백 */}
            <div className={styles.space}></div>
            {/* 로그인하는 버튼 */}
            <button type="submit" className={styles.createButton} onClick={closeModal}>Create Project</button>
        </Modal>
        <div className={styles.container}>
            <div className={styles.leftContent}>
                <h5 className={styles.aboveTitle}>Hello userID</h5>
                <h2 className={styles.title}>Dev Team Projects</h2>
            </div>
            <button className={styles.button} onClick={openModal}>Create Project</button>
            {modalIsOpen && <Modal closeModal={closeModal}/>}
        </div>
    </>
  );
};

export default CreateProjectBox;
