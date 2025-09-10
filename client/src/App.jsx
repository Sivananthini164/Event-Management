import { Routes, Route, Link } from "react-router-dom";
import EventList from "./pages/EventList";
import CreateEvent from "./pages/CreateEvent";
import EditEvent from "./pages/EditEvent";

export default function App() {
  return (
    <div className="container mt-4">
      <nav className="mb-3">
        <Link to="/" className="btn btn-outline-primary me-2">Events</Link>
        <Link to="/create" className="btn btn-primary">Create Event</Link>
      </nav>

      <Routes>
        <Route path="/" element={<EventList />} />
        <Route path="/create" element={<CreateEvent />} />
        <Route path="/edit/:id" element={<EditEvent />} />
      </Routes>
    </div>
  );
}
