import { Router } from "express"
import Basketcontroller from "../controller/basket.controller.js"
import validate from "../middleware/validate.middleware.js"
import { createbasketscheme, updatebasketscheme } from "../validation/basket.validate.js"

const router = Router()

router.get("/", Basketcontroller.getAll)
router.get("/:id", Basketcontroller.getId)
router.post("/", validate(createbasketscheme), Basketcontroller.create)
router.put("/:id", validate(updatebasketscheme), Basketcontroller.update)
router.delete("/:id", Basketcontroller.deleteItem)

export default router
