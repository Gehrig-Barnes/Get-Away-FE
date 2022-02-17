import React from 'react';
import { Row, Col, Card, Container } from 'react-bootstrap';

function HostRoomCard ({address, living_type, image, title, price, rating, id, handleRemoveRoom}) {
    return (
        <div className="hostroomcard">
        
        <Container>
        <Row>
            <Col className="roomleftcolumn" sm={5}>
                <h2>{title}</h2>
                <img src={image} alt='room_image' className="room_img"/>
                
            </Col>
            <Col className="roomrightcolumn" sm={7}>
            <h4>{living_type}</h4>
            <h4>{address}</h4>
            <h5>Rating: {rating} / 10</h5>
            <h5>${price} / night</h5>
            <button
                id="removeButton"
                onClick={() => handleRemoveRoom(id)}
                className="seemorebutton"
                >Remove
            </button>
                </Col>
        </Row>
        <hr className="horizontalrule"></hr>
    </Container>
</div>


    )
}

export default HostRoomCard;