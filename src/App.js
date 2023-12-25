import "./App.css";
import { useState } from "react";
import Details from "./Components/Details";
import Calendar from "./Components/Calendar";
import TimeZone from "./Components/TimeZone";
import readme from "./README.md"

// App component
export default function App() {
  const [showDetails, setShowDetails] = useState(false);
  const [data, setData] = useState(null);
  const [selectedTimeZone, setSelectedTimeZone] = useState('UTC');
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleTimeZoneChange = (newTimeZone) => {
    setSelectedTimeZone(newTimeZone);
  };


const handleDateChange = (date) => {
  setSelectedDate(date); // Add this line to update the state
};

  const showDetailsHandle = (dayStr) => {
    setData(dayStr);
    setShowDetails(true);
  };

  return (
    <div className="App">

      <h1>Assignment of Weekly calendar in React</h1>
      <h4>BY :Vinay Kaushik</h4>

      <a href={readme} download={readme}><button>Download Readme of my Assignment</button></a>
      

      <br />
      <h2>Example</h2>
      <TimeZone
  selectedTimeZone={selectedTimeZone}
  onTimeZoneChange={handleTimeZoneChange}
  onDateChange={handleDateChange} // Pass the function here
/>      <Calendar showDetailsHandle={showDetailsHandle} selectedTimeZone={selectedTimeZone} selectedDateProp={selectedDate} />
      <br />
      {showDetails && <Details data={data} />}
    </div>
  );
}
