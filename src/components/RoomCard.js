import React from "react"
function RoomCard({address, living_type, image, title, price, rating}){
    return (
        <div>
            <h2>{title}</h2>
            <img src={image}/>
            <h2>Living Type: {living_type}</h2>
            <h3>{address}</h3>
            <h3>Rating: {rating}/10</h3>
            <h3>${price}/night</h3>
            
        </div>
    )
}

export default RoomCard;