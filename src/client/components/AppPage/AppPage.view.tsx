import Image from "next/image";
import { DragDropContext } from "react-beautiful-dnd";

import SlotColumn from "@/client/components/SlotColumn";
import Spinner from "@/client/components/Spinner";
import Navbar from "@/client/components/Navbar";
import UserDisplay from "@/client/components/UserDisplay";
import VerticalDivider from "@/client/components/VerticalDivider";

import globe from "./assets/globe.svg";
import heart from "./assets/heart.svg";
import cardboard from "./assets/cardboard.svg";

import { AppPageProps } from "./AppPage.types";
import useController from "./AppPage.controller";
import { COLUMNS, USER_IMAGES } from "./AppPage.constants";

function AppPage({ initialData = null }: AppPageProps) {
  const { handleDragEnd, data, loading, boardRef } = useController();

  return (
    <div>
      <Navbar />
      <div className="flex flex-col w-11/12 mx-auto">
        <div className="flex flex-col md:flex-row justify-between my-5 items-left md:items-center w-full">
          <div className="md:flex-1 text-medium text-lg mr-10">Brackets</div>
          <div className="flex w-full md:flex-3 justify-between items-center">
            <div className="flex justify-start gap-1 text-black opacity-40">
              <Image src={heart} alt="heart" width={16} height={16} />
              <VerticalDivider />
              <div className="flex gap-1 items-center">
                <Image src={globe} alt="globe" width={16} height={16} />
                <div>Public</div>
              </div>

              <VerticalDivider />
              <Image src={cardboard} alt="cardboard" width={16} height={16} />
            </div>
            <div className="flex justify-end gap-4 items-center">
              <div className="flex items-center">
                <UserDisplay id={-1} img={USER_IMAGES[0]} />
                {USER_IMAGES.slice(1, 6).map((item, index) => (
                  <UserDisplay
                    id={-1}
                    className={"-ml-4"}
                    key={index}
                    img={item}
                  />
                ))}

                <UserDisplay id={-1} className={"-ml-4"} moreCount={44} />
              </div>
              <div>Menu</div>
            </div>
          </div>
        </div>
        <div ref={boardRef} className="overflow-x-scroll">
          {loading && (
            <div className="w-full h-full flex justify-center items-center">
              <Spinner />
            </div>
          )}
          {!loading && (
            <DragDropContext onDragEnd={handleDragEnd}>
              <div className="flex flex-row gap-4">
                {COLUMNS.map((columnName, index) => (
                  <SlotColumn
                    key={index}
                    name={columnName}
                    cardData={data.filter((item) => item.slot === columnName)}
                  />
                ))}
              </div>
            </DragDropContext>
          )}
        </div>
      </div>
    </div>
  );
}

export default AppPage;
