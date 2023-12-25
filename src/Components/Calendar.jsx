import React, { useState ,useEffect} from 'react';
// import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {
  format,
  startOfWeek,
  addDays,
  isSameDay,
  lastDayOfWeek,
  getWeek,
  addWeeks,
  subWeeks
} from 'date-fns';

 const events = [
  
  {
    Id: 101,
    Name: "Meeting with Client",
    Date: "2023-12-25",
    Time: "14:30",
  },
  {
    Id: 111,
    Name: "Meeting with Client",
    Date: "2023-12-18",
    Time: "14:30",
  },
  {
    Id: 101,
    Name: " Client call",
    Date: "2023-12-20",
    Time: "04:30",
  },
  {
    Id: 112,
    Name: "Meeting  at office",
    Date: "2023-12-23",
    Time: "11:30",
  },
  {
    Id: 121,
    Name: "Meeting with Client",
    Date: "2023-12-25",
    Time: "14:30",
  },
  {
    Id: 192,
    Name: "Team Standup",
    Date: "2023-12-27",
    Time: "09:00",
  },
  {
    Id: 103,
    Name: "Team Standup",
    Date: "2023-12-27",
    Time: "09:00",
  },
  {
    Id: 114,
    Name: "Assignment",
    Date: "2023-12-26",
    Time: "09:00",
  },
  {
    Id: 115,
    Name: "Project submit",
    Date: "2023-12-28",
    Time: "15:00",
  },
  {
    Id: 116,
    Name: "Meetings",
    Date: "2023-12-29",
    Time: "12:30",
  },
  {
    Id: 117,
    Name: " Colleagues Party",
    Date: "2023-12-31",
    Time: "01:30",
  },
  {
    Id: 118,
    Name: "Lunch with Colleagues",
    Date: "2023-12-30",
    Time: "12:30",
  },

  {
    Id: 105,
    Name: "Product Launch",
    Date: "2024-01-01",
    Time: "15:45",
  },
  {
    Id: 106,
    Name: "Team Workshop",
    Date: "2024-01-08",
    Time: "12:00",
  },
  {
    Id: 107,
    Name: "Budget Review",
    Date: "2024-01-05",
    Time: "10:00",
  },
  {
    Id: 108,
    Name: "Interviews",
    Date: "2024-01-03",
    Time: "09:30",
  },
 
  {
    Id: 109,
    Name: "Project Retrospective",
    Date: "2023-11-25",
    Time: "18:30",
  },
  {
    Id: 110,
    Name: "Training Session",
    Date: "2023-11-27",
    Time: "11:15",
  },
  {
    Id: 111,
    Name: "Client Presentation",
    Date: "2023-11-20",
    Time: "14:00",
  },
  {
    Id: 112,
    Name: "Networking Event",
    Date: "2023-11-28",
    Time: "19:00",
  },
 
];


const Calendar = ({ showDetailsHandle, selectedTimeZone , selectedDateProp }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [currentWeek, setCurrentWeek] = useState(getWeek(currentMonth));

  // Use the selectedDate prop to determine the current week
  const [currentWeekFromProp, setCurrentWeekFromProp] = useState(getWeek(currentMonth));

  useEffect(() => {
    // Update currentWeek based on selectedDate prop
    const selectedDate = new Date(currentMonth);
    setCurrentWeekFromProp(getWeek(selectedDate));
  }, [currentMonth]);

  const changeWeekHandle = (btnType) => {
    if (btnType === 'prev') {
      setCurrentMonth(subWeeks(currentMonth, 1));
      setCurrentWeek(getWeek(subWeeks(currentMonth, 1)));
    }
    if (btnType === 'next') {
      setCurrentMonth(addWeeks(currentMonth, 1));
      setCurrentWeek(getWeek(addWeeks(currentMonth, 1)));
    }
  };

  const onDateClickHandle = (day, dayStr) => {
    // Use selectedDateProp directly without trying to set its state
    showDetailsHandle(dayStr);
  };

  const renderHeader = () => {
    const dateFormat = "MMM yyyy";
    // console.log("selected day", selectedDate);
    return (
      <div className="header row flex-middle">
        <div className="col col-start">
          {/* <div className="icon" onClick={() => changeMonthHandle("prev")}>
            prev month
          </div> */}
        </div>
        <div className="col col-center">
          <span>{format(currentMonth, dateFormat)}</span>
        </div>
        <div className="col col-end">
          {/* <div className="icon" onClick={() => changeMonthHandle("next")}>next month</div> */}
        </div>
      </div>
    );
  };
  const renderDays = () => {
    const dateFormat = 'EEE';
    const days = [];
    let startDate = startOfWeek(currentMonth, { weekStartsOn: 1 });
    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="col col-center" key={i}>
          {format(addDays(startDate, i), dateFormat)}
        </div>
      );
    }
    return <div className="days row">{days}</div>;
  };

  const renderCells = () => {
    const startDate = startOfWeek(currentMonth, { weekStartsOn: 1 });
    const endDate = lastDayOfWeek(currentMonth, { weekStartsOn: 1 });
    const dateFormat = 'd';
    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = '';

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, dateFormat);
        const cloneDay = day;

        const eventsForDate = events.filter(
          (event) => isSameDay(cloneDay, new Date(event.Date))
        );

        days.push(
          <div
            className={`col cell ${
              isSameDay(day, new Date())
                ? 'today'
                : isSameDay(day, selectedDateProp) ? 'selected' : ''

                ? 'selected'
                : ''
            }`}
            key={day}
            onClick={() => {
              const dayStr = format(cloneDay, 'ccc dd MMM yy');
              onDateClickHandle(cloneDay, dayStr);
            }}
          >
            <span className="number">{formattedDate}</span>
            <span className="bg">{formattedDate}</span>

            <div className="events">
              {eventsForDate.map((event) => (
                <div key={event.Id} className="event">
                  <span>{event.Time}</span>
                  <span>{event.Name}</span>
                </div>
              ))}
            </div>
          </div>
        );
        day = addDays(day, 1);
      }

      rows.push(
        <div className="row" key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return <div className="body">{rows}</div>;
  };

  const renderFooter = () => {
    return (
      <div className="header row flex-middle">
        <div className="col col-start">
          <div className="icon" onClick={() => changeWeekHandle('prev')}>
            Previous Week
          </div>
        </div>
        <div>Week number : {currentWeek}</div>
        <div className="col col-end" onClick={() => changeWeekHandle('next')}>
          <div className="icon">Next Week</div>
        </div>
      </div>
    );
  };

  return (
    <div className="calendar">
      {renderHeader()}
      {renderDays()}
      {renderCells()}
      {renderFooter()}
    </div>
  );
};

export default Calendar;
