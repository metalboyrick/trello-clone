import { Draggable } from "react-beautiful-dnd";

import { CardProps } from "./Card.types";

function Card({ text, index }: CardProps) {
  return (
    <Draggable draggableId={text as string} index={index} key={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {text}
        </div>
      )}
    </Draggable>
  );
}

export default Card;
