import { Droppable } from "react-beautiful-dnd";

import Card from "@/client/components/Card";

import { SlotColumnProps } from "./SlotColumn.types";

function SlotColumn({ name, cardData }: SlotColumnProps) {
  const sortedCardData = cardData.sort((a, b) => a.order - b.order);
  return (
    <Droppable droppableId={name}>
      {(provided) => (
        <div {...provided.droppableProps} ref={provided.innerRef}>
          <div className="font-bold">{name}</div>
          {sortedCardData.map((item, index) => (
            <Card key={index} {...item} />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}

export default SlotColumn;
