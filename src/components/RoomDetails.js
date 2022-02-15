import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
function RoomDetails () {
    const[room, setRoom] = useState(true)
    const {id} = useParams();

    useEffect(() => {
        fetch(`http://localhost:9292/rooms/${id}`)
          .then((r) => r.json())
          .then((room) => {
            setRoom(room);
            
          });
      }, [id]);

    return (
        <div>
            <h2>hello</h2>
            <h2>{room.title}</h2>
        </div>
    )
}

export default RoomDetails;