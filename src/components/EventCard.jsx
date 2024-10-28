import React from 'react';
import './EventCard.css';

const EventCard = ({ event, onClick }) => (
  <div className="event-card" onClick={() => onClick(event)}>
    <h2>{event.name}</h2>
    <p>{event.date} - {event.location}</p>
  </div>
);

export default EventCard;
