import { Request, Response } from "express";
import { createCategiryService } from "src/services/categoryService";
// const createCategiryService = require('src/services/categoryService').createCategiryService


export const categoryList = async (req: Request, res: Response) => {
  res.send("alll cat listtt......");
};



export const createCategory = async (req: Request, res: Response) => {
  
  const result = await createCategiryService(req, res);
  res.json(result);

};
