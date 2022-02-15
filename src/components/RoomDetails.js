import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { Calendar } from 'react-date-range';
import { DateRangePicker } from 'react-date-range';
import { addDays } from 'date-fns';

function RoomDetails () {
    const[room, setRoom] = useState(true)
    const {id} = useParams();
    const [state, setState] = useState([
      {
        startDate: new Date(),
        endDate: addDays(new Date(), 7),
        key: 'selection'
      }
    ]);

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
            <DateRangePicker
              onChange={item => setState([item.selection])}
              showSelectionPreview={true}
              moveRangeOnFirstSelection={false}
              months={2}
              ranges={state}
              direction="horizontal"
            />;
          </Col>
        </Row>
      </Container>
    )
}

export default RoomDetails;