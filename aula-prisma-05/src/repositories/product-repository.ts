import prisma from "database/database";


async function getProducts() {
  return await prisma.product.findMany();
}

async function getProduct(id: number) {
  return await prisma.product.findUnique({
    where: {id}
  })
}

async function createProduct(product) {
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