import { Express, Request, Response } from "express";
import {
  createShortUrl,
  handleRedirect,
  getAnalytics,
} from "../controllers/shortUrl";
import validateResource from "../middleware/validateResource";
import shortUrlSchema from "../schema/createShortUrl";

const routes = (app: Express) => {
  app.get("/healthcheck", (req: Request, res: Response) => {
    return res.send("App is up");
  });

  app.post("/api/url", validateResource(shortUrlSchema), createShortUrl);

  app.get("/:shortId", handleRedirect);

  app.get("/api/analytics", getAnalytics);
};

export default routes;
