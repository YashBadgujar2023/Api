import express from "express";
import { Request } from "express";
import { Response } from "express";
import { NextFunction } from "express";
import { HttpError } from "http-errors";
import { config } from "./config/config";
import createHttpError from "http-errors";
import globalErrorHandle from "./middlewares/globalErrorHandle";
import userRouter from "./user/userRouter";
import { createBook } from "./book/bookContoller";

const app = express();
app.use(express.json());
//Routes
//http methods : GET,Post,Patch,Put,Delete
app.get("/", (req, res, next) => {
  res.json({
    message: "I am Using the node js",
  });
});

app.use("/api/users", userRouter);
app.use("/api/books", createBook);

app.use(globalErrorHandle);

export default app;
