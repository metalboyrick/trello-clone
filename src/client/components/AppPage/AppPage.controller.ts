import { useEffect, useRef } from "react";
import { OnDragEndResponder } from "react-beautiful-dnd";

import useGetCards from "@/client/hooks/queries/useGetCards";
import usePostMoveCard from "@/client/hooks/mutations/usePostMoveCard";

function useController() {
  const { data, loading: getCardsLoading, getCards } = useGetCards();
  const { moveCard, loading: moveCardLoading } = usePostMoveCard();

  const boardRef = useRef<HTMLDivElement>(null);
  const scrollXRef = useRef<number | null>(null);
  const scrollYRef = useRef<number | null>(null);

  const loading = getCardsLoading || moveCardLoading;

  useEffect(() => {
    if (
      boardRef.current &&
      scrollXRef.current &&
      scrollYRef.current &&
      !loading
    )
      boardRef.current.scrollTo(scrollXRef.current, 0);
    window.scrollTo(0, scrollYRef.current || 0);
  }, [loading]);

  const handleDragEnd: OnDragEndResponder = async (result) => {
    const { destination, draggableId } = result;

    // get scroll position
    scrollXRef.current = boardRef.current?.scrollLeft || 0;
    scrollYRef.current = window.scrollY || 0;

    if (!destination) return;

    await moveCard({
      card: data.filter((item) => item.id === Number(draggableId))[0],
      destSlot: destination.droppableId,
      destOrder: destination.index,
    });

    await getCards();
  };

  return { handleDragEnd, data, loading, boardRef };
}

export default useController;
