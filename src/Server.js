import express from "express";
import bodyParser from "body-parser"
import stockController from './Routes/StockData.controller.js'
import cors from 'cors'
let app = express()

app.use(bodyParser.json())
app.use(cors({origin: ['http://localhost:3000'], methods: ['GET', 'OPTIONS']}))

app.use("/api/stock", stockController);

app.listen(8080, ()=> {
    console.log('app started')
})

