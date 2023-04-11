import { Draggable } from "react-beautiful-dnd";
import Image from "next/image";

import attach from "./assets/attach.svg";
import heart from "./assets/heart.svg";
import messageSquare from "./assets/message-square.svg";

import { CardProps } from "./Card.types";
import UserDisplay from "../UserDisplay";

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
            <div className="relative w-full h-40 mb-4">
              <Image src={img} alt="cover image" fill className="rounded-md" />
            </div>
          )}

          {tags.length > 0 && (
            <div className="flex gap-x-1 mb-2">
              {tags.map((item) => renderColorCode(item))}
            </div>
          )}
          <h6>{headline}</h6>
          <p className="text-sm text-black opacity-40 font-light">
            {description}
          </p>
          <div className="flex justify-between items-center mt-4">
            <div className="flex gap-x-[-10px]">
              {users.length > 0 &&
                users.map((item, index) => {
                  if (index === 0)
                    return (
                      <UserDisplay key={item.id} id={item.id} img={item.img} />
                    );

                  return (
                    <UserDisplay
                      key={item.id}
                      id={item.id}
                      img={item.img}
                      className="-ml-4"
                    />
                  );
                })}
              <UserDisplay
                id={-1}
                className={users.length > 0 ? "-ml-4" : ""}
              />
            </div>
            <div className="w-6/12 text-sm flex justify-between">
              <div className="flex gap-1 font-light text-black">
                <div className="font-light text-black opacity-30">
                  {commentCount}
                </div>
                <Image
                  src={messageSquare}
                  alt="message"
                  width={14}
                  height={14}
                />
              </div>
              <div className="flex gap-1">
                <div className="font-light text-black opacity-30">{likes}</div>
                <Image src={heart} alt="heart" width={14} height={14} />
              </div>
              <div className="flex gap-1 font-light text-black">
                <div className="font-light text-black opacity-30">{shared}</div>
                <Image src={attach} alt="attach" width={14} height={14} />
              </div>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
}

export default Card;
