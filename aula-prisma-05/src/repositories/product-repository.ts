import prisma from "database/database";
import {Product} from "@prisma/client";

async function getProducts():Promise<Product[]> {
  return await prisma.product.findMany();
}

async function getProduct(id: number):Promise<Product> {
  return await prisma.product.findUnique({
    where: {id}
  })
}

async function createProduct(product: Product) {
  await prisma.product.create({
    data: product
  })
}

const productRepository = {
  getProduct,
  getProducts,
  createProduct
}

export default productRepository;