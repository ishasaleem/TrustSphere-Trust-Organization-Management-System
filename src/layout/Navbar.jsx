import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="px-3 py-2 bg-white shadow-sm navbar navbar-expand-lg">

      {/* BRAND */}
      <div className="navbar-brand fw-bold text-primary fs-4">
        TrustSphere
      </div>

      {/* TOGGLER */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navMenu"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* MENU */}
      <div className="collapse navbar-collapse" id="navMenu">

        <ul className="gap-2 navbar-nav me-auto">

          {[
            { to: "/dashboard", label: "Dashboard" },
            { to: "/donations", label: "Donations" },
            { to: "/beneficiaries", label: "Beneficiaries" },
            { to: "/events", label: "Events" },
          ].map((item, i) => (
            <li className="nav-item" key={i}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `nav-link px-3 py-1 rounded ${
                    isActive
                      ? "bg-primary text-white fw-semibold"
                      : "text-dark"
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}

        </ul>

        {/* RIGHT SIDE */}
        <div className="gap-3 d-flex align-items-center">

          <span className="px-3 py-2 badge bg-primary">
            Admin
          </span>

          <div
            className="rounded-circle bg-dark"
            style={{ width: 38, height: 38 }}
          ></div>

        </div>

      </div>
    </nav>
  );
}