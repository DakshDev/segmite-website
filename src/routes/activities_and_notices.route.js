import { Router } from "express";

const router = Router();

router.get("/recent-activities", (_, res) => res.render("activities-and-notices/recent-activities"));
router.get("/notice", (_, res) => res.render("activities-and-notices/notice"));

export { router as ActivitiesAndNoticesRoute };
