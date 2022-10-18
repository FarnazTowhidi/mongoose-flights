var express = require("express");
var router = express.Router();
const flightsCtrl = require("../controllers/flights");

router.get("/", flightsCtrl.index);
//router.get("/flights/", flightsCtrl.index);

module.exports = router;
