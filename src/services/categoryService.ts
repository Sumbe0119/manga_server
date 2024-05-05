import { Request, Response } from "express";
import { Category } from "src/entities/category.entity";


export const createCategiryService = async (req: Request, res: Response)=>{
    const { name, code } = req.body;

      const _category = new Category();
    
      _category.name = name;
      _category.code = code;
    
      Category.save(_category);
    
      return _category
}