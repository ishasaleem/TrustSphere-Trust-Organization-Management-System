import { Link } from "react-router-dom";
import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function LandingPage() {
  const [darkMode, setDarkMode] = useState(false);

  const data = [
    { name: "Jan", donations: 400 },
    { name: "Feb", donations: 900 },
    { name: "Mar", donations: 650 },
    { name: "Apr", donations: 1200 },
  ];

  return (
    <div
      className="min-vh-100"
      style={{
        background: darkMode
          ? "linear-gradient(135deg, #0f172a, #1e293b)"
          : "linear-gradient(135deg, #eef2ff, #e0f2fe)",
        transition: "0.4s ease",
      }}
    >
      <div className="container py-5">

        {/* TOP BAR */}
        <div className="mb-5 d-flex justify-content-between align-items-center">
          <h3 className="fw-bold text-primary">🌍 TrustSphere</h3>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-3 btn btn-sm btn-dark rounded-pill"
          >
            {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>

        {/* HERO */}
        <div className="row align-items-center g-5">

          {/* LEFT */}
          <div className="col-lg-6">
            <div
              className="p-4 rounded-4"
              style={{
                background: darkMode
                  ? "rgba(15,23,42,0.7)"
                  : "rgba(255,255,255,0.7)",
                backdropFilter: "blur(12px)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                color: darkMode ? "white" : "black",
              }}
            >
              <h1 className="fw-bold display-5">
                Transparent{" "}
                <span className="text-primary">Trust Management</span>
              </h1>

              <p className="mt-3 lead">
                Manage donations, beneficiaries, events, and volunteers with
                clarity and modern analytics.
              </p>

              <div className="flex-wrap gap-3 mt-4 d-flex">
                <Link
                  to="/dashboard"
                  className="px-4 btn btn-primary btn-lg rounded-pill"
                >
                  🚀 Enter Dashboard
                </Link>

                <a
                  href="#features"
                  className="px-4 btn btn-outline-primary btn-lg rounded-pill"
                >
                  ✨ Explore Features
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="col-lg-6">
            <div
              className="p-4 rounded-4"
              style={{
                background: darkMode
                  ? "rgba(15,23,42,0.7)"
                  : "rgba(255,255,255,0.8)",
                backdropFilter: "blur(12px)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
              }}
            >
              <h5 className="mb-3 fw-bold">📊 Donation Growth Insight</h5>

              <div style={{ width: "100%", height: 260 }}>
                <ResponsiveContainer>
                  <LineChart data={data}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="donations"
                      stroke="#6366f1"
                      strokeWidth={3}
                      dot={{ r: 5 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>

        {/* FEATURES */}
        <div id="features" className="pt-5 mt-5">
          <h2 className="mb-5 text-center fw-bold text-primary">
            ✨ Powerful Features
          </h2>

          <div className="row g-4">
            {[
              {
                title: "💰 Donation Tracking",
                desc: "Real-time monitoring of all donations.",
                color: "#4f46e5",
              },
              {
                title: "👥 Beneficiaries",
                desc: "Organized records of supported people.",
                color: "#06b6d4",
              },
              {
                title: "📅 Smart Events",
                desc: "Schedule and manage activities easily.",
                color: "#f59e0b",
              },
            ].map((item, i) => (
              <div className="col-md-4" key={i}>
                <div
                  className="p-4 rounded-4 h-100"
                  style={{
                    background: darkMode
                      ? "rgba(15,23,42,0.7)"
                      : "rgba(255,255,255,0.85)",
                    backdropFilter: "blur(10px)",
                    borderLeft: `6px solid ${item.color}`,
                    boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
                    color: darkMode ? "white" : "black",
                  }}
                >
                  <h5 className="fw-bold">{item.title}</h5>
                  <p className="mb-0 opacity-75">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}