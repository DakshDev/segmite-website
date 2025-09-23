import { Router } from "express";

const router = Router();

router.get("/executive-committee", (_, res) => res.render("organization/executive-committee"));
router.get("/editorial-board", (_, res) => res.render("organization/editorial-board"));
router.get("/members-board", (_, res) => res.render("organization/members-board"));

export { router as organizationRoute };
