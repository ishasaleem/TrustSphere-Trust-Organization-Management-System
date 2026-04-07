import { Routes, Route } from "react-router-dom";
import DashboardLayout from "./layout/DashboardLayout";

import LandingPage from "./pages/LandingPage";
import DonationPage from "./pages/DonationPage";
import BeneficiaryPage from "./pages/BeneficiaryPage";
import SearchPage from "./pages/SearchPage";
import SettingsPage from "./pages/SettingsPage";
import EventPage from "./pages/EventPage";
import DashboardPage from "./pages/DashboardPage";

import { AppProvider } from "./context/AppContext";

export default function App() {
  return (
    <AppProvider>
      <Routes>

        {/* PUBLIC */}
        <Route path="/" element={<LandingPage />} />

        {/* DASHBOARD LAYOUT WRAPPER */}
        <Route path="/" element={<DashboardLayout />}>
          
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="donations" element={<DonationPage />} />
          <Route path="beneficiaries" element={<BeneficiaryPage />} />
          <Route path="events" element={<EventPage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="settings" element={<SettingsPage />} />

        </Route>
  
      </Routes>
      
    </AppProvider>
    
  );
}