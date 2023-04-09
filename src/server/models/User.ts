import type { ImageData } from "@/server/types";

export interface User {
  id: number;
  name: string;
  img: ImageData;
}
