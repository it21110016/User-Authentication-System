const express = require('express');
require('dotenv').config();
const cors = require('cors');
const morgan = require('morgan');
const setupProxies = require('./proxy');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(morgan('dev'));

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || /^https?:\/\/(?:[0-9]{1,3}\.){3}[0-9]{1,3}(:\d+)?$/.test(origin) || /^https?:\/\/localhost(:\d+)?$/.test(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
// Setup all routes as proxies
setupProxies(app, routes);

// Fallback for unknown routes
app.use((req, res) => {
  res.status(404).json({ message: 'Gateway: Route not found' });
});

app.listen(PORT, () => {
  console.log(`🚀 API Gateway running on port ${PORT}`);
});
