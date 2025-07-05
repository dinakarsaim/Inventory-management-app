const {Router} = require("express");
const {viewAllItems} = require("../controller/itemController");

const indexRouter = Router();

indexRouter.get("/", viewAllItems);

module.exports = indexRouter;