const express = require("express");
require("dotenv").config();
const SellerRoute = require("./routes/seller");
const BuyerRoute = require("./routes/buyer");
require("./db/connection");

const app = express();

app.use(express.json());
app.use(SellerRoute);
app.use(BuyerRoute);
const PORT = process.env.PORT; // PORT = 3031

app.get("/", (req, res) => {
  res.send({
    message:
      "Welcome!!!",
    test: "CI/CD Working! Demo"
  });
});

app.listen(PORT, () => {
  console.log(`Server running on ${process.env.PORT}`);
});
