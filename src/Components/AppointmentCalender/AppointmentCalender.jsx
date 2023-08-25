import React, { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

const AppointmentCalender = ({setAppointmentDate}) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    console.log(date);
     const selectDate =  date['$d'];
     setAppointmentDate(selectDate)
  };

  return (
    <LocalizationProvider  dateAdapter={AdapterDayjs}>
      <DateCalendar 
       label="Select Date"
       value={selectedDate}
       onChange={handleDateChange}
      
      />
    </LocalizationProvider>
  );
};

export default AppointmentCalender;
