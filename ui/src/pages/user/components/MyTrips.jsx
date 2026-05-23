import React, { useState } from "react";
import "./style/MyTrips.css";

const tripData = [
  {
    from: "Koramangala, Bangalore",
    to: "Indiranagar, Bangalore",
    pickup: "12 May, 09:30 AM",
    return: "12 May, 11:30 AM",
    status: "Completed",
    fare: "₹560",
  },
  {
    from: "HSR Layout, Bangalore",
    to: "Airport, Bangalore",
    pickup: "18 May, 07:00 AM",
    return: "18 May, 09:00 AM",
    status: "Upcoming",
    fare: "₹1250",
  },
  {
    from: "Electronic City, Bangalore",
    to: "Whitefield, Bangalore",
    pickup: "20 Apr, 06:30 PM",
    return: "20 Apr, 08:30 PM",
    status: "Completed",
    fare: "₹620",
  },
  {
    from: "Jayanagar, Bangalore",
    to: "Marathahalli, Bangalore",
    pickup: "10 Apr, 08:15 AM",
    return: "10 Apr, 10:15 AM",
    status: "Cancelled",
    fare: "₹0",
  },
];

const MyTrips = () => {

const [activeTab,setActiveTab]=
useState("All");

const filteredTrips =
activeTab==="All"
? tripData
: tripData.filter(
trip =>
trip.status===activeTab
);

return (

<div className="cab-trips">

<div className="cab-tabs">

<button
className={
activeTab==="All"
? "active"
: ""
}
onClick={()=>
setActiveTab("All")
}
>
All Trips
</button>


<button
className={
activeTab==="Upcoming"
? "active"
: ""
}
onClick={()=>
setActiveTab("Upcoming")
}
>
Upcoming
</button>


<button
className={
activeTab==="Completed"
? "active"
: ""
}
onClick={()=>
setActiveTab("Completed")
}
>
Completed
</button>


<button
className={
activeTab==="Cancelled"
? "active"
: ""
}
onClick={()=>
setActiveTab("Cancelled")
}
>
Cancelled
</button>

</div>


<table className="cab-trip-table">

<thead>

<tr>

<th>From</th>
<th>To</th>
<th>Pickup</th>
<th>Return</th>
<th>Status</th>
<th>Fare</th>

</tr>

</thead>


<tbody>

{filteredTrips.map(
(trip,index)=>(

<tr key={index}>

<td>{trip.from}</td>

<td>{trip.to}</td>

<td>{trip.pickup}</td>

<td>{trip.return}</td>

<td>

<span
className={`status ${trip.status.toLowerCase()}`}
>

{trip.status}

</span>

</td>

<td>{trip.fare}</td>

</tr>

)

)}

</tbody>

</table>

</div>

);

};

export default MyTrips;