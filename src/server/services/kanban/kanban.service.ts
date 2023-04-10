import { injectable } from "tsyringe";

import { ICard } from "./kanban.interfaces";
import { KanbanDao } from "./kanban.dao";
import { MoveCardDto } from "./kanban.dto";

@injectable()
export class KanbanService {
  constructor(private readonly kanbanDao: KanbanDao) {}

  getCards(): ICard[] {
    return this.kanbanDao.getCards();
  }

  moveCard(moveCardDto: MoveCardDto) {
    const { card, destSlot, destOrder } = moveCardDto;
    const { slot: oldSlot, order: oldSlotOrder } = card;

    // commit new card changes
    const newData = { ...card };
    newData.order = destOrder;
    newData.slot = destSlot;

    if (destSlot === oldSlot) {
      // decrement all previous slots
      const oldSlotData = this.kanbanDao.getCardsBySlot(oldSlot);
      for (let i = 0; i < oldSlotData.length; i++) {
        if (oldSlotData[i].order <= destOrder) {
          oldSlotData[i].order--;
          this.kanbanDao.modifyCard(oldSlotData[i]);
        }
      }

      this.kanbanDao.modifyCard(newData);
    } else {
      // change order on destination slot
      const newSlotData = this.kanbanDao.getCardsBySlot(destSlot);
      for (let i = 0; i < newSlotData.length; i++) {
        if (newSlotData[i].order >= destOrder) {
          newSlotData[i].order++;
          this.kanbanDao.modifyCard(newSlotData[i]);
        }
      }

      this.kanbanDao.modifyCard(newData);

      // changing order on previous slot
      const oldSlotData = this.kanbanDao.getCardsBySlot(oldSlot);
      for (let i = 0; i < oldSlotData.length; i++) {
        if (oldSlotData[i].order >= oldSlotOrder) {
          oldSlotData[i].order--;
          this.kanbanDao.modifyCard(oldSlotData[i]);
        }
      }
    }
  }
}
