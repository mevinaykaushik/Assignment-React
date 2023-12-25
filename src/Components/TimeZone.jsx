import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment-timezone';

const TimeZone = ({ selectedTimeZone, onTimeZoneChange, onDateChange }) => {
    const [selectedDateTime, setSelectedDateTime] = useState(moment().tz(selectedTimeZone));
  
    const handleTimeZoneChange = (event) => {
      const newTimeZone = event.target.value;
      onTimeZoneChange(newTimeZone);
      setSelectedDateTime(moment().tz(newTimeZone));
    };
  
    const handleDateTimeChange = (date) => {
        setSelectedDateTime(moment(date).tz(selectedTimeZone));
        onDateChange(date); // Notify the parent component about the selected date
      };
  return (
    <div>
      <label>
        Select Time Zone:
        <select value={selectedTimeZone} onChange={handleTimeZoneChange}>
          <option value="UTC">UTC</option>
          <option value="America/New_York">America/New_York</option>
          <option value="Europe/London">Europe/London</option>
          <option value="Asia/Tokyo">Asia/Tokyo</option>
          {/* Add more time zones as needed */}
        </select>
      </label>

      <br />

      <label>
        Select Date and Time:
        <DatePicker
          selected={selectedDateTime.toDate()}
          onChange={handleDateTimeChange}
          showTimeSelect
          dateFormat="MMMM d, yyyy h:mm aa"
        />
      </label>

      <br />

      <b>
        Current Date and Time in {selectedTimeZone}: {selectedDateTime.format('MMMM D, YYYY h:mm A')}
      </b>
    </div>
  );
};

export default TimeZone;
