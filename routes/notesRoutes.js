import { Router } from "express";

import {
  getNotes,
  addNotes,
  getNotesById,
  updateNotesById,
  deleteNotesById,
} from "../controller/notesController.js";
import validate from "../middlewares/validate.js";

const router = Router();

router.get("/", validate, getNotes);
router.post("/", validate, addNotes);
router.get("/:id", validate, getNotesById);
router.put("/:id", validate, updateNotesById);
router.delete("/:id", validate, deleteNotesById);

export default router;
