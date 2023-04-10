import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import SlotColumn from "@/client/components/SlotColumn";
import Card from "@/client/components/Card";

import { AppPageProps } from "./AppPage.types";
import useController from "./AppPage.controller";

function AppPage({ initialData = null }: AppPageProps) {
  const { handleDragEnd, data } = useController();

  return (
    <div>
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="flex flex-row">
          <SlotColumn
            name="Todo"
            cardData={data.filter((item) => item.slot === "Todo")}
          />
          <SlotColumn
            name="In Progress"
            cardData={data.filter((item) => item.slot === "In Progress")}
          />
        </div>
      </DragDropContext>
    </div>
  );
}

export default AppPage;
