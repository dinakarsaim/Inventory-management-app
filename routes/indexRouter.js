const {Router} = require("express");
const {viewsomeItems} = require("../controller/itemController");

const indexRouter = Router();

indexRouter.get("/", viewsomeItems);

module.exports = indexRouter;