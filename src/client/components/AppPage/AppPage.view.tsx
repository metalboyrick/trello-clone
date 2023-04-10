import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import Card from "@/client/components/Card";

import { AppPageProps } from "./AppPage.types";
import useController from "./AppPage.controller";

function AppPage({ initialData = null }: AppPageProps) {
  const { handleDragEnd, data } = useController();

  return (
    <div>
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="flex">
          <Droppable droppableId="list1">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {data.map((item, index) => (
                  <Card key={index} index={index} text={item} />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </DragDropContext>
    </div>
  );
}

export default AppPage;
