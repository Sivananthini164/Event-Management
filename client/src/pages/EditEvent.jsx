import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import EventForm from "../components/EventForm";
import api from "../api";

export default function EditEvent() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    api.get(`/events/${id}`).then((res) => setEvent(res.data));
  }, [id]);

  const handleSubmit = async (form) => {
    try {
      await api.put(`/events/${id}`, form);
      alert("Event updated successfully!");
      navigate("/");
    } catch (err) {
      alert(err.response?.data?.error || "Failed to update event");
    }
  };

  if (!event) return <p>Loading...</p>;

  return (
    <div>
      <h2>Edit Event</h2>
      <EventForm initialData={event} onSubmit={handleSubmit} />
    </div>
  );
}
