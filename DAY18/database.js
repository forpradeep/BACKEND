const mongoose = require('mongoose');

async function main() {
   
  await mongoose.connect("mongodb+srv://sahapradeep410_db_user:gFGBs0ciVdxSpz0l@coding.yybrh0b.mongodb.net/Instagram");
  
}


module.exports = main;