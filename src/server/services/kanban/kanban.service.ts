import { ICard } from "./kanban.interfaces";

export class KanbanService {
  constructor() {}

  getCards(): ICard[] {
    return [];
  }

  moveCard(prevCard: ICard, newSlot: string, newOrder: string) {}
}
