import React from 'react';
import anadolu from "../assets/anadolujet.png"
const FlightResultForm = () => {
  const flightData = [
    {
      id: 1,
      price: 2999,
      depart: "3/9/2023",
      arrival: "3/9/2023",
      departTime: "9:36 AM",
      arrivalTime: "9:01 AM",
      code: "TY-4545",
      flightImg: anadolu,
      from: {
        city: "Adana",
        short: "Adana Şakirpaşa Havalimanı (ADA)",
      },
      to: {
        city: "Amasya",
        short: "Merzifon Amasya Havalimanı (MZH)",
      },
     },
  
  ];

  return (
    <div className="flight-results">
      <h2>Flight Results</h2>
      <ul>
        {flightData.map((flight, index) => (
          <li key={index}>
            <div>
              <img src={anadolu} width={"70px"} height={"60px"} alt='logo'/>
              </div>
              <div >
              <li>{flight.departTime}</li>
              <li>{flight.from.short}</li>
              </div>
              <div>
              <li>{"->"}</li>
              </div>
              <div>
             <li>{flight.arrivalTime}</li>
              <li>{flight.to.short}</li>
              </div>
              
              <li>{flight.price}</li>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FlightResultForm