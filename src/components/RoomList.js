import React from "react"
import RoomCard from "./RoomCard"

function RoomList ({rooms}){
    return (
        <div>
            {rooms.map((room) => {
                return (
                    <RoomCard 
                        key={room.id}
                        address={room.address}
                        living_type={room.living_type}
                        image={room.image}
                        title={room.title}
                        price={room.price}
                        rating={room.rating}
                        id={room.id}
                        
                    />
                )
            })}
        </div>
    )
}

export default RoomList;