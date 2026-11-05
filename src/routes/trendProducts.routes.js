import express from "express";
import trendProductsController from "../controller/trendProducts.controller.js"
import validate from "../middleware/validate.middleware.js";
import {createTrendProductsScheme, updateTrendProductsScheme} from "../validation/trendProducts.validate.js"

const router=express.Router()

router.get("/",(req, res)=> trendProductsController.getAll(req, res))
router.get("/:id",(req, res)=> trendProductsController.getId(req, res))
router.post("/",validate(createTrendProductsScheme), (req, res)=> trendProductsController.create(req, res))
router.put("/:id",validate(updateTrendProductsScheme), (req, res)=> trendProductsController.update(req, res))
router.delete("/:id",(req, res)=> trendProductsController.deleteItem(req, res))

export default router