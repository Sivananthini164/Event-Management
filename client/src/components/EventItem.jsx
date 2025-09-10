import { Link } from "react-router-dom";

export default function EventItem({ event, onDelete }) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div>
        <strong>{event.title}</strong> <br />
        <small>{new Date(event.date).toLocaleDateString()} — {event.venue}</small>
      </div>
      <div>
        <Link to={`/edit/${event._id}`} className="btn btn-sm btn-outline-secondary me-2">Edit</Link>
        <button onClick={() => onDelete(event._id)} className="btn btn-sm btn-danger">Delete</button>
      </div>
    </li>
  );
}
