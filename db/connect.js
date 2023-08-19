const mongoose = require("mongoose");


mongoose.set("strictQuery", false);
const ConnectDB = (url) => {
  return mongoose.connect(url);
};

module.exports = ConnectDB;


// Set up mongoose connection
// const mongoose = require("mongoose");
// mongoose.set("strictQuery", false);
// const url = "insert_your_database_url_here";

// main().catch((err) => console.log(err));
// async function main() {
//   await mongoose.connect(mongoDB);
// }
