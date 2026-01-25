import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

const app = express();
app.use(cors({
  origin:["http://localhost:5000","https://6975e1a139690ef2e51e9c43--bookstore4u.netlify.app"],credentials:true
}));
app.use(express.json());
import dotenv from "dotenv";
dotenv.config();
const port = process.env.PORT||5000;
const URI = process.env.MONGODB_URI;

try {
mongoose.connect(URI);

  console.log("Connected to MongoDB successfully");
} catch (error) {
  console.log("Error:", error.message);
}

app.use("/book", bookRoute);
app.use("/paidBook", bookRoute);
app.use("/user", userRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
