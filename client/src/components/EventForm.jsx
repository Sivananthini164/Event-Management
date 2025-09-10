import { useState, useEffect } from "react";

export default function EventForm({ initialData = {}, onSubmit }) {
  const [form, setForm] = useState({
    title: "",
    description: "",
    date: "",
    venue: "",
    capacity: "",
    status: "draft", //  default
    createdAt: "",
    updatedAt: ""
  });

 useEffect(() => {
  if (initialData && Object.keys(initialData).length > 0) {
    setForm({
      title: initialData.title || "",
      description: initialData.description || "",
      date: initialData.date ? initialData.date.split("T")[0] : "",
      venue: initialData.venue || "",
      capacity: initialData.capacity || "",
      status: initialData.status || "upcoming",
      createdAt: initialData.createdAt ? new Date(initialData.createdAt).toLocaleString() : "",
      updatedAt: initialData.updatedAt ? new Date(initialData.updatedAt).toLocaleString() : ""
    });
  }
}, [initialData]);


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { createdAt, updatedAt, ...dataToSubmit } = form;
    onSubmit(dataToSubmit);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Title */}
      <div className="mb-3">
        <label>Title</label>
        <input
          name="title"
          className="form-control"
          value={form.title}
          onChange={handleChange}
          required
        />
      </div>

      {/* Description */}
      <div className="mb-3">
        <label>Description</label>
        <textarea
          name="description"
          className="form-control"
          value={form.description}
          onChange={handleChange}
        ></textarea>
      </div>

      {/* Date */}
      <div className="mb-3">
        <label>Date</label>
        <input
          type="date"
          name="date"
          className="form-control"
          value={form.date}
          onChange={handleChange}
          required
        />
      </div>

      {/* Venue */}
      <div className="mb-3">
        <label>Venue</label>
        <input
          name="venue"
          className="form-control"
          value={form.venue}
          onChange={handleChange}
        />
      </div>


      {/* Capacity */}
      <div className="mb-3">
        <label>Capacity</label>
        <input
          type="number"
          name="capacity"
          className="form-control"
          value={form.capacity}
          onChange={handleChange}
        />
      </div>

      {/* Status dropdown */}
      <div className="mb-3">
        <label>Status</label>
        <select
          name="status"
          className="form-select"
          value={form.status}
          onChange={handleChange}
        >
          <option value="draft">Draft</option>
          <option value="published">Published</option>
          <option value="cancelled">Cancelled</option>
        </select>
      </div>

      {/* Created At (read-only) */}
      {form.createdAt && (
        <div className="mb-3">
          <label>Created At</label>
          <input
            type="text"
            className="form-control"
            value={form.createdAt}
            disabled
          />
        </div>
      )}

      {/* Updated At (read-only) */}
      {form.updatedAt && (
        <div className="mb-3">
          <label>Updated At</label>
          <input
            type="text"
            className="form-control"
            value={form.updatedAt}
            disabled
          />
        </div>
      )}

      <button type="submit" className="btn btn-success">Save</button>
    </form>
  );
}
