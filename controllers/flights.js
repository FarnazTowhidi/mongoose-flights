const Flight = require("../models/flight");

function index(req, res) {
  Flight.find({}, function (err, flights) {
    if (err) return res.send(err.message);
    res.render("flights/index.ejs", { flights });
  });
}

module.exports = { index };
