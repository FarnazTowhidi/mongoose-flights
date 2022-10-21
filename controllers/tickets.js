const Flight = require("../models/flight.js");
const Ticket = require("../models/ticket");

function newTicket(req, res) {
  Flight.findById(req.params.id, function (err, flights) {
    if (err) return res.send(err.message);
    res.render("tickets/new.ejs", { flights });
  });
}

function create(req, res) {
  Ticket.
}

module.exports = { new: newTicket, create };
