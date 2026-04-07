import { useState } from "react";
import { useApp } from "../context/useApp";

export default function DonationPage() {
  const { donations, addDonation, deleteDonation, updateDonation } = useApp();

  const [form, setForm] = useState({
    donorName: "",
    amount: "",
    purpose: "",
    date: "",
  });

  const [editId, setEditId] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // EDIT CLICK
  const handleEdit = (d) => {
    setForm({
      donorName: d.donorName,
      amount: d.amount,
      purpose: d.purpose,
      date: d.date,
    });
    setEditId(d.id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.donorName || !form.amount) return;

    if (editId) {
      updateDonation(editId, form);
      setEditId(null);
    } else {
      addDonation(form);
    }

    setForm({
      donorName: "",
      amount: "",
      purpose: "",
      date: "",
    });
  };

  const cancelEdit = () => {
    setEditId(null);
    setForm({
      donorName: "",
      amount: "",
      purpose: "",
      date: "",
    });
  };

  return (
    <div className="py-5 min-vh-100" style={{ background: "linear-gradient(135deg, #eef2ff, #ecfeff)" }}>
      <div className="container">

        {/* HEADER */}
        <div className="mb-4">
          <h2 className="fw-bold text-primary">💰 Donation Management</h2>
          <p className="text-muted">
            Track and manage all incoming contributions in real time
          </p>
        </div>

        {/* FORM */}
        <div className="p-4 mb-4 rounded-4" style={{
          background: "rgba(255,255,255,0.85)",
          backdropFilter: "blur(12px)",
          boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
        }}>
          <form onSubmit={handleSubmit}>
            <div className="row g-3 align-items-end">

              <div className="col-md-3">
                <input
                  name="donorName"
                  value={form.donorName}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Donor Name"
                />
              </div>

              <div className="col-md-2">
                <input
                  name="amount"
                  value={form.amount}
                  onChange={handleChange}
                  type="number"
                  className="form-control"
                  placeholder="Amount"
                />
              </div>

              <div className="col-md-3">
                <input
                  name="purpose"
                  value={form.purpose}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Purpose"
                />
              </div>

              <div className="col-md-2">
                <input
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  type="date"
                  className="form-control"
                />
              </div>

              <div className="gap-2 col-md-2 d-flex">
                <button className="btn btn-primary w-100">
                  {editId ? "Update" : "+ Add"}
                </button>

                {editId && (
                  <button
                    type="button"
                    onClick={cancelEdit}
                    className="btn btn-secondary"
                  >
                    Cancel
                  </button>
                )}
              </div>

            </div>
          </form>
        </div>

        {/* TABLE */}
        <div className="p-3 rounded-4" style={{
          background: "rgba(255,255,255,0.85)",
          backdropFilter: "blur(12px)",
        }}>
          <h5 className="mb-3 fw-bold">📋 Donation Records</h5>

          <table className="table align-middle">
            <thead className="table-light">
              <tr>
                <th>Donor</th>
                <th>Amount</th>
                <th>Purpose</th>
                <th>Date</th>
                <th className="text-end">Action</th>
              </tr>
            </thead>

            <tbody>
              {donations.length === 0 ? (
                <tr>
                  <td colSpan="5" className="py-5 text-center text-muted">
                    No donations recorded
                  </td>
                </tr>
              ) : (
                donations.map((d) => (
                  <tr key={d.id}>
                    <td className="fw-semibold">{d.donorName}</td>
                    <td className="text-success fw-bold">Rs {d.amount}</td>
                    <td>{d.purpose || "General"}</td>
                    <td>{d.date}</td>

                    <td className="text-end">
                      <button
                        className="btn btn-sm btn-outline-primary me-2"
                        onClick={() => handleEdit(d)}
                      >
                        Edit
                      </button>

                      <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => deleteDonation(d.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>

        </div>

      </div>
    </div>
  );
}