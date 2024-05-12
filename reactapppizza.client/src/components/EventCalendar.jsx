import React from 'react';
import { Calendar as BigCalendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';



const EventCalendar = ({ localizer, events }) => (
    <BigCalendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
    />
);

export default EventCalendar;