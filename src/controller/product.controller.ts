import { Request, Response } from "express";
import { Product } from "../model/product.model.js";
import { handleErrorBlock } from "../utilities/utilities.js";

// API POST

export const postProduct = async (req: Request, res: Response) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error: any) {
        handleErrorBlock(res, error);
    }
}

// API GET

export const getProducts = async (req: Request, res: Response) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products)
    } catch (error: any) {
        handleErrorBlock(res, error);
    }
}

export const getProduct = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product)
    } catch (error: any) {
        handleErrorBlock(res, error);
    }
}

// API UPDATE

export const updateProduct = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);

        if (!product) {
            handleErrorBlock(res, { message: "Could not find the id..." }, 404);
            return;
        }

        const updatedProduct = await Product.findById(id);

        res.status(200).json(updatedProduct);
    } catch (error: any) {
        handleErrorBlock(res, error);
    }
}

// API DELETE

export const deleteProduct = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);

        if (!product) {
            handleErrorBlock(res, { message: "Could not find the id..." }, 404);
            return;
        }

        res.status(200).json({ message: "Product deleted successfully" });

    } catch (error: any) {
        handleErrorBlock(res, error);
    }
}