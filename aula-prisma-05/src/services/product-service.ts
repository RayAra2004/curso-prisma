import productRepository from "../repositories/product-repository";
import {Product} from "@prisma/client";

async function getProducts() {
  const products = await productRepository.getProducts();
  return products;
}

async function getProduct(id: number) {
  const product = await productRepository.getProduct(id);
  if (!product) throw {
    name: "NotFoundError",
    message: "Post not found"
  };

  return product;
}

async function createProduct(post: Product) {
  return await productRepository.createProduct(post);
}

const postService = {
  getProducts,
  createProduct,
  getProduct
}

export default postService;