import React, {useState} from 'react'
import { Card } from 'react-bootstrap';
import umbrella from '../umbrella.png';

function HostRoomForm ({host, handleAddRoom}) {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [address, setAddress] = useState('')
    const [livingType, setLivingType] = useState('')
    const [image, setImage] = useState('')
    const [price, setPrice] = useState(null)
    const [hostId, setHostId] = useState(host.id)

    console.log(hostId)

    function handleSubmit(e){
        e.preventDefault();
        fetch('http://localhost:9292/rooms', {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                host_id: hostId,
                address: address,
                living_type: livingType,
                image: image,
                title: title,
                description: description,
                price: price
            }),
        })
        .then((r) => r.json())
        .then((newRoom) => handleAddRoom(newRoom))
    
    }

    return (
        <div >
        <Card style={{ width: '30rem' }} className="login_card" >
        <Card.Body>
            <img src={umbrella} className="umbrella" />
            <Card.Title><h2>Host A New Room</h2></Card.Title>
            <Card.Text>
            
            </Card.Text>

            <form onSubmit={handleSubmit} className="newroomform">
                
                <input
                        placeholder='Title'
                        type="text"
                        name="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    /><br></br>
                
                <input
                        placeholder='Description'
                        type="text"
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    /><br></br>
                
                <input
                        placeholder='Address'
                        type="text"
                        name="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    /><br></br>
                
                <input
                        placeholder='Living Type'
                        type="text"
                        name="type"
                        value={livingType}
                        onChange={(e) => setLivingType(e.target.value)}
                    /><br></br>
                
                <input
                        placeholder='Image'
                        type="text"
                        name="image"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                    /><br></br>
                
                <input
                        placeholder='Price'
                        type="integer"
                        name="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    /><br></br>
                <div>
                    <input
                        value="Host a Room"
                        class="submit"
                        type='submit'
                        name='submit'
                        className="seemorebutton">
                        
                    </input>
                </div>
                
            </form>

        </Card.Body>
        </Card>
            
            
        </div>
    )
}

export default HostRoomForm;

//         host_id: params[:id],
//         address: params[:address],
//         living_type: params[:living_type],
//         image: params[:image],
//         title: params[:title],
//         description: params[:description],
//         price: params[:price],
      