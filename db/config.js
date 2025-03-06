const mongoose = require("mongoose");
mongoose
  .connect("mongodb+srv://akshadas1602:iYIT5vZWDgPcNTsn@cluster1.drut4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1")
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });