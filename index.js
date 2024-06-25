const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const productRoutes = require("./routes/product.route.js");

const PORT = process.env.PORT || 8080;

const dbURI = process.env.MONGODB_URI;

const app = express();

// middleware
app.use(express.json());

// routes
app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send("Hello, world");
});

mongoose
  .connect(dbURI)
  .then(() => {
    console.log("connection to database successful");
    app.listen(PORT, () => {
      console.log(`server started at ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("connection not successful");
  });
