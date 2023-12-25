# Week View Calendar Project

## Overview

This project implements a Week View Calendar application with React. It includes features like time zone selection, date picking, and event display for each day. The application allows users to navigate between weeks and view details for specific dates.

## Author

Vinay Kaushik

## Components

### 1. App Component (App.js)

- **State:**
  - `showDetails`: Manages whether to show the details component or not.
  - `data`: Holds the data to be displayed in the details component.
  - `selectedTimeZone`: Keeps track of the selected time zone.
  - `selectedDate`: Represents the selected date for the calendar.

- **Functions:**
  - `handleTimeZoneChange(newTimeZone)`: Updates the selected time zone.
  - `handleDateChange(date)`: Updates the selected date.
  - `showDetailsHandle(dayStr)`: Displays details for the selected day.

- **Rendering:**
  - Displays the main heading.
  - Renders the `TimeZone` component with appropriate props.
  - Renders the `Calendar` component with appropriate props.
  - Conditionally renders the `Details` component based on `showDetails` state.

### 2. TimeZone Component (TimeZone.js)

- **State:**
  - `selectedDateTime`: Keeps track of the selected date and time in the chosen time zone.

- **Functions:**
  - `handleTimeZoneChange(event)`: Handles the change in the selected time zone.
  - `handleDateTimeChange(date)`: Handles the change in the selected date and time.

- **Rendering:**
  - Provides a dropdown to select the time zone.
  - Displays a date picker for selecting date and time.
  - Shows the current date and time in the selected time zone.

### 3. Calendar Component (Calendar.js)

- **State:**
  - `currentMonth`: Represents the currently displayed month in the calendar.
  - `currentWeek`: Represents the currently displayed week in the calendar.

- **Functions:**
  - `changeWeekHandle(btnType)`: Changes the currently displayed week based on the button type (prev/next).
  - `onDateClickHandle(day, dayStr)`: Handles the click on a date cell, triggering the `showDetailsHandle` function.

- **Rendering:**
  - Displays the calendar header with the current month.
  - Renders the days of the week.
  - Renders the date cells for the current month.
  - Highlights the current day and the selected day.
  - Shows events for each date.
  - Provides navigation to the previous and next weeks.

### 4. Details Component (Details.js)

- **Props:**
  - `data`: Receives the data to be displayed.

- **Rendering:**
  - Displays the details of the selected date.

## Getting Started

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Start the application with `npm start`.
4. Open your browser and navigate to `http://localhost:3000`.

## Dependencies

- React
- react-datepicker
- date-fns
- moment-timezone

## Author

Vinay Kaushik

Feel free to explore and customize the project according to your needs!