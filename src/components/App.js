import React, {useState, useEffect} from "react";
import RoomList from "./RoomList";
import {Route, Routes} from "react-router-dom";
import Navigation from './Navigation';
import RoomDetails from './RoomDetails'
import Login from './Login'
import HostRoomList from './HostRoomList'
import Footer from './Footer';
import "../App.css";

//create a route for each home. 
//when we click on a home, it should bring us to a page where we see detail and we can checkout(reserve room)
// jlee@aol.com
function App() {
  const [rooms, setRooms] = useState([])
  const [host, setHost] = useState([])
  const [email, setEmail] = useState([])
  const [hostData, setHostData] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/hosts")
      .then((r) => r.json())
      .then((data) => setHostData(data));

  }, []);

  

  useEffect(() => {
    fetch(`http://localhost:9292/host/${email}`)
      .then((r) => r.json())
      .then((data) => setHost(data));

  }, [email]);

  
  
  console.log(host)

  

  function handleEmail(e){
    const value = e.target.value
    setEmail(value)
  }


  useEffect(() => {
    fetch("http://localhost:9292/rooms")
      .then((r) => r.json())
      .then((data) => setRooms(data));

  }, []);

  


  

  return (
    <div>
      <header>
        <Navigation />
      </header>
      <Routes>
      <Route exact path='/rooms/:id' element={<RoomDetails/>}/>
      <Route exact path="/rooms" element={<RoomList rooms={rooms}/>}/>
      <Route exact path='/login' element={<Login handleEmail={handleEmail} hostData={hostData} email={email}/>}/>
      <Route exact path='/host' element={<HostRoomList host={host}/>}/>
      


      </Routes>
      <Footer className="footer" />
    </div>
  );
}

export default App;
