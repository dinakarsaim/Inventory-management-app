const express = require("express");
const path = require("path");
const categoryRouter = require("./routes/categoryRouter");
const itemRouter = require("./routes/itemRouter");
const indexRouter = require("./routes/indexRouter");

const app = express();

app.use(express.static(path.join(__dirname, "static")));
app.use(express.urlencoded({extended: true}));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", indexRouter);
app.use("/categories", categoryRouter);
app.use("/items", itemRouter);

app.listen(3000, (req, res) => {
    console.log("Listening on post 3000,");
})