import React, {useState} from 'react'

function HostRoomForm ({host, handleAddRoom}) {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [address, setAddress] = useState('')
    const [livingType, setLivingType] = useState('')
    const [image, setImage] = useState('')
    const [price, setPrice] = useState(0)
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
        <div>
            <h1>Host a Room!</h1>
            <form onSubmit={handleSubmit}>
                <label>Title: </label>
                <input
                        type="text"
                        name="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                <label>Description: </label>
                <input
                        type="text"
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                <label>Address: </label>
                <input
                        type="text"
                        name="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                <label>Living Type: </label>
                <input
                        type="text"
                        name="type"
                        value={livingType}
                        onChange={(e) => setLivingType(e.target.value)}
                    />
                <label>Image: </label>
                <input
                        type="text"
                        name="image"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                    />
                <label>Price: </label>
                <input
                        type="integer"
                        name="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                <div>
                    <input
                        class="submit"
                        type='submit'
                        name='submit'>
                    </input>
                </div>
                
            </form>
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
      