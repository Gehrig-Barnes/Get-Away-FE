import React, {useState, useEffect} from "react";
import RoomList from "./RoomList";
import {Route, Routes, useNavigate} from "react-router-dom";
import Navigation from './Navigation';
import RoomDetails from './RoomDetails'
import Login from './Login'
import HostRoomList from './HostRoomList'
import Footer from './Footer';
import "../App.css";
import HostNav from './HostNav'
import CreateHost from './CreateHost'


function App() {
  const [rooms, setRooms] = useState([])
  const [email, setEmail] = useState(localStorage.getItem("email"));
  const [hostData, setHostData] = useState([])
  const [removeRequest, setRemoveRequest] = useState(false);
  const [currentUser, setCurrentUser] = useState({})

  let navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:9292/rooms")
      .then((r) => r.json())
      .then((data) => setRooms(data));
  }, [removeRequest]);

  function handleRemoveRoom(id) {
    fetch(`http://localhost:9292/rooms/${id}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(setRemoveRequest(!removeRequest))
  }

  useEffect(() => {
    fetch("http://localhost:9292/hosts")
      .then((r) => r.json())
      .then((data) => setHostData(data));
      handleRefresh()

  }, []);

  function handleLogin(value){
    
    setCurrentUser(value)
    localStorage.setItem('id', value.id)
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

  

  function handleAddRoom(newRoom) {
    const newRoomArray = [newRoom, ...rooms];
    setRooms(newRoomArray)
  }
  
  function handleRefresh(){
    let id = localStorage.getItem('id')
    if (id){
      fetch(`http://localhost:9292/hosts/${id}`)
      .then((r) => r.json())
      .then((data) => {
        setCurrentUser(data)
        navigate('/host')
      });  
    }
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
            <Login hostData={hostData} email={email} handleLogin={handleLogin}/>
          </div>
        }/>
      
        <Route exact path='/host' element={
          <div>
            <HostNav/>
            <HostRoomList host={currentUser} handleRemoveRoom={handleRemoveRoom} handleAddRoom={handleAddRoom}/>
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
