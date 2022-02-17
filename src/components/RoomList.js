import React, { useEffect, useState } from "react";
import RoomCard from "./RoomCard";
import Filter from './Filter';

function RoomList ({rooms}){
    const [filterBy, setFilterBy] = useState("Living Type")

    const filteredRooms = rooms.filter(
        (room) => room.living_type === filterBy
    );

    return (
        <>
        <div className='banner'>
            <div className='banner_info'>
                <h1>Get there fast and then take it slow</h1>
                <h6>Find your next dream GetAway today</h6>
                </div>
                </div>
        <div>
            <Filter 
                filterBy={filterBy}
                onChangeFilter={setFilterBy}
            />
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
                        total_rating={room.total_rating}
                    />
                )
            })}
            </div>
        
        </>
    )
}

export default RoomList;