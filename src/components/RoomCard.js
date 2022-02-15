import React from "react"
import {Link} from 'react-router-dom'

function RoomCard({address, living_type, image, title, price, rating, id}){
    return (
        <div>
            <h2>{title}</h2>
            <img src={image} alt=''/>
            <h2>Living Type: {living_type}</h2>
            <h3>{address}</h3>
            <h3>Rating: {rating}/10</h3>
            <h3>${price}/night</h3>
            <p>
                <Link to={`/rooms/${id}`}>See More</Link>
            </p>
            
        </div>
    )
}

export default RoomCard;