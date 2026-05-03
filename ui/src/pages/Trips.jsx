// import { useEffect, useState } from "react";
// import API from "../api/axios";
//
// function Trips() {
//   const [trip, setTrip] = useState(null);
//
//   useEffect(() => {
//     API.get("/1/trips")
//       .then((res) => setTrip(res.data))
//       .catch(() => alert("Error"));
//   }, []);
//
//   return (
//     <div>
//       <h2>Your Trips</h2>
//
//       {trip && (
//         <div>
//           <p>From: {trip.origin}</p>
//           <p>To: {trip.destination}</p>
//           <p>Amount: {trip.amount}</p>
//           <p>Distance: {trip.distance}</p>
//         </div>
//       )}
//     </div>
//   );
// }
//
// export default Trips;