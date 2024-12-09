import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";




// App configuration
const app = express();
const port = 4000

// Middleware
app.use(express.json());
app.use(cors())

// Database connection
connectDB();

// API endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
// app.use("/api/user", userRouter);
// app.use("/api/cart", cartRouter);
// app.use("/api/order",orderRouter)

app.get("/", (req, res) => {
    res.send("API is Working");
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
