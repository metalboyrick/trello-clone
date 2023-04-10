import useAxios from "@/client/hooks/common/useAxios";
import { MoveCardParams, MoveCardResponse } from "./useMoveCard.types";

function usePostMoveCard() {
  const [{ loading, error }, execute] = useAxios<
    MoveCardResponse,
    MoveCardParams
  >(
    {
      method: "POST",
      url: "/kanban/move",
    },
    {
      manual: true,
    }
  );

  const moveCard = async (params: MoveCardParams) => {
    const response = await execute({ data: params });
    return response.data;
  };

  return { moveCard, loading, error };
}

export default usePostMoveCard;
