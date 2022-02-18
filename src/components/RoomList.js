import React, { useEffect, useState } from "react";
import RoomCard from "./RoomCard";
import Filter from './Filter';

function RoomList ({rooms}){
    const [livingType, setLivingType] = useState("All")
    const [price, setPrice] = useState(0)

    function handleLivingType (e){
        setLivingType(e)
    } 

    function handlePrice(e){
        setPrice()
    }

    console.log(livingType)

    function filterLiving(){
        if(livingType === "All"){
            return rooms
        }
        else {
            const filterType = rooms.filter((room) => {
                return room.living_type === livingType
            })
            return filterType
        }
        

    }

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
                handleLivingType={handleLivingType}
            />
            {filterLiving().map((room) => {
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