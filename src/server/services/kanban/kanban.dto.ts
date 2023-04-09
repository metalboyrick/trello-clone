import { ICard } from "./kanban.interfaces";

export type MoveCardDto = {
  card: ICard;
  destSlot: string;
  destOrder: number;
};

export type GetCardsResponseDto = ICard[];
