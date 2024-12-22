import express from 'express';
import { connectDb } from './config/db.js';
import { productRouter } from "./routes/product.routes.js"

import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 5000


const app = express();
app.use(express.json());

app.use("/api/products", productRouter)


// connecting to the server
app.listen(PORT, () => {
  connectDb()
  console.log(`server is starting at port  ${PORT}`)
})

// ritikaasharmain
// Ex4Imlh0nhAoPCqB