import express from "express"
import BlockedUsercontroller from "../controller/blockedUser.controller.js"

const router = express.Router()

router.get("/", (req, res) => BlockedUsercontroller.getAll(req, res));
router.get("/:id", (req, res) => BlockedUsercontroller.getId(req, res));
router.post("/", (req, res) => BlockedUsercontroller.create(req, res));
router.put("/:id", (req, res) => BlockedUsercontroller.update(req, res));
router.delete("/:id", (req, res) => BlockedUsercontroller.deleteItem(req, res));

export default router
