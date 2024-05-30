import express from "express";
import { createBook } from "./bookContoller";

const bookRouter = express.Router();

//* making the url for the createbook it is present in the book controller
bookRouter.post("/",createBook);

export default bookRouter;