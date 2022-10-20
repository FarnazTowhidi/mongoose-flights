const Flight = require("../models/flight.js");

function index(req, res) {
  Flight.find({}, function (err, flights) {
    if (err) return res.send(err.message);
    res.render("flights/index.ejs", { flights });
  });
}

function newFlight(req, res) {
  var today = new Date();
  const departsDate = today.toISOString().slice(0, 16);
  console.log(departsDate);
  res.render("flights/new.ejs", { departsDate });
}

function create(req, res) {
  console.log(req.body);

  const flight = new Flight(req.body);
  flight.save(function (err) {
    if (err) return res.send(err.message);
    res.redirect("/flights");
  });
}

function show(req, res) {
  Flight.findById(req.params.id, function (err, flight) {
    if (err) return res.send(err.message);
    res.render("flights/show.ejs", { flight });
  });
}

function newDestination(req, res) {
  Flight.findById(req.params.id, function (err, flights) {
    if (err) return res.send(err.message);
    flights.destinations.push(req.body);
    flights.save();
    res.redirect(`flights/${req.params.id}`);
  });
}

module.exports = { index, new: newFlight, create, show, newDestination };
