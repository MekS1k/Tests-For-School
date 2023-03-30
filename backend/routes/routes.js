// import express
import express from "express";
 
// import function from controller
import { showProducts, showProductById, createProduct, showRole } from "../controllers/product.js";
 
// init express router
const router = express.Router();
 
// Get All Product
router.get('/credentials', showProducts);
router.get('/role', showRole);
 
// Get Single Product
router.get('/credentials/:id', showProductById);
 
 
// export default router
export default router;