import type { ImageData } from "@/server/types";
import type { User } from "./User";

export interface Card {
  id: number;
  slot: string;
  headline: string;
  description: string;
  img: ImageData;
  tags: string[];
  users: User[];
  commentCount: number;
  likes: number;
  shared: number;
  order: number;
}
