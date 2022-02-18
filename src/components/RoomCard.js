import React from "react"
import {Link} from 'react-router-dom'
import { Container, Col, Row } from 'react-bootstrap';

function RoomCard({address, living_type, image, title, price, rating, id, total_rating}){
    return (
        <>
            <div>
                <Container>
                    <Row>
                        <Col className="roomleftcolumn" sm={5}>
                            <h2>{title}</h2>
                            <img src={image} alt='room_image' className="room_img"/>
                            
                        </Col>
                        <Col className="roomrightcolumn" sm={7}>
                            <h4>{living_type}</h4>
                            <h4>{address}</h4>
                            <hr className="horizontalrule2" />
                            <h5>⭑ Rating: {((rating / total_rating) * 10).toFixed(1) } </h5>
                            <h5>${price} / night</h5>
                            <p>
                                <button className="seemorebutton">
                                    <Link to={`/rooms/${id}`} className="seemorebutton">See More</Link>
                                </button>
                            </p>
                            </Col>
                    </Row>
                    <hr className="horizontalrule"></hr>
                </Container>
                
            </div>
        </>
    )
}

export default RoomCard;