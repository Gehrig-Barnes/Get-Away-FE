import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

import { DateRange } from 'react-date-range';


function RoomDetails () {
    
    const[room, setRoom] = useState(true)
    const {id} = useParams();
    const [state, setState] = useState([
      {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
      }
    ]);
    const date1 = state[0].startDate
    const date2 = state[0].endDate
    const timeDif = date2.getTime() - date1.getTime()
    const dayDif = timeDif / (1000 * 3600 * 24) + 1;
    console.log(dayDif)

   
    
    
    
    
    
    useEffect(() => {
        fetch(`http://localhost:9292/rooms/${id}`)
          .then((r) => r.json())
          .then((room) => {
            setRoom(room);
            
          });
      }, [id]);

    

    return (
      <Container>
        <Row>
          <Col>
            <h2>{room.title}</h2>
            <img src={room.image} />
            <h2>{room.description}</h2>
            <h2>Rating: {room.rating}/10</h2>
            <h2>Comment: {room.comment}</h2>
          </Col>
          <Col className="rightcolumn">
            <h2>${room.price}/night</h2>
            <h2>Rating: {room.rating}/10</h2>
            <DateRange
             editableDateInputs={true}
              onChange={item => setState([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={state}
            />
            <h2>Total: {room.price * dayDif}</h2>
            <h2>How many days: {dayDif}</h2>
           
        </Col>
        
        </Row>
        
      </Container>
    )
}

export default RoomDetails;