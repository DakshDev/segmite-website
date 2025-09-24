import { Router } from "express";

const router = Router();

router.get("/", (_, res) => res.redirect("/"));
router.get("/executive-committee", (_, res) => res.render("organization/executive-committee"));
router.get("/editorial-board", (_, res) => res.render("organization/editorial-board"));
router.get("/sub-committee", (_, res) => res.render("organization/sub-committee"));

export { router as organizationRoute };
