const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());

const allowedOrigins = [
  'http://localhost:3000',
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

mongoose.connect('mongodb+srv://bharathreddy372k4:x2zGzB1LJaK6V6UF@flamesver2.egwpilz.mongodb.net/?retryWrites=true&w=majority&appName=flamesver2', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api/flames', require('./routes/flames'));

const port = 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
