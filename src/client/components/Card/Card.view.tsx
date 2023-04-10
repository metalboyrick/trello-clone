import { Draggable } from "react-beautiful-dnd";
import Image from "next/image";

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
  const renderColorCode = (color: string) => {
    return (
      <div
        className={`h-[8px] w-[64px] rounded-full bg-[${color}]`}
        key={color}
      />
    );
  };

  return (
    <Draggable draggableId={id.toString()} index={order} key={id}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="bg-zinc-100 text-black max-w-lg px-4 py-3 rounded-md flex flex-col min-w-[350px] mb-2"
        >
          {img && (
            <Image src={img} alt="cover image" fill className="rounded-md" />
          )}
          {tags.length > 0 && (
            <div className="flex gap-x-1 my-2">
              {tags.map((item) => renderColorCode(item))}
            </div>
          )}

          <h6>{headline}</h6>
          <p className="text-sm text-black opacity-40 font-light">
            {description}
          </p>
          <div className="flex flex-row justify-between"></div>
        </div>
      )}
    </Draggable>
  );
}

export default Card;
