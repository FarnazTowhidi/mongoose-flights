const Flight = require("../models/flight.js");

function index(req, res) {
  Flight.find({}, function (err, flights) {
    if (err) return res.send(err.message);
    res.render("flights/index.ejs", { flights });
  });
}

function newFlight(req, res) {
  res.render("flights/new.ejs");
}

function create(req, res) {
  console.log(req.body);

  const flight = new Flight(req.body);
  flight.save(function (err) {
    if (err) return res.send(err.message);
    res.redirect("/flights");
  });
}
module.exports = { index, new: newFlight, create };
