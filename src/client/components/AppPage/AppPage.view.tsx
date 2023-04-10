import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import SlotColumn from "@/client/components/SlotColumn";
import Card from "@/client/components/Card";

import { AppPageProps } from "./AppPage.types";
import useController from "./AppPage.controller";
import Spinner from "../Spinner/Spinner.view";

function AppPage({ initialData = null }: AppPageProps) {
  const { handleDragEnd, data, loading } = useController();

  return (
    <div>
      {loading && <Spinner />}
      {!loading && (
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
      )}
    </div>
  );
}

export default AppPage;
