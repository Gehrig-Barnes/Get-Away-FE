import React, {useState, useEffect} from "react";
import RoomList from "./RoomList";
import {Route, Routes} from "react-router-dom";
import Navigation from './Navigation';
import RoomDetails from './RoomDetails'
import Login from './Login'
import HostRoomList from './HostRoomList'
import Footer from './Footer';
import "../App.css";
import HostNav from './HostNav'
import CreateHost from './CreateHost'

//create a route for each home. 
//when we click on a home, it should bring us to a page where we see detail and we can checkout(reserve room)
// jlee@aol.com
function App() {
  const [rooms, setRooms] = useState([])
  const [host, setHost] = useState([])
  const [email, setEmail] = useState(localStorage.getItem("email"));
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

  

  function handleAddHost(newHost) {
    const newHostArray = [newHost, ...hostData];
    setHostData(newHostArray)
  }
  

  return (
    <div>
      
      <Routes>
      <Route exact path='/rooms/:id' element={
      <div>
        <Navigation/>
        <RoomDetails/>
      </div>
    }/>
      <Route exact path="/rooms" element={
        <div>
          <Navigation/>
          <RoomList rooms={rooms}/>
        </div>
      
      }/>
      <Route exact path='/login' element={
        <div>
          <Navigation/>
          <Login handleEmail={handleEmail} hostData={hostData} email={email}/>
        </div>
      }/>
      <Route exact path='/host' element={
      <div>
        <HostNav/>
        <HostRoomList host={host}/>
      </div>
      }/>
      <Route path="/create" element={
      <div>
        <Navigation/>
        <CreateHost handleAddHost={handleAddHost}/>
      </div>
      }/>
      


      </Routes>
      <Footer className="footer" />
    </div>
  );
}

export default App;
