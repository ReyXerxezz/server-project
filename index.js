const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

// Import routes
const userRoutes = require("./routes/user_routes");
const superheroRoutes = require("./routes/superhero_routes");
const adressRoutes = require("./routes/adress_rout");

const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 3001;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// http://localhost:3001/
app.listen(PORT, () => console.log("Server is running in port", PORT));

// http://localhost:3001/api/v1/users/new-user
// http://localhost:3001/api/v1/superheros//new-superhero
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/superheros", superheroRoutes);
app.use("/api/v1/adresses", adressRoutes);


// Connect to MongoDB
const getConnection = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_DB_CONNECTION);
    if (conn) {
      console.log(`MongoDB Connected on ${conn.connection.host}`);
    } else {
      console.log("Failed to connect DB");
    }
  } catch (error) {
    console.log(`Failed with error: ${error.message}`);
  }
};

getConnection();