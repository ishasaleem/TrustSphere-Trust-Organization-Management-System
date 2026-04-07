import { useState } from "react";
import { useApp } from "../context/useApp";

export default function EventPage() {
  const { events = [], addEvent, deleteEvent, updateEvent } = useApp();

  const [form, setForm] = useState({
    id: null,
    title: "",
    date: "",
    location: "",
    description: "",
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setForm({
      id: null,
      title: "",
      date: "",
      location: "",
      description: "",
    });
    setIsEditing(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.title.trim() || !form.date.trim()) return;

    if (isEditing) {
      updateEvent(form);
    } else {
      addEvent({ ...form, id: Date.now() });
    }

    resetForm();
  };

  const handleEdit = (event) => {
    setForm(event);
    setIsEditing(true);
  };

  return (
    <div
      className="py-5 min-vh-100"
      style={{
        background: "linear-gradient(135deg, #eef2ff, #ecfeff)",
      }}
    >
      <div className="container">

        {/* HEADER */}
        <div className="mb-4">
          <h2 className="fw-bold text-primary">📅 Event Management</h2>
          <p className="text-muted">
            Create, manage, and track trust events in one place
          </p>
        </div>

        {/* FORM */}
        <div
          className="p-4 mb-4 rounded-4"
          style={{
            background: "rgba(255,255,255,0.9)",
            backdropFilter: "blur(12px)",
            boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
          }}
        >
          <form onSubmit={handleSubmit}>
            <div className="row g-3 align-items-end">

              <div className="col-md-3">
                <label className="form-label fw-semibold">Title</label>
                <input
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Medical Camp"
                />
              </div>

              <div className="col-md-2">
                <label className="form-label fw-semibold">Date</label>
                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>

              <div className="col-md-3">
                <label className="form-label fw-semibold">Location</label>
                <input
                  name="location"
                  value={form.location}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Lahore"
                />
              </div>

              <div className="col-md-3">
                <label className="form-label fw-semibold">Description</label>
                <input
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Event details"
                />
              </div>

              <div className="gap-2 col-md-1 d-flex">
                <button
                  className="text-white btn w-100"
                  style={{
                    background: isEditing
                      ? "linear-gradient(135deg, #f59e0b, #ef4444)"
                      : "linear-gradient(135deg, #4f46e5, #06b6d4)",
                    border: "none",
                  }}
                >
                  {isEditing ? "Update" : "+"}
                </button>

                {isEditing && (
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={resetForm}
                  >
                    X
                  </button>
                )}
              </div>

            </div>
          </form>
        </div>

        {/* EVENT LIST */}
        <div
          className="p-3 rounded-4"
          style={{
            background: "rgba(255,255,255,0.9)",
            backdropFilter: "blur(12px)",
            boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
          }}
        >
          <h5 className="mb-3 fw-bold">📋 Event Schedule</h5>

          {events.length === 0 ? (
            <div className="py-5 text-center text-muted">
              <h6>No events yet</h6>
              <small>Add your first event above</small>
            </div>
          ) : (
            <div className="row g-3">
              {events.map((e) => (
                <div className="col-md-6" key={e.id}>
                  <div
                    className="p-3 rounded-4 h-100"
                    style={{
                      background: "#fff",
                      borderLeft: "5px solid #4f46e5",
                      boxShadow: "0 8px 20px rgba(0,0,0,0.06)",
                    }}
                  >
                    <div className="d-flex justify-content-between">
                      <div>
                        <h5 className="mb-1 fw-bold">{e.title}</h5>

                        <span className="badge bg-primary-subtle text-primary me-2">
                          📅 {e.date}
                        </span>

                        <span className="badge bg-success-subtle text-success">
                          📍 {e.location}
                        </span>
                      </div>

                      <div className="gap-2 d-flex">
                        <button
                          className="btn btn-sm btn-outline-primary"
                          onClick={() => handleEdit(e)}
                        >
                          Edit
                        </button>

                        <button
                          className="btn btn-sm btn-outline-danger"
                          onClick={() => deleteEvent(e.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>

                    <p className="mt-3 mb-0 text-muted">
                      {e.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}