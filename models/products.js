import mongoose from "mongoose";

const productsSchema = mongoose.Schema(
  {
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
  },
  {
    timestamps: true,
  }
);

const Products = mongoose.model(`products`, productsSchema);

export default Products;
