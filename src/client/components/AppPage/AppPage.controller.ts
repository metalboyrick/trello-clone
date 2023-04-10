import { OnDragEndResponder } from "react-beautiful-dnd";

import useGetCards from "@/client/hooks/queries/useGetCards";
import usePostMoveCard from "@/client/hooks/mutations/usePostMoveCard";

function useController() {
  const { data, getCards } = useGetCards();
  const { moveCard } = usePostMoveCard();

  const handleDragEnd: OnDragEndResponder = async (result) => {
    const { destination, draggableId } = result;

    if (!destination) return;

    await moveCard({
      card: data.filter((item) => item.id === Number(draggableId))[0],
      destSlot: destination.droppableId,
      destOrder: destination.index,
    });

    await getCards();
  };

  return { handleDragEnd, data };
}

export default useController;
