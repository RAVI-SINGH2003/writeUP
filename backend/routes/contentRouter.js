import { Router } from "express";
import {
  getPageContent,
  savePageContent,
} from "../controllers/contentController.js";

const contentRouter = Router();

contentRouter
  .route("/content/:pageName")
  .get(getPageContent)
  .post(savePageContent);

export default contentRouter;
