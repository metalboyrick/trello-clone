import "reflect-metadata";
import kanbanController from "@/server/services/kanban/kanban.controller";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") kanbanController.getCards(req, res);
  else res.status(405).json({});
}
