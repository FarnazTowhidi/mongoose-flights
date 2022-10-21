var express = require("express");
var router = express.Router();
const ticketCtrl = require("../controllers/tickets");

router.post("/create/:id", ticketCtrl.create);
router.get("/new/:id", ticketCtrl.new);

module.exports = router;
