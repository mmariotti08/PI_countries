const {Router} = require("express");
const {getCountries,getIdCountries}=require("../handlers/cHandlers")
const cRouter = Router();


cRouter.get("/", getCountries);
cRouter.get("/:id", getIdCountries);


module.exports = cRouter;