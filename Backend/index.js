import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./route/book.route.js"
import cors from "cors"

const app = express();
app.use(cors());
dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
mongoose.connect(URI)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB", error);
    });

// Define routes
app.use("/book", bookRoute);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
