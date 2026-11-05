import express from "express"
import ReturnedProductsController from "../controller/returnedProducts.controller.js";
import validate from "../middleware/validate.middleware.js";
import {createReturnedProductsScheme, updateReturnedProductsScheme} from "../validation/returnedProducts.validate.js"

const router = express.Router()

router.get("/",(req, res)=> ReturnedProductsController.getAll(req, res))
router.get("/:id",(req, res)=> ReturnedProductsController.getId(req, res))
router.post("/",validate(createReturnedProductsScheme), (req, res)=> ReturnedProductsController.create(req, res))
router.put("/:id",validate(updateReturnedProductsScheme), (req, res)=> ReturnedProductsController.update(req, res))
router.delete("/:id",(req, res)=> ReturnedProductsController.deleteItem(req, res))

export default router
