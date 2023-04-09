import type { NextApiRequest, NextApiResponse } from "next";
import { MessageResponseDto } from "@/server/common/dto";

import { GetCardsResponseDto } from "./kanban.dto";

class KanbanController {
  getCards(req: NextApiRequest, res: NextApiResponse<GetCardsResponseDto>) {}

  moveCard(req: NextApiRequest, res: NextApiResponse<MessageResponseDto>) {}
}

const kanbanController = new KanbanController();

export default kanbanController;
