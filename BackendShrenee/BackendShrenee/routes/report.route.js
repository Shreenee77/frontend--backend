import express from "express";
import { reportIndex, reportCreate, reportUpdate, reportDelete } from "../controllers/report.controllers.js";

const router = express.Router();

router.get('/', reportIndex);
router.post('/', reportCreate);
router.put('/:id', reportUpdate);
router.delete('/:id', reportDelete);

export default router;
