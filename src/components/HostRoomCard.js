import React from 'react'

function HostRoomCard ({address, living_type, image, title, price, rating, id}) {
    return (
        <div>
            <h2>{title}</h2>
            <img src={image} alt=''/>
            <h2>Living Type: {living_type}</h2>
            <h3>{address}</h3>
            <h3>Rating: {rating}/10</h3>
            <h3>${price}/night</h3>
            
            
        </div>
    )
}

export default HostRoomCard;