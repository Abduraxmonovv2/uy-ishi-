import { Router } from "express";
import Discountcontroller from "../controller/discount.controller.js";
import validate from "../middleware/validate.middleware.js";
import {createDiscountScheme, updateDiscountScheme} from "../validation/discount.validate.js"

const router_discount = new Router()

router_discount.get("/", Discountcontroller.getAll)
router_discount.get("/:id", Discountcontroller.getId)
router_discount.post("/",validate(createDiscountScheme), Discountcontroller.create)
router_discount.put("/:id",validate(updateDiscountScheme), Discountcontroller.update)
router_discount.delete("/:id", Discountcontroller.deleteItem)

export default router_discount