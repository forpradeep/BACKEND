const mongoose = require('mongoose');

async function main() {

  console.log("DB URL:", process.env.DB_CONNECT_KEY);

  await mongoose.connect(process.env.DB_CONNECT_KEY);
}

module.exports = main;