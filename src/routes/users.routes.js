import { Router } from "express"
import Userscontroller from "../controller/users.controller.js"
import validate from "../middleware/validate.middleware.js"
import { createUserScheme, updateUserScheme } from "../validation/user.validate.js"

const router = Router()

router.get("/", Userscontroller.getAll)
router.get("/:id", Userscontroller.getId)
router.post("/", validate(createUserScheme), Userscontroller.create)
router.put("/:id", validate(updateUserScheme), Userscontroller.update)
router.delete("/:id", Userscontroller.deleteItem)

export default router
