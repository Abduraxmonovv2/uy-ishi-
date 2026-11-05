import express from "express"
import NewProductsController from "../controller/newProducts.controller.js"
import validate from "../middleware/validate.middleware.js"
import {createnewProductsScheme, updatenewProductsScheme} from "../validation/newProducts.validate.js"


const router = express.Router()

router.get("/",(req, res)=> NewProductsController.getAll(req, res))
router.get("/:id",(req, res)=> NewProductsController.getId(req, res))
router.post("/",validate(createnewProductsScheme), (req, res)=> NewProductsController.create(req, res))
router.put("/:id",validate(updatenewProductsScheme), (req, res)=> NewProductsController.update(req, res))
router.delete("/:id",(req, res)=> NewProductsController.deleteItem(req, res))

export default router