// import express
import express from "express";
 
// import function from controller
import { showProducts, showProductById, createProduct, updateProduct, deleteProduct } from "../controllers/product.js";
 
// init express router
const router = express.Router();
 
// Get All Product
router.get('/credentials', showProducts);
 
// Get Single Product
router.get('/credentials/:id', showProductById);
 
// Create New Product
router.post('/credentials', createProduct);
 
// Update Product
router.put('/credentials/:id', updateProduct);
 
// Delete Product
router.delete('/credentials/:id', deleteProduct);
 
// export default router
export default router;