var express = require("express");
var router = express.Router();
const ticketCtrl = require("../controllers/tickets");

router.get("/new/:id", ticketCtrl.new);

module.exports = router;
