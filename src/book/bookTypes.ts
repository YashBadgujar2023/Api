import { User } from "../user/userTypes";

export interface Book {
  _id: string;
  title: string;
  author: User;
  coverImage: string;
  genre: string;
  file: string;
  createdAt: Date;
  updateAt: Date;
}
