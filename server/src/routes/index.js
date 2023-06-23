const { Router } = require("express");

const router = Router();

const activityController = require("./controllers/activityController")
const countriesController = require("./controllers/countriesController")

router.use("/countries", countriesController)
router.use("/activities", activityController)

module.exports = router;
