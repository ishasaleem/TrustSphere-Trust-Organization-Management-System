import { useState } from "react";
import { useApp } from "../context/useApp";

export default function BeneficiaryPage() {
  const {
    beneficiaries,
    addBeneficiary,
    deleteBeneficiary,
    updateBeneficiary, // ✅ ADD THIS in your context
  } = useApp();

  const [form, setForm] = useState({
    name: "",
    category: "",
    supportType: "",
  });

  const [editId, setEditId] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ EDIT CLICK
  const handleEdit = (b) => {
    setForm({
      name: b.name,
      category: b.category,
      supportType: b.supportType,
    });
    setEditId(b.id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name) return;

    if (editId) {
      // ✅ UPDATE MODE
      updateBeneficiary(editId, form);
      setEditId(null);
    } else {
      // ✅ ADD MODE
      addBeneficiary(form);
    }

    // reset form
    setForm({
      name: "",
      category: "",
      supportType: "",
    });
  };

  const handleCancelEdit = () => {
    setEditId(null);
    setForm({
      name: "",
      category: "",
      supportType: "",
    });
  };

  return (
    <div className="py-5 min-vh-100" style={{ background: "linear-gradient(135deg, #eef2ff, #ecfeff)" }}>
      <div className="container">

        {/* HEADER */}
        <div className="mb-4">
          <h2 className="fw-bold text-primary">👥 Beneficiary Management</h2>
          <p className="text-muted">
            Manage supported individuals with structured tracking and transparency.
          </p>
        </div>

        {/* FORM */}
        <div className="p-4 mb-4 rounded-4" style={{
          background: "rgba(255,255,255,0.8)",
          backdropFilter: "blur(12px)",
          boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
        }}>
          <form onSubmit={handleSubmit}>
            <div className="row g-3 align-items-end">

              <div className="col-md-4">
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Beneficiary Name"
                />
              </div>

              <div className="col-md-3">
                <input
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Category"
                />
              </div>

              <div className="col-md-3">
                <input
                  name="supportType"
                  value={form.supportType}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Support Type"
                />
              </div>

              <div className="gap-2 col-md-2 d-flex">
                <button className="btn btn-primary w-100">
                  {editId ? "Update" : "+ Add"}
                </button>

                {editId && (
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={handleCancelEdit}
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
          <table className="table align-middle">
            <thead className="table-light">
              <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Support Type</th>
                <th className="text-end">Action</th>
              </tr>
            </thead>

            <tbody>
              {beneficiaries.length === 0 ? (
                <tr>
                  <td colSpan="4" className="py-5 text-center text-muted">
                    No beneficiaries yet
                  </td>
                </tr>
              ) : (
                beneficiaries.map((b) => (
                  <tr key={b.id}>
                    <td className="fw-semibold">{b.name}</td>
                    <td>{b.category}</td>
                    <td>{b.supportType}</td>

                    <td className="text-end">
                      <button
                        className="btn btn-sm btn-outline-primary me-2"
                        onClick={() => handleEdit(b)}
                      >
                        Edit
                      </button>

                      <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => deleteBeneficiary(b.id)}
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