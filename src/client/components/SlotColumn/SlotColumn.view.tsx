import { Droppable } from "react-beautiful-dnd";
import Image from "next/image";

import Card from "@/client/components/Card";
import AddCardButton from "@/client/components/AddCardButton";

import { SlotColumnProps } from "./SlotColumn.types";
import tripleDotsIcon from "./assets/triple-dots-icon.svg";

function SlotColumn({ name, cardData }: SlotColumnProps) {
  const sortedCardData = cardData.sort((a, b) => a.order - b.order);
  return (
    <div className="flex flex-col gap-1">
      <div className="bg-zinc-100 text-black max-w-lg px-4 py-3 rounded-md flex justify-between min-w-[350px] mb-2">
        <div>{name}</div>
        <Image src={tripleDotsIcon} alt="triple dots" width={24} height={24} />
      </div>
      <Droppable droppableId={name}>
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className={`${snapshot.isDraggingOver ? "bg-blue-100" : ""}`}
          >
            {sortedCardData.map((item, index) => (
              <Card key={index} {...item} />
            ))}
            {!snapshot.isDraggingOver && <AddCardButton />}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}

export default SlotColumn;
