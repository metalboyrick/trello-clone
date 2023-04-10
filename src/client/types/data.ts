import { ImageData } from "./common";

export interface TCard {
  id: number;
  slot: string;
  headline: string;
  description: string;
  img: ImageData;
  tags: string[];
  users: TUser[];
  commentCount: number;
  likes: number;
  shared: number;
  order: number;
}

export interface TUser {
  id: number;
  name: string;
  img: ImageData;
}
