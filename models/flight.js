const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const flightSchema = new Schema({
  airline: {
    type: String,
    enum: ["American", "Southwest", "United"],
  },
  airport: {
    type: String,
    enum: ["AUS", "DFW", "DEN", "LAX", "SAN"],
  },
  flightNo: {
    type: Number,
    // required: true,
  },

  departs: {
    type: Date,
    required: true,
  },
});
module.exports = mongoose.model("Flight", flightSchema);