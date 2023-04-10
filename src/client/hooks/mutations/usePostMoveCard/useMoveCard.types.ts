import type { TCard } from "@/client/types/data";

export interface MoveCardParams {
  card: TCard;
  destSlot: string;
  destOrder: number;
}

export interface MoveCardResponse {
  status: number;
  message: string;
}
