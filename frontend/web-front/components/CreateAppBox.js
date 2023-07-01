import React, { useState, useEffect } from "react";
import styles from '../styles/CreateProjectBox.module.css';
import BootstrapHead from "./BootstrapHead";
import Modal from "react-modal";
import Cookies from "js-cookie";
import axios from "axios";

function CreateAppBox({username, projectname}) {
  const [appname, setAppname] = useState('');
  const [appDescription, setappDescription] = useState('');

  const handleNameChange = (e) => {
    setAppname(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setappDescription(e.target.value);
  };
    
  const handleCreateApp = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'http://192.168.45.134:8080/app/createapp/',
        {
          username,
          projectname,
          appname,
          appDescription,
        }
      );
      if (response.status === 201) {
          alert('The application was successfully created.');
          setModalIsOpen(false);
          document.body.style.overflowY = 'auto';
          getApps();
      }
    } catch (error) {
    // 동일한 이름의 appname 을 입력했을 때 에러 반환
      if (error.response && error.response.data && error.response.data.error === 'This application name already exists.') {
        alert('This application name already exists.');
      } else {
        console.error('There was an error!', error);
        alert('There was an error while creating the application.');
      }
    }
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
            {/* App 이름 입력받기 */}
            <div>Application Name</div>
            <div>
              <input
                className={styles.input}
                id="appname"
                value={appname}
                pattern="^[a-zA-Z0-9ㄱ-힣]+"
                onChange={handleNameChange}
                required
              />
            </div>
            {/* 줄 사이 공백 */}
            <div className={styles.space}></div>
            {/* 패스워드 입력받기 */}
            <div>Application Description</div>
            <div>
              <textarea
                className={styles.descriptionInput}
                id="appDescription"
                value={appDescription}
                onChange={handleDescriptionChange}
                required
              />
            </div>
            {/* 줄 사이 공백 */}
            <div className={styles.space}></div>
            {/* 프로젝트 생성 버튼 */}
            <button type="submit" className={styles.createButton} onClick={handleCreateApp}>Create Application</button>
        </Modal>
        <div className={styles.container}>
            <div className={styles.leftContent}>
                <h5 className={styles.aboveTitle}>Hello {username}</h5>
                <h2 className={styles.title}>{projectname}</h2>
            </div>
            <button className={styles.button} onClick={openModal}>Create Project</button>
            {modalIsOpen && <Modal closeModal={closeModal}/>}
        </div>
    </>
  );
};

export default CreateAppBox;