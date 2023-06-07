const { Router } = require("express");
const cRouter = require("./countryRouter");
const aRouter = require("./activityRouter");

const router = Router();

router.use("/countries", cRouter);
router.use("/activities", aRouter);

module.exports = router;
