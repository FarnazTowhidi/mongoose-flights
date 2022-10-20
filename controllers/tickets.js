const Flight = require("../models/flight.js");
const Ticket = require("../models/ticket");

function newTicket(req, res) {
  res.render(`new/${req.params.id}`);
}

module.exports = { new: newTicket };
