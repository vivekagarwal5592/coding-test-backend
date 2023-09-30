import express from "express";
import {getStockData} from "../Services/StockData.services.js";

export default (() => {
    const router = express.Router();

    /**
     * This is the get request sent to receive stock Data
     */
    router.get('/', function (req, res) {

        getStockData().then((result)=> {
            res.status(200).send(result);
        }).catch((error)=> {
            res.status(400).send(error);
        });
    });

    return router;
})();
