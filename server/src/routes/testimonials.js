import { Router } from "express";
import rateLimit from "express-rate-limit";
import { postTestimonial } from "../controllers/testimonialController.js";

const router = Router();

const testimonialLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Trop d'avis envoyés, réessaie plus tard." },
});

router.post("/", testimonialLimiter, postTestimonial);

export default router;
