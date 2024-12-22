
import Product from '../models/product.model.js';
import mongoose from 'mongoose';

export const getByIdProduct = async (req, res) => {
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ success: false, message: "Invalid ID" });
  }

  try {
    const product = await Product.findById(id);
    res.status(200).json({ status: true, data: product })
  }
  catch (error) {
    console.error(`Error while getting  product id: ${error.message}`);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
}

export const getAllProduct = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ status: true, data: products })
  }
  catch (error) {
    console.error(`Error while getting all product: ${error.message}`);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
}

export const postProduct = async (req, res) => {
  const product = req.body;

  if (!product.name || !product.image || !product.price) {
    res.status(400).json({ sucess: false, message: "Please provide all the fields" });
  }

  const newProduct = new Product(product);
  try {
    await newProduct.save();
    res.status(201).json({ success: true, message: "Product saved successfully" });
  }
  catch (err) {
    console.log(`error while creating product ${err.message}`);
    res.status(500).json({ sucess: true, message: "Internal server error" });
  }
}

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const product = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ success: false, message: "Invalid ID" });
  }

  try {
    const uptedProduct = await Product.findByIdAndUpdate(id, product, { new: true });

    res.status(200).json({ success: true, data: uptedProduct });
  } catch (error) {
    console.error(`Error while deleting product: ${error.message}`);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
}

export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ success: false, message: "Invalid ID" });
  }


  try {
    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      // If no product is found, return a 404 status
      return res.status(404).json({ success: false, message: "Product not found" });
    }

    // If the product is successfully deleted
    res.status(200).json({ success: true, message: "Product deleted" });
  } catch (error) {
    console.error(`Error while deleting product: ${error.message}`);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
}