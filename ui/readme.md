src/
├── api/
│    └── axios.js
├── pages/
│    ├── Login.jsx
│    ├── Register.jsx
│    ├── BookTrip.jsx
│    ├── Trips.jsx
├── components/
│    └── Navbar.jsx
├── App.jsx
└── main.jsx

Tables Commands for Workbench:
SHOW DATABASES;
USE cab;
SHOW TABLES;
SELECT * FROM cab_user;
Command : npm run dev

Overview Diagram:
src/
│
├── api/                         # All backend API calls
│   ├── adminApi.js
│   ├── userApi.js
│   ├── tripsApi.js
│   ├── axiosInstance.js
│
├── pages/                       # Feature-based pages
│
│   ├── admin/
│   │   ├── AdminRegister.jsx
│   │   ├── AdminLogin.jsx
│   │   ├── AdminDashboard.jsx
│   │
│   ├── user/
│   │   ├── Register.jsx
│   │   ├── Login.jsx
│   │   ├── ForgotPassword.jsx
│   │   ├── Profile.jsx
│   │   ├── TripsList.jsx
│   │
│   ├── otp/
│   │   ├── EmailOtp.jsx
│   │   ├── MobileOtp.jsx
│   │
│   ├── trips/
│   │   ├── BookTrip.jsx
│   │   ├── TripDetails.jsx
│   │
│
├── components/                  # Reusable UI
│   ├── common/
│   │   ├── Button.jsx
│   │   ├── Input.jsx
│   │   ├── Loader.jsx
│   │
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   ├── Sidebar.jsx
│   │
│
├── routes/
│   ├── AppRoutes.jsx
│
├── utils/
│   ├── constants.js
│   ├── helpers.js
│
├── App.jsx
├── main.jsx