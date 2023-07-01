import React, { useState, useEffect } from 'react';
import Navbar from "../components/Navbar";
import Projectbox from "../components/Projectbox";
import CreateProjectBox from "../components/CreateProjectBox";
import axios from "axios";
import Cookies from "js-cookie";

function Main() {
  const [username, setUsername] = useState(null);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const username = Cookies.get("username");
    setUsername(username);

    if (username) {
      getProjects(username);
    }
  }, []);

  const getProjects = (username) => {
    axios.post('http://192.168.45.134:8080/project/getproject/', 
    { username: username })
      .then(response => {
        setProjects(response.data);
      })
      .catch(error => {
        console.error('Error fetching projects:', error);
      });
  };

  return (
    <div>
      <Navbar />
      {username && <CreateProjectBox getProjects={() => getProjects(username)} />}
      {projects.length > 0 ? (
        projects.map(content => (
          <Projectbox
            key={content.id}
            projectname={content.projectname}
            description={content.description}
          />
        ))
      ) : (
        <p>No projects found.</p>
      )}
    </div>
  );
}

export default Main;