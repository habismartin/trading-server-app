const mongoose = require("mongoose");

const depositmethodSchema = mongoose.Schema({
    image: String,
    name: String,
    number: String,
    user: String,
    category: String,
  });
  
  //
  const DepositMethod = mongoose.model("DepositMethod", depositmethodSchema);
  module.exports = {DepositMethod}
  