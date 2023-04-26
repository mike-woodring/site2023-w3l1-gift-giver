const express = require("express");
const router = express.Router()

router.post("/pairs", async (req, res, next) => {
    try {
        res.status(200).json(req.body.names);
    } catch (err) {
        next(err)
    }
});

router.post("/traditional", async (req, res, next) => {
    try {
        res.status(200).json(req.body.names);
    } catch (err) {
        next(err)
    }
});

module.exports = router;