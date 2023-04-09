import { ICard } from "./kanban.interfaces";

export type MoveCardDto = {
  card: ICard;
  destSlot: number;
  destOrder: number;
};

export type GetCardsResponseDto = ICard[];
