# Restaurant Booking App

This repository contains a simple restaurant booking application built with a popular technology stack (often referred to as the **MERN** stack).  It demonstrates how a table‑reservation system can be implemented using modern web technologies without any external services.  The app consists of a Node.js/Express backend that exposes a REST API and a lightweight React frontend served as static files.

## Why this tech stack?

Recent research into restaurant reservation platforms shows that successful apps use a combination of modern frontend frameworks, robust backend technologies and scalable databases.  A guide to restaurant app technology stacks from 2025 lists **React**, **Angular** and **Vue** for frontend development; **Node.js**, **Django**, **Laravel** and **Express.js** for server‑side logic; and **PostgreSQL**, **MongoDB** and **Firebase** for data storage【11654014487082†L889-L931】.  Another industry article highlights that **React** remains one of the most popular JavaScript libraries because its component‑based architecture and declarative syntax make it easy to build reusable, maintainable user interfaces【336870516496123†L101-L115】.  For the server side, **Express.js** stands out as the most widely used Node.js framework thanks to its simplicity and strong community support【550585123405373†L561-L567】.  A tutorial project on the MERN stack demonstrates how React, Node.js, Express and MongoDB can be combined to create a full‑featured restaurant reservation system【90816928553636†L109-L115】.

Based on these findings, this app uses:

- **React** (via a CDN) on the client for interactive UI.
- **Node.js** with **Express** on the server for a RESTful API.
- An in‑memory data store for simplicity, which could be replaced by MongoDB or PostgreSQL in a production deployment.

## Features

- View a list of sample restaurants, including their name, location, cuisine and a brief description.
- Select a restaurant and submit a reservation with your name, date, time and party size.
- Receive confirmation feedback when a reservation is created.

The application is intentionally minimal to focus on the core booking workflow.  It can serve as a starting point for a more complete reservation system.

## Project structure

```
restaurant-booking-app/
│
├── server/             # Express API server
│  ├── index.js        # API definition (restaurants & reservations)
│  └── package.json    # Backend dependencies
│
├── client/             # Static frontend (React via CDN)
│  ├── index.html      # Main page (loads React and our JSX code)
│  └── styles.css      # Simple styling
│
└── README.md           # Project overview and instructions
```

## Prerequisites

* [Node.js](https://nodejs.org/) (version 14 or newer).  No database is required for this demo since the data is stored in memory.

## Running the app locally

1. **Install dependencies** – Navigate to the `server` directory and install the backend packages:

   ```sh
   cd server
   npm install
   ```

2. **Start the server** – Run the Express API on port 3001 (or specify a `PORT` environment variable):

   ```sh
   npm start
   ```

3. **Serve the frontend** – Open another terminal and navigate to the `client` directory.  You can serve the static files using any HTTP server.  For example, using the Node `http-server` package:

   ```sh
   # If http-server is not installed globally, install it
   npm install -g http-server
   
   # Serve the client directory on port 3000
   cd ../client
   http-server -p 3000
   ```

   Alternatively, you can configure Express to serve the static files from `client/` by adding `app.use(express.static('../client'))` to `index.js`.

4. **Use the app** – Open `http://localhost:3000` in your web browser.  Click **Book Now** next to a restaurant, fill in the reservation form, and press **Confirm Booking**.  A confirmation message will appear if the reservation is successful.

## Extending this project

This simple example can be extended in many ways:

- Persist data in a database like **MongoDB** or **PostgreSQL**.
- Add authentication so that customers can log in and manage their bookings.
- Implement real‑time updates (e.g., preventing double booking) using WebSockets.
- Build mobile apps using **React Native** or **Flutter**, as recommended for cross‑platform development【11654014487082†L889-L931】.
- Integrate payment processing with **Stripe** or **PayPal**【11654014487082†L921-L924】.

Feel free to fork this repository and experiment!
