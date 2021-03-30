import mongoose from "mongoose";
import "dotenv/config.js";

mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  () => console.log(`connected`)
);

const productsSchema = mongoose.Schema({
  productName: {
    type: String,
    required: true,
    unique: true,
  },
  image: String,
  origin: String,
  nutrients: String,
  quantity: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  taste: String,
  description: String,
});

const Products = mongoose.model(`products`, productsSchema);

export default Products;
