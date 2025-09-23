import { Router } from "express";

const router = Router();

router.get("/", (_, res) => res.render("membership/index"));
router.get("/form", (_, res) => res.render("membership/membership_form"));
router.get("/life-member", (_, res) => res.render("membership/life-member"));

export { router as membershipRoute };
