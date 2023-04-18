const mongoose = require("mongoose");
require("dotenv").config();

const url = process.env.MONGOURL;
console.log('mongodb://0.0.0.0:27017/ProjectNode02');
mongoose.connect('mongodb://0.0.0.0:27017/ProjectNode02', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
