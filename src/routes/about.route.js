import { Router } from "express";

const router = Router();

router.get("/", (_, res) => res.render("about/index"));
router.get("/main-activities", (_, res) => res.render("about/main-activities"));
router.get("/contact-and-other-info", (_, res) => res.render("about/contact-and-other-info"));
router.get("/management", (_, res) => res.render("about/management"));
// Remove
router.get("/achievements", (_, res) => res.render("about/achievements"));
router.get("/segmite-events", (_, res) => res.render("about/segmite-events"));

export { router as aboutRoute };
