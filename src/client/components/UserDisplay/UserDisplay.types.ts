import { StaticImageData } from "next/image";

export interface UserDisplayProps {
  id: number;
  img?: StaticImageData | string;
  moreCount?: number;
  className?: string;
}
