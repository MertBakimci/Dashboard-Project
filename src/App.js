import React, { useContext, useState, useEffect } from 'react';
import { faHome,faGlobe,faSquare,faGraduationCap,faSchool,faPersonBooth } from "@fortawesome/free-solid-svg-icons";
import Content from './sides/Content';
import Header from './sides/Header';
import Sidebar from './sides/Sidebar';
import Context from './Context'

function App() {
  const [sOpen,setSOpen] = useState(true);
  const [userData,setUserData] = useState();
  const [links,setLinks] = useState();


useEffect(() => {

    fetch('https://601d848abe5f340017a19c29.mockapi.io/menu',{method: 'GET'})
   .then(response => response.json())
   .then(data => {
    const linksEdited = [
      {icon: faHome,title:data[0].name},
      {icon: faGlobe,title: data[1].name},
      {icon: faGraduationCap,title:  data[2].name},
      {icon: faSchool,title: data[3].name},
      {icon: faSquare,title: data[4].name},
      {icon: faPersonBooth,title: data[5].name},
  ]
     setLinks(linksEdited)
 })
   .catch(error => console.log(error))
}, [])

useEffect(() => {
 
  fetch('https://601d848abe5f340017a19c29.mockapi.io/dashboard',{method: 'GET'})
  .then(response => response.json())
  .then(data => {
      setUserData(data);
  })
  .catch(error => console.log(error))

}, [])


 const datas = {
    sOpen,
    setSOpen,
    userData,
    setUserData,
    links,
    setLinks,
  }

  return (
    <Context.Provider value={datas}>
      <> 
      
        <Header />
        <div className="container flex">
         
        
          <Sidebar />
          <Content />
        </div>
      </>
    </Context.Provider>
  );
}

export default App;
