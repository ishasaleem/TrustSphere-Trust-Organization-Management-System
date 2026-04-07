import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const linkClass = ({ isActive }) =>
    `flex items-center px-3 py-2 rounded-lg transition ${
      isActive
        ? "bg-primary text-white fw-semibold"
        : "text-white opacity-75 hover:opacity-100 hover:bg-secondary"
    }`;

  return (
    <div
      className="p-3 text-white shadow-lg d-flex flex-column bg-dark"
      style={{
        width: "260px",
        minHeight: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
      }}
    >
      {/* BRAND */}
      <h3 className="mb-4 fw-bold text-primary">
        TrustSphere
      </h3>

      <p className="mb-4 text-secondary small">
        Admin Dashboard Panel
      </p>

      {/* NAV */}
      <nav className="gap-2 nav flex-column">

        <NavLink to="/dashboard" className={linkClass}>
          📊 Dashboard
        </NavLink>

        <NavLink to="/donations" className={linkClass}>
          💰 Donations
        </NavLink>

        <NavLink to="/beneficiaries" className={linkClass}>
          👥 Beneficiaries
        </NavLink>

        <NavLink to="/events" className={linkClass}>
          📅 Events
        </NavLink>

        <NavLink to="/search" className={linkClass}>
          🔍 Search & Filter
        </NavLink>

        <NavLink to="/settings" className={linkClass}>
          ⚙ Settings
        </NavLink>

      </nav>

      {/* FOOTER USER */}
      <div className="pt-4 mt-auto border-top border-secondary">

        <div className="gap-2 d-flex align-items-center">

          <div
            className="rounded-circle bg-primary"
            style={{ width: 38, height: 38 }}
          />

          <div>
            <div className="fw-semibold">Admin</div>
            <small className="text-secondary">Online</small>
          </div>

        </div>

      </div>
    </div>
  );
}