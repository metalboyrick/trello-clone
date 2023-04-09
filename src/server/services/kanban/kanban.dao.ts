import store from "@/server/store";

import { ICard } from "./kanban.interfaces";

export class KanbanDao {
  getCards(): ICard[] {
    return store.cards;
  }

  getCardsBySlot(slot: string): ICard[] {
    return [];
  }

  modifyCard(modifiedCard: ICard) {}
}
