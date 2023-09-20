import { Post } from "@prisma/client";
import prisma from "./../database/database";

export type CreatePost = Omit<Post, "id">

async function getPosts() {
  const result = await prisma.post.findMany();
  return result;
}

async function getPost(id: number) {
  const result = await prisma.post.findUnique({
    where: {id}
  })

  return result;
}

async function createPost(post: CreatePost) {
  await prisma.post.create({
    data: post
  });
}

async function deletePost(id: number) {
  await prisma.post.delete({
    where: {id}
  })
}

const postRepository = {
  getPost,
  getPosts,
  createPost,
  deletePost
}

export default postRepository;