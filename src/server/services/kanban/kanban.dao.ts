import store from "@/server/store";

import { ICard } from "./kanban.interfaces";

export class KanbanDao {
  getCards(): ICard[] {
    return store.cards;
  }

  getCardsBySlot(slot: string): ICard[] {
    return store.cards.filter((item) => item.slot === slot);
  }

  modifyCard(modifiedCard: ICard) {
    const { id } = modifiedCard;

    // check for existence
    if (store.cards.filter((item) => item.id === id).length === 0)
      throw new Error(`Card with ID ${id} not found!`);

    // delete card first
    const newCardsSet = store.cards.filter((item) => item.id !== id);

    // replace
    newCardsSet.push(modifiedCard);

    // re-commit to store
    store.cards = newCardsSet;
  }
}
