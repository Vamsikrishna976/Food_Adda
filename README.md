# React.js Learning Project

> A modern React learning monorepo with a feature-rich food-ordering demo app and backend API proxy.


## 🚀 What’s Included

| Area | Description |
| --- | --- |
| **Frontend** | React 19 app with routing, Redux Toolkit state management, lazy-loaded pages, Tailwind CSS, and Parcel bundling |
| **Backend** | Express API proxy with Axios and CORS to fetch restaurant and menu data from remote endpoints |
| **Features** | Restaurant listing, menu details, cart flow, login/signup pages, dynamic routing, and UI skeletons |


## 📁 Repository Structure

```text
React.js_Learning/
├── Backend/          # Express server and API proxy
│   ├── package.json
│   └── server.js
├── Frontend/         # React application built with Parcel
│   ├── src/
│   ├── package.json
│   └── index.html
└── README.md         # Root project documentation
```


## 🧭 Frontend Highlights

- React 19 + React Router v6
- Redux Toolkit for global state
- Lazy-loaded `About` and `ContactUs` routes
- Custom components:
  - `Header`, `Body`, `ResMenu`, `Cart`, `Login`, `Signup`
- Mobile-friendly UI using Tailwind + custom CSS
- Jest + React Testing Library for unit tests


## 🔌 Backend Highlights

- Express server with CORS support
- Axios-based data fetching
- Proxy endpoints:
  - `GET /api/restaurants`
  - `GET /api/menu/:restaurantId`


## ⚙️ Quick Start

### Frontend
```bash
cd Frontend
npm install
npm start
```

Visit `http://localhost:1234` or the URL shown by Parcel.

### Backend
```bash
cd Backend
npm install
npm run dev
```

Visit `http://localhost:5000` to verify the server is running.


## 🛠️ Tech Stack

- React
- React Router
- Redux Toolkit
- Parcel
- Tailwind CSS
- Express
- Axios
- Jest


## 💡 Notes

- The frontend app uses `createBrowserRouter` and `Suspense` for route loading.
- The backend proxies third-party restaurant data and requires internet access.
- This repository is ideal for learning full-stack React development.


## ✅ Recommended Improvements

- Add separate `README.md` files in both `Frontend/` and `Backend/`
- Add a root workspace config (`package.json` or `npm workspaces`)
- Add more feature documentation or app screenshots


---

**Last updated:** June 13, 2026
