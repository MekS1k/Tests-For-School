// import express
import express from "express";
 
// import function from controller
import { showProducts, showProductById, showRole, showQuestions,showTest,createQuestions } from "../controllers/product.js";
 
// init express router
const router = express.Router();
 
// Get All Product
router.get('/credentials', showProducts);
router.get('/role', showRole);
router.get('/questions', showQuestions);
router.get('/Tests', showTest);
 
// Get Single Product
router.get('/credentials/:id', showProductById);
 
router.post('/questions', createQuestions);
// export default router
export default router;