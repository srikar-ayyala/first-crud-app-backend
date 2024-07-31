import express, { Response } from "express";
import mongoose from "mongoose";
import productRouter from "./routes/product.routes.js";

const app = express();

// middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}));


// routes
app.use("/api/products", productRouter)

// database
mongoose.connect("mongodb+srv://Srikar:8zx7xz4EjXEnwAHW@firstcluster.5g6y7cc.mongodb.net/node-api?retryWrites=true&w=majority&appName=FirstCluster").then(() => {
    console.log("Connection to mongodb successfull...");
    app.listen(3000, () => {
        console.log("Listening at port 3000...");
    })
})


app.get("/", (req, res) => {
    res.send("Welcome to crud api...");
})