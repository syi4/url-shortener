import { Request, Response } from "express";
import shortUrl from "../models/shortUrl";
import analytics from "../models/analytics";

export const createShortUrl = async (req: Request, res: Response) => {
  const { destination } = req.body;

  const newUrl = await shortUrl.create({ destination });

  return res.send(newUrl);
};

export const handleRedirect = async (req: Request, res: Response) => {
  const { shortId } = req.params;

  const short = await shortUrl.findOne({ shortId }).lean();

  if (!short) {
    return res.status(404);
  }

  analytics.create({ shortUrl: short._id });

  return res.redirect(short.destination);
};

export const getAnalytics = async (req: Request, res: Response) => {
  const data = await analytics.find({}).lean();

  return res.send(data);
};
