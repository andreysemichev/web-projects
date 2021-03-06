import { Request, Response, NextFunction } from "express";
import logging from "../config/logging";

const NAMESPACE = "Root Controllers";

const get = (req: Request, res: Response, next: NextFunction) => {
  logging.info(NAMESPACE, "Root health check route called");

  const locals = res.locals;
  locals.styles.push("/styles/root/root.css");

  res.render("root");
};

export default { get };
