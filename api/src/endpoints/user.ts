import { User } from "../models"

export type GetUserReply = {
  result: User;
}

export type GetUserParams = {
  userId: string;
}