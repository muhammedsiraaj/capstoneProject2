import mongoose from "mongoose";

export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://bitebox:773610@cluster0.e7bqg.mongodb.net/food-order-website').then(()=>console.log("DB Connected"));
}