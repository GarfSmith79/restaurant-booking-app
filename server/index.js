const express = require('express');
const cors = require('cors');

// Create an Express application
const app = express();
const port = process.env.PORT || 3001;

// Enable CORS for all origins (so the React app can call the API during development)
app.use(cors());

// Parse JSON bodies
app.use(express.json());

// In‑memory list of restaurants. In a production app this would live in a database.
const restaurants = [
  {
    id: 1,
    name: 'Italiano Ristorante',
    location: 'London',
    cuisine: 'Italian',
    description: 'Authentic Italian cuisine with wood‑fired pizzas and homemade pasta.'
  },
  {
    id: 2,
    name: 'Sushi Central',
    location: 'London',
    cuisine: 'Japanese',
    description: 'Fresh sushi and sashimi served in a modern setting.'
  },
  {
    id: 3,
    name: 'Le Bistro Français',
    location: 'London',
    cuisine: 'French',
    description: 'Classic French dishes and fine wines in an elegant atmosphere.'
  },
  {
    id: 4,
    name: 'Spice of India',
    location: 'London',
    cuisine: 'Indian',
    description: 'Rich curries, naan breads and tandoori delights packed with flavour.'
  },
  {
    id: 5,
    name: 'Casa Mexicana',
    location: 'London',
    cuisine: 'Mexican',
    description: 'Vibrant Mexican street food favourites and refreshing margaritas.'
  }
];

// In‑memory list of reservations. Each reservation has an id, restaurantId and booking details.
const reservations = [];

// GET /api/restaurants
// Returns the list of available restaurants.
app.get('/api/restaurants', (req, res) => {
  res.json(restaurants);
});

// GET /api/reservations
// Returns all reservations. In a real system you might restrict this to admins or filter by user.
app.get('/api/reservations', (req, res) => {
  res.json(reservations);
});

// POST /api/reservations
// Creates a new reservation for a given restaurant.
app.post('/api/reservations', (req, res) => {
  const { restaurantId, customerName, date, time, people } = req.body;

  // Validate inputs
  if (!restaurantId || !customerName || !date || !time || !people) {
    return res.status(400).json({ message: 'All reservation fields are required.' });
  }

  // Check if the restaurant exists
  const restaurant = restaurants.find(r => r.id === Number(restaurantId));
  if (!restaurant) {
    return res.status(404).json({ message: 'Restaurant not found.' });
  }

  // Create a new reservation entry
  const reservation = {
    id: reservations.length + 1,
    restaurantId: Number(restaurantId),
    customerName,
    date,
    time,
    people: Number(people)
  };

  // Store the reservation
  reservations.push(reservation);

  // Return the created reservation with HTTP 201
  res.status(201).json(reservation);
});

// Start the server
app.listen(port, () => {
  console.log(`Restaurant booking API server is listening on port ${port}`);
});
