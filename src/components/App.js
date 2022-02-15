import React, {useState, useEffect} from "react";
import RoomList from "./RoomList";
import {Route, Routes} from "react-router-dom";
import Navigation from './Navigation';
import RoomDetails from './RoomDetails'
import Login from './Login'
import "../App.css";

//create a route for each home. 
//when we click on a home, it should bring us to a page where we see detail and we can checkout(reserve room)
// jlee@aol.com
function App() {
  const [rooms, setRooms] = useState([])
  const [host, setHost] = useState([])
  const [email, setEmail] = useState([])

  useEffect(() => {
    fetch(`http://localhost:9292/host/${email}`)
      .then((r) => r.json())
      .then((data) => setHost(data));

  }, []);

  console.log(host)

  console.log(email)


  useEffect(() => {
    fetch("http://localhost:9292/rooms")
      .then((r) => r.json())
      .then((data) => setRooms(data));

  }, []);

  
console.log(rooms);
  

  return (
    <div>
      <header>
        <Navigation />
      </header>
      <Routes>
      <Route exact path='/rooms/:id' element={<RoomDetails/>}/>
      <Route exact path="/rooms" element={<RoomList rooms={rooms}/>}/>
      <Route exact path='/login' element={<Login />}/>
      <Route exact path='/host'/>
      

        


      </Routes>
    </div>
  );
}

export default App;
