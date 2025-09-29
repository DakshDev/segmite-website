import express from "express";
import "dotenv/config";
import path from "path";
import { membershipRoute } from "./routes/member.route.js";
import { organizationRoute } from "./routes/organization.route.js";
import { MailRoute } from "./routes/mail.route.js";

const app = express();
const PORT = process.env.PORT || 3000;
const srcPath = path.resolve("src");

app.use(express.static(path.resolve("public")));
app.set("view engine", "ejs");
app.set("views", path.join(srcPath, "views"));

// Middleware to parse request bodies
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

app.use(MailRoute);
app.get("/", (_, res) => res.render("main"));
app.use("/membership", membershipRoute);
app.use("/organization", organizationRoute);
app.get("/activities-and-announcements", (_, res) => res.render("activities-and-announcements"));
app.get("/past-activities", (_, res) => res.render("past-activities"));
app.get("/journals", (_, res) => res.render("download/journals"));
app.get("/publications", (_, res) => res.render("download/publications"));
app.get("/contact", (_, res) => res.render("contact"));

app.get("/empty", (_, res) => res.render("empty"));

app.use((_, res) => {
  return res.status(404).send("<h1>Page Not Found</h1><a href='/'>Go Back</a>");
});

// ========================
app.listen(PORT, () => console.log(`🟢 Server is running on PORT:${PORT}`));
