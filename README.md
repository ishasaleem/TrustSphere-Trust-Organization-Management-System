# 🌍 TrustSphere – Trust Organization Management System

## 📌 Full Stack Devs Internship  

---

## 🚀 Project Description

TrustSphere is a React-based dashboard system for managing a trust organization.  
It includes donations, beneficiaries, events, analytics, and system settings — all built as a single-page application using React Router and Context API.

---

## ✨ Features

### 🏠 Landing Page
- Modern UI with Trust branding
- Donation analytics chart (Recharts)
- Dark/light mode toggle
- Navigation to dashboard

### 📊 Dashboard System
- Sidebar navigation (fixed layout)
- Navbar + Footer layout
- Fully responsive structure

### 💰 Donations Module
- Add / view / delete donations
- Stored using LocalStorage
- Fields: donor name, amount, purpose, date

### 👥 Beneficiaries Module
- Add beneficiaries with full details:
  - Name, Age, City
  - Need type (Medical / Education / etc.)
  - Status (Active / Pending / Rejected)
- Table-based UI with badges

### 📅 Events Module
- Create / edit / delete events
- Fields: title, date, location, description

### 🔍 Search System
- Global search across all modules
- Filter-based results

### ⚙ Settings Page
- Reset system (clears localStorage)
- Clean UI for system control

---

## 📊 Data Visualization
- Recharts used for donation analytics
- Monthly donation growth graph

---

## 🛠 Tech Stack

- React JS
- React Router DOM
- Bootstrap 5
- Context API
- Recharts
- LocalStorage API
- CSS3

---

## 📁 Project Structure


src/
├── assets/
│ ├── image1.png
│ ├── image2.png
│ ├── image3.png
│ ├── image4.png
│ ├── image5.png
│ ├── image6.png
│ ├── image7.png
│ ├── image8.png
│
├── components/
│ ├── Sidebar.jsx
│ ├── Navbar.jsx
│ ├── Footer.jsx
│
├── layout/
│ ├── DashboardLayout.jsx
│
├── pages/
│ ├── LandingPage.jsx
│ ├── DashboardPage.jsx
│ ├── DonationPage.jsx
│ ├── BeneficiaryPage.jsx
│ ├── EventPage.jsx
│ ├── SearchPage.jsx
│ ├── SettingsPage.jsx
│
├── context/
│ ├── AppContext.jsx
│
└── App.jsx


---


## ⚙ Installation & Setup

```bash
git clone https://github.com/your-username/trustsphere.git
cd trustsphere
npm install
npm run dev
🌐 Project Highlights
Multi-page React dashboard
CRUD operations (Donations, Beneficiaries, Events)
LocalStorage persistence
Recharts analytics
Fully responsive UI
Clean modular structure
👨‍💻 Developer

Isha Saleem
Frontend Developer | React.js Enthusiast
