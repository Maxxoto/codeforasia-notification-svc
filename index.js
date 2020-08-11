const express = require('express');

const app = express();
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;

// Models
require('./models/Notification');

const NotificationRoute = require('./routes/notificationRoutes');

app.get('/', (req, res) => {
  res.send('Halo');
});

app.listen(PORT, () => {
  console.log(`Server is successfully started on port ${PORT}`);
});
