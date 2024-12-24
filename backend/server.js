import express from 'express';
import { connectDb } from './config/db.js';
import { productRouter } from "./routes/product.routes.js"
import path from 'path';




import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 5000

const __dirname = path.resolve();


const app = express();
app.use(express.json());

app.use("/api/products", productRouter)

if (process.env.NODE_ENV = "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")))

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, frontend, dispatchEvent, index.html))
  })
}


// connecting to the server
app.listen(PORT, () => {
  connectDb()
  console.log(`server is starting at port  ${PORT}`)
})

// ritikaasharmain
// Ex4Imlh0nhAoPCqB