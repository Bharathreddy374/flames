const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());

const allowedOrigins = [
  'http://localhost:3000',
  // Add your Render frontend URL here once it's deployed
];

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};

app.use(cors(corsOptions));

mongoose.connect('mongodb+srv://bharathreddy372k4:x2zGzB1LJaK6V6UF@flamesver2.egwpilz.mongodb.net/?retryWrites=true&w=majority&appName=flamesver2', {  useNewUrlParser: true,
  useUnifiedTopology: true,
  tls: true, // Explicitly enable TLS
});


app.use('/api/flames', require('./routes/flames'));

const port = process.env.PORT || 5000; // Use the PORT environment variable provided by Render
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});