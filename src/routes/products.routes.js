import { Router } from "express"
import Productscontroller from "../controller/products.controller.js"
import validate from "../middleware/validate.middleware.js"
import { createProductsScheme, updateProductsScheme } from "../validation/products.validate.js"

const router = Router()

router.get("/", Productscontroller.getAll)
router.get("/:id", Productscontroller.getId)
router.post("/", validate(createProductsScheme), Productscontroller.create)
router.put("/:id", validate(updateProductsScheme), Productscontroller.update)
router.delete("/:id", Productscontroller.deleteItem)

export default router