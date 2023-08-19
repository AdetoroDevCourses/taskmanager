const mongoose = require("mongoose");

const ConnectDB = (url) => {
  return mongoose.connect(url, { ssl: true });
};

module.exports = ConnectDB;
