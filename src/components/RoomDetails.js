import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom';
import { Container, Row, Col} from 'react-bootstrap';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';
import RoomRating from './RoomRating'


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
    const roomRating = (room.rating)
    const totalRating = (room.total_rating)
    const roomId = (room.id)
    const date1 = state[0].startDate
    const date2 = state[0].endDate
    const timeDif = date2.getTime() - date1.getTime()
    const dayDif = timeDif / (1000 * 3600 * 24) + 1;
    
    useEffect(() => {
        fetch(`http://localhost:9292/rooms/${id}`)
          .then((r) => r.json())
          .then((room) => {
            setRoom(room);
            
          });
      }, [id]);

    return (
      <Container>
        <h1 className="faketext">GetAway</h1>
        <Row>
          <Col className="leftcolumn">
            <h2>{room.title}</h2>
            <img src={room.image} alt="roomdetailsimage" className="roomdetailsimage"/>
            <h4>{room.living_type}</h4>
            <h4>{room.address}</h4>
            <hr className="horizontalrule" />
            <h4>{room.description}</h4>
            <hr className="horizontalrule" />
            <h4>⭑ Rating: {((room.rating / room.total_rating) * 10).toFixed(1)}/10</h4>
            <Col>
              <RoomRating roomId={roomId} roomRating={roomRating} totalRating={totalRating} />
            </Col>
            
          </Col>

          <Col className="rightcolumn">
            <h2>Reserve this {room.living_type} for</h2>
            <h3><strong>${room.price}</strong> / night</h3>
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
            <button className="seemorebutton">Reserve</button>
          </Col>
        </Row>
      </Container>
    )
}

export default RoomDetails;