import { injectable } from "tsyringe";

import { ICard } from "./kanban.interfaces";
import { KanbanDao } from "./kanban.dao";

@injectable()
export class KanbanService {
  constructor(private readonly kanbanDao: KanbanDao) {}

  getCards(): ICard[] {
    return this.kanbanDao.getCards();
  }

  moveCard(prevCard: ICard, newSlot: string, newOrder: number) {}
}
