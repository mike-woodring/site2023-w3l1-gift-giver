const express = require("express");
const morgan = require("morgan");
const router = require("./routes/gift-exchange")

const app = express();

app.use(morgan("tiny"));
app.use(express.json());
app.use("/gift-exchange", router);

app.get("/", async (req, res) => {
    res.json({ ping: "pong" })
});

module.exports = app;