const { Router } = require("express");

const router = Router();

const activityController = require("./activityController")
const countriesController = require("./countriesController")

router.use("/countries", countriesController)
router.use("/activity", activityController)
//pitooooooooooooooooooooooooo
module.exports = router;
