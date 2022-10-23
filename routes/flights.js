var express = require("express");
var router = express.Router();
const flightsCtrl = require("../controllers/flights");

router.get("/new", flightsCtrl.new);
router.post("/", flightsCtrl.create);

router.get("/:id", flightsCtrl.show);

router.get("/", flightsCtrl.index);

router.post("/:id/addDestination", flightsCtrl.newDestination);

router.delete("/deleteDestination/:id", flightsCtrl.deleteDestination);
router.delete("/deleteFlight/:id", flightsCtrl.deleteFlight);

module.exports = router;
