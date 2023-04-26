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

app.use((error, req, res, next) => {
    const status = error.status || 500;
    const message = error.message || "Something went wrong in the application";

    return res.status(status).json({
        error: { message, status }
    })
});

module.exports = app;