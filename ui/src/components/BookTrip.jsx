import { useState } from "react";
import API from "../api/axios";

function BookTrip() {
  const [trip, setTrip] = useState({
    origin: "",
    destination: "",
    dateOfPickup: "",
    dateOfReturn: "",
  });

  const handleBook = async () => {
    try {
      const res = await API.post("/1/book-trip", trip); // userId = 1 for now
      console.log(res.data);
      alert("Trip booked!");
    } catch {
      alert("Error booking trip");
    }
  };

  return (
    <div>
      <h2>Book Trip</h2>

      <input placeholder="Origin" onChange={(e) => setTrip({...trip, origin: e.target.value})}/>
      <input placeholder="Destination" onChange={(e) => setTrip({...trip, destination: e.target.value})}/>
      <input type="datetime-local" onChange={(e) => setTrip({...trip, dateOfPickup: e.target.value})}/>
      <input type="datetime-local" onChange={(e) => setTrip({...trip, dateOfReturn: e.target.value})}/>

      <button onClick={handleBook}>Book</button>
    </div>
  );
}

export default BookTrip;