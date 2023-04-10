import { OnDragEndResponder } from "react-beautiful-dnd";

import useGetCards from "@/client/hooks/queries/useGetCards";
import usePostMoveCard from "@/client/hooks/mutations/usePostMoveCard";
import { useMemo, useState } from "react";

function useController() {
  const { data, loading: getCardsLoading, getCards } = useGetCards();
  const { moveCard, loading: moveCardLoading } = usePostMoveCard();

  const loading = getCardsLoading || moveCardLoading;

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

  return { handleDragEnd, data, loading: loading };
}

export default useController;
