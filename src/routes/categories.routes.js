import { Router } from "express"
import Categoriescontroller from "../controller/categories.controller.js"
import validate from "../middleware/validate.middleware.js"
import { createCategoryScheme, updateCategoryScheme } from "../validation/categories.validate.js"

const router = Router()

router.get("/", Categoriescontroller.getAll)
router.get("/:id", Categoriescontroller.getId)
router.post("/", validate(createCategoryScheme), Categoriescontroller.create)
router.put("/:id", validate(updateCategoryScheme), Categoriescontroller.update)
router.delete("/:id", Categoriescontroller.deleteItem)

export default router
