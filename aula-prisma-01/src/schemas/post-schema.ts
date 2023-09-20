import Joi from "joi";
import JoiDate from "@joi/date";
import { CreatePost } from "../repositories/post-repository";

const JoiD = Joi.extend(JoiDate);

export const postSchema = Joi.object<CreatePost>({
  username: Joi.string().required(),
  title: Joi.string().required(),
  content: Joi.string().required(),
  createAt: JoiD.date().format('YYYY-MM-DD')
})