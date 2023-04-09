import type { NextApiRequest, NextApiResponse } from "next";
import { injectable, container } from "tsyringe";

import { MessageResponseDto } from "@/server/common/dto";

import { GetCardsResponseDto } from "./kanban.dto";
import { KanbanService } from "./kanban.service";

@injectable()
class KanbanController {
  constructor(readonly kanbanService: KanbanService) {}

  // api/kanban
  getCards(req: NextApiRequest, res: NextApiResponse<GetCardsResponseDto>) {
    console.log(this.kanbanService);

    res.status(200).json(this.kanbanService.getCards());
  }

  // api/kanban/move
  moveCard(req: NextApiRequest, res: NextApiResponse<MessageResponseDto>) {
    res.status(200);
  }
}

const kanbanController = container.resolve(KanbanController);

export default kanbanController;
