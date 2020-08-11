const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// ENV and KEYS
const PORT = process.env.PORT || 3000;
const keys = require('./config/keys');

// Import Models
require('./models/Notification');

// Import Routes
const NotificationRoute = require('./routes/notificationRoutes');

// Database Connection
mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Global Middleware
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

// Declaring Routes
NotificationRoute(app);

app.listen(PORT);
