import { useEffect, useState } from "react";
import axios from "axios";
import SummaryCards from "./SummaryCards";
import "../Dashboard.css";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

function EventTooltip({ active, payload }) {
  if (active && payload && payload.length) {
    const data = payload[0].payload;

    return (
      <div
        style={{
          background: "white",
          padding: "10px",
          border: "1px solid #ccc",
          borderRadius: "8px",
        }}
      >
        <h4>{data.Event ? data.Event : "Brent Oil Price"}</h4>
        <p>Date: {data.Date}</p>
      </div>
    );
  }

  return null;
}

function PriceChart() {
  const [prices, setPrices] = useState([]);
  const [changePoint, setChangePoint] = useState(null);
  const [events, setEvents] = useState([]);

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  

  useEffect(() => {
    // Get prices
   axios.get("http://127.0.0.1:5000/prices").then((response) => {

  const importantDates = [
    "1989-05-25",
    "2008-09-15",
    "2014-11-27",
    "2020-03-09",
    "2022-02-24"
  ];


  const sampled = response.data.filter(
    (item, index) =>
      index % 20 === 0 ||
      importantDates.includes(item.Date)
  );


  setPrices(sampled);

});
    

    // Get change point
    axios.get("http://127.0.0.1:5000/change-points").then((response) => {
      console.log("Change Point:", response.data);

      setChangePoint(response.data[0].Date.substring(0, 10));
    });

        // Get events
    axios
      .get("http://127.0.0.1:5000/events")
      .then((response) => {

        console.log("Events:", response.data);

        setEvents(response.data);

      });


  }, []);
  
  const filteredPrices = prices.filter((item) => {
    if (!startDate && !endDate) return true;

    const date = item.Date;

    if (startDate && date < startDate) return false;

    if (endDate && date > endDate) return false;

    return true;
  });

  const chartData = filteredPrices.map((price) => {
    const event = events.find((e) => e.Date === price.Date);

    return {
      ...price,
      Event: event ? event.Event : null,
    };
  });

 return (
   <div className="dashboard">
     <h1 className="dashboard-main-title">
       🛢 Brent Oil Change Point Dashboard
     </h1>

     <p className="dashboard-subtitle">
       Bayesian change point detection and historical Brent oil events
     </p>

     <SummaryCards prices={prices} changePoint={changePoint} events={events} />

     <div className="filter-container">
       <label>Start Date:</label>

       <input
         type="date"
         value={startDate}
         onChange={(e) => setStartDate(e.target.value)}
       />

       <label>End Date:</label>

       <input
         type="date"
         value={endDate}
         onChange={(e) => setEndDate(e.target.value)}
       />
     </div>

     <h2 className="dashboard-title">Brent Oil Price History</h2>

     <div className="chart-container">
       <ResponsiveContainer width="100%" height={400}>
         <LineChart data={chartData}>
           <CartesianGrid />

           <XAxis dataKey="Date" />

           <YAxis />

           <Tooltip content={<EventTooltip />} />

           {changePoint && <ReferenceLine x={changePoint} stroke="red" />}

           {events.map((event, index) => (
             <ReferenceLine key={index} x={event.Date} stroke="green" />
           ))}

           <Line type="monotone" dataKey="Price" stroke="blue" dot={false} />
         </LineChart>
       </ResponsiveContainer>
     </div>
   </div>
 );
}

export default PriceChart;
