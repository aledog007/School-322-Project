import React, { useState } from "react";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import EventExamples from "./components/EventExamples.jsx";
import EventForm from "./components/EventForm";
import EventHome from "./components/EventHome";
import EventList from "./components/EventList";
import './css/mvp.css';

/**
 * App component
 * @author Peter Rutschmann
 * @returns {Element}
 * @constructor
 */
const App = () => {
    const [events, setEvents] = useState([
        {
            name: "Freiluft Kino",
            type: "Outdoor",
            public: true,
            participants: 150,
        }
    ]);

    const addEvent = (newEvent) => {
        setEvents([...events, newEvent]);
    };

    return (
            <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
                <h1>Event-Planer</h1>
                {/*für die Navigation (aussehen)*/}
                <Router>
                <nav>
                    <ul style={{ listStyle: "none", padding: 0 }}>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/examples">Examples</Link>
                        </li>
                        <li>
                            <Link to="/add-event">Add Event</Link>
                        </li>
                        <li>
                            <Link to="/event-list">Event List</Link>
                        </li>
                    </ul>
                </nav>
                <hr />

                {/*für die Routes logik mit React Router*/}
                <Routes>
                    <Route path="/" element={<EventHome />} />
                    <Route path="/examples" element={<EventExamples />} />
                    <Route path="/add-event" element={<EventForm onAddEvent={addEvent} />} />
                    <Route path="/event-list" element={<EventList events={events} />} />
                </Routes>
            </Router>
            </div>
    );
};

export default App;
