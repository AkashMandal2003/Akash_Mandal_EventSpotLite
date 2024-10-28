import React, { useState } from 'react';
import Navbar from './components/Navbar';
import EventCard from './components/EventCard';
import EventModal from './components/EventModal';
import eventsData from './data/eventsData';
import './App.css';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedEvent, setSelectedEvent] = useState(null);

  const filteredEvents = eventsData.filter(
    (event) =>
      event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="App">
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="event-list">
        {filteredEvents.map((event) => (
          <EventCard key={event.id} event={event} onClick={setSelectedEvent} />
        ))}
      </div>
      {selectedEvent && (
        <EventModal
          isOpen={!!selectedEvent}
          onRequestClose={() => setSelectedEvent(null)}
          event={selectedEvent}
        />
      )}
    </div>
  );
};

export default App;
