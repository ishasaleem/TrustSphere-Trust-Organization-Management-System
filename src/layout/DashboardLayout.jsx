import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function DashboardLayout() {
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div
        className="d-flex flex-column w-100"
        style={{
          marginLeft: "260px",
          minHeight: "100vh",
          backgroundColor: "#f8f9fa",
        }}
      >
        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <main className="p-4 flex-grow-1">
          <Outlet />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}