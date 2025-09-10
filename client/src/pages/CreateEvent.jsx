import { useNavigate } from "react-router-dom";
import EventForm from "../components/EventForm";
import api from "../api";

export default function CreateEvent() {
  const navigate = useNavigate();

  const handleSubmit = async (form) => {
    try {
      await api.post("/events", form);
      alert("Event created successfully!");
      navigate("/");
    } catch (err) {
      alert(err.response?.data?.error || "Failed to create event");
    }
  };

  return (
    <div>
      <h2>Create Event</h2>
      <EventForm onSubmit={handleSubmit} />
    </div>
  );
}
