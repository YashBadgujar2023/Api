import express from "express";
import { createBook } from "./bookContoller";
import multer from "multer";
import path from "node:path";

const bookRouter = express.Router();

//* file store local -->
const upload = multer({
	dest: path.resolve(__dirname,'../../public/data/uploads'),
	limits:{fileSize:3e7}//! 3e7 is used it is javascript code which means it take the data of 30mb
});

//* making the url for the createbook it is present in the book controller
bookRouter.post("/",upload.fields([
	{name:'coverImage',maxCount:1},
	{name:'file',maxCount:1},
]),createBook);

export default bookRouter;