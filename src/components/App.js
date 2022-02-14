import React, {useState, useEffect} from "react";
import RoomList from "./RoomList";
import {Route, Routes} from "react-router-dom";
import Navigation from './Navigation';
import "../App.css";

function App() {
  const [rooms, setRooms] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/rooms")
      .then((r) => r.json())
      .then((data) => setRooms(data));

  }, []);

  console.log(rooms)

  return (
    <div>
      <header>
        <Navigation />
      </header>
      <Routes>
        <Route path="/" element={<RoomList rooms={rooms}/>}/>


      </Routes>
    </div>
  );
}

export default App;
