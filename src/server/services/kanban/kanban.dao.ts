import { ICard } from "./kanban.interfaces";

export class KanbanDao {
  constructor() {}

  getCards(): ICard[] {
    return [];
  }

  getCardsBySlot(slot: string): ICard[] {
    return [];
  }

  modifyCard(modifiedCard: ICard) {}
}
