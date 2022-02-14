import React, {useState, useEffect} from "react"
import RoomCard from "./RoomCard"
import {Route, Routes} from "react-router-dom"

function App() {
  const [rooms, setRooms] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/rooms")
      .then((r) => r.json())
      .then((data) => setRooms(data));

  }, []);

  console.log(rooms)

  return (
    <div >
      <Routes>
        <Route path="/" element={<RoomCard/>}/>


      </Routes>
    </div>
  );
}

export default App;
