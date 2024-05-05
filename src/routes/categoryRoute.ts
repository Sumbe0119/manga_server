import express from "express";
import { categoryList, createCategory } from "src/controllers/categoryController";
// const categoryList = require('src/controllers/categoryController').CategoryList
// const createCategory = require('src/controllers/categoryController').createCategory

export const categoryRoute = express.Router();

categoryRoute.post("/create", categoryList);
categoryRoute.get("/list", createCategory);

