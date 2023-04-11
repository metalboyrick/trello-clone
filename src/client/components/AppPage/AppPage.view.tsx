import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import SlotColumn from "@/client/components/SlotColumn";
import Spinner from "@/client/components/Spinner";
import Navbar from "@/client/components/Navbar";

import { AppPageProps } from "./AppPage.types";
import useController from "./AppPage.controller";

function AppPage({ initialData = null }: AppPageProps) {
  const { handleDragEnd, data, loading } = useController();

  return (
    <div className="w-full">
      <Navbar />
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
    </div>
  );
}

export default AppPage;
