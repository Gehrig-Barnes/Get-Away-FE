import React, {useState} from 'react'
import HostRoomCard from './HostRoomCard'

function HostRoomList ({host}) {
    const [rooms, setRooms] = useState(host.rooms)
    console.log(rooms)
    return (
        <div>
            <h1>Welcome, {host.first_name}</h1>
            {rooms.map((room) => {
                return (
                    <HostRoomCard 
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

export default HostRoomList;