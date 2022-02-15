import React, {useState, useEffect} from "react";
import RoomList from "./RoomList";
import {Route, Routes} from "react-router-dom";
import Navigation from './Navigation';
import RoomDetails from './RoomDetails'
import "../App.css";

//create a route for each home. 
//when we click on a home, it should bring us to a page where we see detail and we can checkout(reserve room)

function App() {
  const [rooms, setRooms] = useState([])


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
      

        


      </Routes>
    </div>
  );
}

export default App;
