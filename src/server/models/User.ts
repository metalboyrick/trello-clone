import type { ImageData } from "@/server/common/types";

export interface User {
  id: number;
  name: string;
  img: ImageData;
}
