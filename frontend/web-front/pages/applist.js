import React, { useState, useEffect } from 'react';
import Appbox from "../components/Appbox";
import Navbar from "../components/Navbar";
import CreateAppBox from "../components/CreateAppBox";
import axios from "axios";

function Applist({ username, projectname }) {
  const [apps, setApps] = useState([]);


  const getApps = (username, projectname) => {
    axios.post('http://192.168.45.134:8080/app/getapp/', 
    { username, projectname })
      .then(response => {
        setApps(response.data);
      })
      .catch(error => {
        console.error('Error fetching projects or apps:', error);
      });
  };

  useEffect(() => {
    getApps(username, projectname);
  }, [username, projectname]);

  return (
    <div>
      <Navbar />
      <CreateAppBox getApps={() => getApps(username, projectname)} />
      {apps.length > 0 ? (
        apps.map(app => (
          <Appbox 
            key={app.id}
            appname={app.appname}
            appDescription={app.appDescription}
            apps={apps} />
        ))
      ) : (
        <p>No apps found.</p>
      )}
    </div>
  );
}

export default Applist;