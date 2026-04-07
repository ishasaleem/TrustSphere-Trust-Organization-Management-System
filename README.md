
# 🌐 TrustSphere – Trust Organization Management System

A modern, responsive **frontend web application** built with React.js for managing trust organization operations such as donations, beneficiaries, events, and internal administration.


## 👨‍💻 Developer

**Isha Saleem**  
Frontend Developer | React.js Enthusiast  

---

## 📌 Project Overview

**TrustSphere** is a fully functional frontend dashboard system designed to simulate real-world trust organization management.

It allows users to:
- Manage donations
- Track beneficiaries
- Organize events
- Search and filter records
- Control application settings

All data is handled using **React state management and Local Storage** (no backend required).

---

## 🛠️ Tech Stack

- HTML5
- CSS3
- Bootstrap 5
- Tailwind CSS
- React JS (v18+)
- React Router DOM
- React Hooks (useState, useEffect)
- Local Storage API

---

## ✨ Key Features

### 🏠 Landing Page
- Professional introduction to TrustSphere
- Navigation to dashboard
- Clean branding and UI

### 📊 Dashboard
- Summary cards for:
  - Total Donations
  - Active Beneficiaries
  - Upcoming Events
- Clean and responsive layout

### 💰 Donation Management (CRUD)
- Add donations (name, amount, purpose, date)
- View donation list
- Delete donations
- Data saved in local storage

### 🤝 Beneficiary Management (CRUD)
- Add beneficiary details
- Delete beneficiaries
- Categorization support

### 📅 Event Management (CRUD)
- Create events with title, date, location, description
-  delete events
- Organized event tracking

### 🔍 Search & Filter
- Search across all modules
- Filter by category, type, or date

### ⚙️ Settings Page
- Theme toggle (light/dark optional)
- Clear all stored data
- Manage preferences

---

## ⚙️ Core Functionalities

- ✅ Full CRUD operations (Create, Read, Update, Delete)
- ✅ React Router DOM navigation
- ✅ Local Storage persistence
- ✅ Component-based architecture
- ✅ Responsive UI (Mobile + Desktop)
- ✅ Clean and reusable components

---

## 📁 Project Structure


src/
│── components/
│── layout/
│ ├── DashboardLayout.jsx
│ ├── Navbar.jsx
│ ├── Sidebar.jsx
│ ├── Footer.jsx
│
│── pages/
│ ├── LandingPage.jsx
│ ├── DashboardPage.jsx
│ ├── DonationPage.jsx
│ ├── BeneficiaryPage.jsx
│ ├── EventPage.jsx
│ ├── SearchPage.jsx
│ ├── SettingsPage.jsx
│
│── context/
│── App.js
│── main.jsx


---

## 🧠 State Management

- React Hooks (`useState`, `useEffect`)
- Context API (if implemented)
- Local Storage for data persistence

---

## ⚙️ Installation & Setup

```bash
# Clone repository
git clone https://github.com/your-username/trustsphere.git

# Move into project directory
cd trustsphere

# Install dependencies
npm install

# Start development server
npm run dev
