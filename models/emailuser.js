const mongoose = require("mongoose");
const conn = require("../config/dbconnection");

const emailSchema = new mongoose.Schema({
  email: String

 
})


module.exports = conn.model("email", emailSchema, "email");

