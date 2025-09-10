import { useEffect, useState } from "react";
import api from "../api";
import EventItem from "../components/EventItem";

export default function EventList() {
  const [events, setEvents] = useState([]);
  const [search, setSearch] = useState("");

  const fetchEvents = async () => {
    const res = await api.get(`/events?q=${search}`);
    setEvents(res.data);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this event?")) return;
    await api.delete(`/events/${id}`);
    setEvents(events.filter((e) => e._id !== id));
  };

  return (
    <div>
      <h2>Events</h2>
      <div className="mb-3">
        <input
          placeholder="Search by title or venue..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="form-control"
        />
        <button onClick={fetchEvents} className="btn btn-outline-primary mt-2">Search</button>
      </div>
      <ul className="list-group">
        {events.map((event) => (
          <EventItem key={event._id} event={event} onDelete={handleDelete} />
        ))}
      </ul>
    </div>
  );
}
