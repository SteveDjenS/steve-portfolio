import { Router } from "express";
import rateLimit from "express-rate-limit";
import { postContact } from "../controllers/contactController.js";

const router = Router();

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Trop de messages envoyés, réessaie plus tard." },
});

router.post("/", contactLimiter, postContact);

export default router;
