import { VerticalDividerProps } from "./VerticalDivider.types";

function VerticalDivider({ className = "" }: VerticalDividerProps) {
  return (
    <div
      className={`border-l border-[#979797]-500 h-10 my-2 mx-4 ${className}`}
    ></div>
  );
}

export default VerticalDivider;
