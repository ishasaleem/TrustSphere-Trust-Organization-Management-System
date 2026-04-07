/* eslint-disable react-hooks/purity */
import { useApp } from "../context/useApp";
import { useNavigate } from "react-router-dom";
import { useMemo } from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
} from "recharts";

export default function DashboardPage() {
  const { donations = [], beneficiaries = [], events = [] } = useApp();
  const navigate = useNavigate();

  // ---------------- KPI DATA ----------------
  const totalDonations = useMemo(() => {
    return donations.reduce((sum, d) => sum + Number(d.amount || 0), 0);
  }, [donations]);

  const totalBeneficiaries = beneficiaries.length;
  const totalEvents = events.length;

  const avgDonation = donations.length
    ? Math.floor(totalDonations / donations.length)
    : 0;

  // ---------------- UPCOMING EVENTS ----------------
  const upcomingEvents = useMemo(() => {
    return [...events]
      .filter((e) => e?.date && !isNaN(new Date(e.date)))
      .sort((a, b) => new Date(a.date) - new Date(b.date))
      .slice(0, 3);
  }, [events]);

  // ---------------- RECENT ACTIVITY ----------------
  const recentActivity = useMemo(() => {
    const donationLogs = donations.slice(-3).map((d) => ({
      text: `💰 Donation from ${d.donorName || "Unknown"}`,
      time: d.date ? new Date(d.date).getTime() : Date.now(),
    }));

    const eventLogs = events.slice(-2).map((e) => ({
      text: `📅 Event created: ${e.title || "Untitled"}`,
      time: e.date ? new Date(e.date).getTime() : Date.now(),
    }));

    return [...donationLogs, ...eventLogs].sort((a, b) => b.time - a.time);
  }, [donations, events]);

  // ---------------- CHART DATA ----------------
  const donationTrend = useMemo(() => {
    const map = {};

    donations.forEach((d) => {
      const date = new Date(d.date || Date.now());
      if (isNaN(date)) return;

      const key = date.toLocaleString("default", { month: "short" });
      map[key] = (map[key] || 0) + Number(d.amount || 0);
    });

    return Object.entries(map).map(([month, amount]) => ({
      month,
      amount,
    }));
  }, [donations]);

  const eventsTrend = useMemo(() => {
    const map = {};

    events.forEach((e) => {
      const date = new Date(e.date);
      if (isNaN(date)) return;

      const key = date.toLocaleString("default", { month: "short" });
      map[key] = (map[key] || 0) + 1;
    });

    return Object.entries(map).map(([month, count]) => ({
      month,
      count,
    }));
  }, [events]);

  // ---------------- FORMAT ----------------
  const formatCurrency = (num) =>
    new Intl.NumberFormat("en-PK", {
      style: "currency",
      currency: "PKR",
    }).format(num || 0);

  // ---------------- UI ----------------
  return (
    <div className="min-h-screen text-gray-900 transition-colors bg-gray-50 dark:bg-gray-900 dark:text-gray-100">
      <div className="container p-4 mx-auto">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold">📊 TrustSphere Dashboard</h2>
            <p className="text-gray-500 dark:text-gray-400">
              Real-time analytics overview
            </p>
          </div>

          <button
            className="px-3 py-2 text-white bg-black rounded dark:bg-white dark:text-black"
            onClick={() => navigate("/settings")}
          >
            ⚙ Settings
          </button>
        </div>

        {/* KPI ROW */}
        <div className="grid grid-cols-1 gap-4 mb-6 sm:grid-cols-2 lg:grid-cols-4">

          <div className="p-4 text-white bg-blue-600 shadow rounded-xl">
            <h6>Total Donations</h6>
            <h4 className="text-xl font-bold">{formatCurrency(totalDonations)}</h4>
          </div>

          <div className="p-4 text-white bg-green-600 shadow rounded-xl">
            <h6>Beneficiaries</h6>
            <h4 className="text-xl font-bold">{totalBeneficiaries}</h4>
          </div>

          <div className="p-4 text-white bg-gray-800 shadow rounded-xl dark:bg-gray-700">
            <h6>Events</h6>
            <h4 className="text-xl font-bold">{totalEvents}</h4>
          </div>

          <div className="p-4 text-black bg-yellow-400 shadow rounded-xl">
            <h6>Avg Donation</h6>
            <h4 className="text-xl font-bold">{formatCurrency(avgDonation)}</h4>
          </div>

        </div>

        {/* CHARTS */}
        <div className="grid grid-cols-1 gap-4 mb-6 md:grid-cols-2">

          <div className="p-4 bg-white shadow dark:bg-gray-800 rounded-xl">
            <h5 className="mb-2 font-semibold">📈 Donations Trend</h5>

            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={donationTrend}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="amount" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="p-4 bg-white shadow dark:bg-gray-800 rounded-xl">
            <h5 className="mb-2 font-semibold">📅 Events Overview</h5>

            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={eventsTrend}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" />
              </BarChart>
            </ResponsiveContainer>
          </div>

        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

          {/* DONATIONS */}
          <div className="p-4 bg-white shadow dark:bg-gray-800 rounded-xl">
            <h5 className="mb-3 font-semibold">💰 Recent Donations</h5>

            {donations.length === 0 ? (
              <p className="text-gray-500">No donations yet</p>
            ) : (
              donations.slice(-5).reverse().map((d) => (
                <div
                  key={d.id}
                  className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700"
                >
                  <span>{d.donorName || "Unknown"}</span>
                  <b className="text-green-500">{formatCurrency(d.amount)}</b>
                </div>
              ))
            )}
          </div>

          {/* EVENTS */}
          <div className="p-4 bg-white shadow dark:bg-gray-800 rounded-xl">
            <h5 className="mb-3 font-semibold">📅 Upcoming Events</h5>

            {upcomingEvents.length === 0 ? (
              <p className="text-gray-500">No events scheduled</p>
            ) : (
              upcomingEvents.map((e) => (
                <div
                  key={e.id}
                  className="p-3 mb-2 border-l-4 border-blue-500 rounded bg-gray-50 dark:bg-gray-700"
                >
                  <b>{e.title || "Untitled"}</b>
                  <div className="text-sm text-gray-500 dark:text-gray-300">
                    {e.date} • {e.location}
                  </div>
                </div>
              ))
            )}
          </div>

          {/* ACTIVITY */}
          <div className="p-4 bg-white shadow dark:bg-gray-800 rounded-xl">
            <h5 className="mb-3 font-semibold">🕒 Activity</h5>

            {recentActivity.length === 0 ? (
              <p className="text-gray-500">No activity yet</p>
            ) : (
              recentActivity.map((a, i) => (
                <div key={i} className="py-2 border-b border-gray-200 dark:border-gray-700">
                  {a.text}
                </div>
              ))
            )}
          </div>

          {/* QUICK ACTIONS */}
          <div className="p-4 bg-white shadow dark:bg-gray-800 rounded-xl">
            <h5 className="mb-3 font-semibold">⚡ Quick Actions</h5>

            <div className="grid gap-2">
              <button
                className="px-3 py-2 text-white bg-blue-600 rounded"
                onClick={() => navigate("/donations")}
              >
                + Add Donation
              </button>

              <button
                className="px-3 py-2 text-white bg-green-600 rounded"
                onClick={() => navigate("/beneficiaries")}
              >
                + Add Beneficiary
              </button>

              <button
                className="px-3 py-2 text-white bg-gray-800 rounded"
                onClick={() => navigate("/events")}
              >
                + Create Event
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}