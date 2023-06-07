const {Router} = require("express");
const {getActivities,createActivity} = require('../handlers/aHandlers');
const aRouter = Router();

aRouter.get('/', getActivities);
aRouter.post('/', createActivity);

module.exports = aRouter;