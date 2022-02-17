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
          <Col className="leftcolumn">
            <h2>{room.title}</h2>
            <img src={room.image} />
            <h4>{room.living_type}</h4>
            <h4>{room.address}</h4> 
            <h4>{room.description}</h4>
            <hr className="horizontalrule" />
            <h4>Rating: {room.rating}/10</h4>
            <h4>Reviews: {room.comment}</h4>
          </Col>
          <Col className="rightcolumn">
            <h2>Reserve for</h2>
            <h3><strong>${room.price}</strong> / night</h3>
            <h3>⭑ {room.rating} / 10</h3>
            <h6 className="checkin">Check-in&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;Checkout</h6>
            <DateRange
             editableDateInputs={true}
              onChange={item => setState([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={state}

              className="calendar"
            />
            <h4>Total cost: ${room.price * dayDif}</h4>
            <h4>Nights: {dayDif}</h4> 
          </Col>
        </Row>
      </Container>
    )
}

export default RoomDetails;