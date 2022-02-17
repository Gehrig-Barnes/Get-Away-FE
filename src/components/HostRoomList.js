import React, {useState} from 'react'
import HostRoomCard from './HostRoomCard'
import HostRoomForm from './HostRoomForm'

function HostRoomList ({host, handleRemoveRoom, handleAddRoom}) {
    const [rooms, setRooms] = useState(host.rooms)
    console.log(rooms)
    return (
        <div>
            <h1 className="welcometitle">Welcome {host.first_name}</h1>
            <h3 className="welcometitle">Currently Hosting</h3>
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
                        handleRemoveRoom={handleRemoveRoom}

                    />
                )
            })}
            <HostRoomForm host={host} handleAddRoom={handleAddRoom}/>
        </div>
    )
}

export default HostRoomList;