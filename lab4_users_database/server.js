const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const bodyParser = require('body-parser');
const cors = require('cors');

dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/api', userRoutes);

const PORT = process.env.PORT || 5002;

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
