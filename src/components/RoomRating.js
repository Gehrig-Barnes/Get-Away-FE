import React, {useState} from 'react'


function RoomRating ({ roomRating, totalRating, roomId}){
    const [rating, setRating] = useState(0)
    

    function handleSubmit(e){
        e.preventDefault();
        fetch(`http://localhost:9292/rooms/${roomId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                rating: +roomRating + +rating,
                total_rating: +totalRating + 10 
            }),
        })
        .then((r) => r.json())
    }

    return (
        <div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="rate"></label>
            <select
              className="selectbutton"
              name="rate"
              id="rates"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            >
              
              <option>Select:</option>
              <option type="integer">10</option>
              <option type="integer">9</option>
              <option type="integer">8</option>
              <option type="integer">7</option>
              <option type="integer">6</option>
              <option type="integer">5</option>
              <option type="integer">4</option>
              <option type="integer">3</option>
              <option type="integer">2</option>
              <option type="integer">1</option>
            </select>

              <button
              className="ratebutton"
              type='submit'
              name='submit'>Rate This Room
            </button>
          </form>

        </div>
    )
}

export default RoomRating;