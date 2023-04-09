import type { NextApiRequest, NextApiResponse } from "next";
import { injectable, container } from "tsyringe";

import { MessageResponseDto } from "@/server/common/dto";

import { GetCardsResponseDto, MoveCardDto } from "./kanban.dto";
import { KanbanService } from "./kanban.service";

@injectable()
class KanbanController {
  constructor(readonly kanbanService: KanbanService) {}

  // api/kanban
  getCards(req: NextApiRequest, res: NextApiResponse<GetCardsResponseDto>) {
    res.status(200).json(this.kanbanService.getCards());
  }

  // api/kanban/move
  moveCard(req: NextApiRequest, res: NextApiResponse<MessageResponseDto>) {
    try {
      const moveCardDto: MoveCardDto = req.body;
      this.kanbanService.moveCard(moveCardDto);
      res.status(200).json({ status: 200, message: "success" });
    } catch (e: any) {
      res.status(400).json({ status: 400, message: e.message });
    }
  }
}

const kanbanController = container.resolve(KanbanController);

export default kanbanController;
