import { Draggable } from "react-beautiful-dnd";

import { CardProps } from "./Card.types";

function Card({
  id,
  slot,
  headline,
  description,
  img,
  tags,
  // TODO: define user mechanism
  users,
  commentCount,
  likes,
  shared,
  order,
}: CardProps) {
  return (
    <Draggable draggableId={id.toString()} index={order} key={id}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {headline}
        </div>
      )}
    </Draggable>
  );
}

export default Card;
