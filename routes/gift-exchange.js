const express = require("express");
const GiftExchange = require("../models/gift-exchange");
const router = express.Router()

router.post("/pairs", async (req, res, next) => {
    try {
        if (!req.body?.names) {
            return next(new BadRequestError("Must provide a names array."));
        }
        
        const result = GiftExchange.pairs(req.body.names);
        
        console.log({
            "context": "POST /pairs",
            "result": result
        });
        
        res.status(200).json(result);
    } catch (err) {
        next(err)
    }
});

router.post("/traditional", async (req, res, next) => {
    try {
        if (!req.body?.names) {
            return next(new BadRequestError("Must provide a names array."));
        }
        
        const result = GiftExchange.traditional(req.body.names);
        
        console.log({
            "context": "POST /traditional",
            "result": result
        });
        
        res.status(200).json(result);
    } catch (err) {
        next(err)
    }
});

module.exports = router;