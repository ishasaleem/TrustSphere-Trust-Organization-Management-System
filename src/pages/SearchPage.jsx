import { useMemo, useState } from "react";
import { useApp } from "../context/useApp";

export default function SearchPage() {
  const { donations = [], beneficiaries = [], events = [] } = useApp();

  const [query, setQuery] = useState("");
  const [type, setType] = useState("all");

  // ---------------- NORMALIZE DATA ----------------
  const allData = useMemo(() => {
    let data = [];

    if (type === "all" || type === "donations") {
      data.push(
        ...donations.map((d) => ({
          id: d.id,
          type: "Donation",
          title: d.donorName,
          meta: `${d.amount || ""} ${d.purpose || ""}`,
        }))
      );
    }

    if (type === "all" || type === "beneficiaries") {
      data.push(
        ...beneficiaries.map((b) => ({
          id: b.id,
          type: "Beneficiary",
          title: b.name,
          meta: `${b.category || ""} ${b.location || ""}`,
        }))
      );
    }

    if (type === "all" || type === "events") {
      data.push(
        ...events.map((e) => ({
          id: e.id,
          type: "Event",
          title: e.title,
          meta: `${e.date || ""} ${e.location || ""} ${e.description || ""}`,
        }))
      );
    }

    return data;
  }, [donations, beneficiaries, events, type]);

  // ---------------- SEARCH FILTER ----------------
  const results = useMemo(() => {
    if (!query.trim()) return allData;

    return allData.filter((item) =>
      (item.title + " " + item.meta)
        .toLowerCase()
        .includes(query.toLowerCase())
    );
  }, [query, allData]);

  // ---------------- UI COLOR ----------------
  const getBadgeColor = (type) => {
    switch (type) {
      case "Donation":
        return "#4f46e5";
      case "Beneficiary":
        return "#10b981";
      case "Event":
        return "#f59e0b";
      default:
        return "#6b7280";
    }
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
          <h2 className="fw-bold text-primary">🔍 Smart Search Engine</h2>
          <p className="text-muted">
            Search donations, beneficiaries, and events instantly
          </p>
        </div>

        {/* SEARCH BOX */}
        <div
          className="p-4 mb-4 rounded-4"
          style={{
            background: "rgba(255,255,255,0.9)",
            backdropFilter: "blur(12px)",
            boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
          }}
        >
          <div className="row g-3">

            <div className="col-md-8">
              <input
                className="form-control form-control-lg"
                placeholder="Search anything..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>

            <div className="col-md-4">
              <select
                className="form-select form-select-lg"
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="all">🌐 All Data</option>
                <option value="donations">💰 Donations</option>
                <option value="beneficiaries">👥 Beneficiaries</option>
                <option value="events">📅 Events</option>
              </select>
            </div>

          </div>
        </div>

        {/* RESULTS */}
        <div
          className="p-3 rounded-4"
          style={{
            background: "rgba(255,255,255,0.9)",
            backdropFilter: "blur(12px)",
            boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
          }}
        >
          {results.length === 0 ? (
            <div className="py-5 text-center text-muted">
              <h5>No results found</h5>
              <small>Try different keywords</small>
            </div>
          ) : (
            <div className="row g-3">
              {results.map((item) => (
                <div className="col-md-6" key={item.id}>
                  <div
                    className="p-3 rounded-4 h-100"
                    style={{
                      borderLeft: `5px solid ${getBadgeColor(item.type)}`,
                      background: "#fff",
                      boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
                    }}
                  >
                    <div className="d-flex justify-content-between">
                      <h5 className="mb-1 fw-bold">{item.title}</h5>

                      <span
                        className="badge"
                        style={{
                          background: getBadgeColor(item.type),
                          color: "white",
                        }}
                      >
                        {item.type}
                      </span>
                    </div>

                    <p className="mb-0 text-muted">{item.meta}</p>
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