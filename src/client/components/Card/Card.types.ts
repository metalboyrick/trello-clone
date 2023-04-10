import { MutableRefObject } from "react";

export interface CardProps {
  id: number;
  slot: string;
  headline: string;
  description: string;
  img?: string;
  tags: string[];
  // TODO: define user mechanism
  users: any[];
  commentCount: number;
  likes: number;
  shared: number;
  order: number;
}
