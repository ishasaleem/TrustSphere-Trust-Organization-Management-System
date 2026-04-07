import { createContext, useState, useEffect } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const AppContext = createContext();

export function AppProvider({ children }) {

  // ---------------- DONATIONS ----------------
  const [donations, setDonations] = useState(() => {
    return JSON.parse(localStorage.getItem("donations")) || [];
  });

  useEffect(() => {
    localStorage.setItem("donations", JSON.stringify(donations));
  }, [donations]);

  const addDonation = (data) => {
    setDonations(prev => [...prev, { id: Date.now(), ...data }]);
  };

  const deleteDonation = (id) => {
    setDonations(prev => prev.filter(item => item.id !== id));
  };

  // ---------------- BENEFICIARIES ----------------
  const [beneficiaries, setBeneficiaries] = useState(() => {
    return JSON.parse(localStorage.getItem("beneficiaries")) || [];
  });

  useEffect(() => {
    localStorage.setItem("beneficiaries", JSON.stringify(beneficiaries));
  }, [beneficiaries]);

  const addBeneficiary = (data) => {
    setBeneficiaries(prev => [...prev, { id: Date.now(), ...data }]);
  };

  const deleteBeneficiary = (id) => {
    setBeneficiaries(prev => prev.filter(item => item.id !== id));
  };

  // ---------------- EVENTS ----------------
  const [events, setEvents] = useState(() => {
    return JSON.parse(localStorage.getItem("events")) || [];
  });

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  const addEvent = (data) => {
    setEvents(prev => [...prev, { id: Date.now(), ...data }]);
  };

  const deleteEvent = (id) => {
    setEvents(prev => prev.filter(item => item.id !== id));
  };

  // ✅ FIX: UPDATE EVENT (THIS WAS MISSING)
  const updateEvent = (updatedEvent) => {
    setEvents(prev =>
      prev.map(event =>
        event.id === updatedEvent.id ? updatedEvent : event
      )
    );
  };

  return (
    <AppContext.Provider value={{
      donations,
      addDonation,
      deleteDonation,

      beneficiaries,
      addBeneficiary,
      deleteBeneficiary,

      events,
      addEvent,
      deleteEvent,
      updateEvent   // ✅ IMPORTANT
    }}>
      {children}
    </AppContext.Provider>
  );
}

