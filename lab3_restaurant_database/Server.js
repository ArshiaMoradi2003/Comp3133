require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const restaurantRoutes = require("./routes/restaurantRoutes");

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.error(err));

app.use("/restaurants", restaurantRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
