import React from "react";
import Image from "next/image";

import profilePlaceholder from "./assets/profile-placeholder.png";
import { UserDisplayProps } from "./UserDisplay.types";

function UserDisplay({
  id,
  img,
  moreCount = 0,
  className = "",
}: UserDisplayProps) {
  return (
    <div key={id} className={`rounded-full w-8 h-8 ${className}`}>
      {img && (
        <Image
          src={img || profilePlaceholder}
          alt={"user"}
          width={32}
          height={32}
          className="rounded-full "
        />
      )}
      {!img && (
        <div
          className={`flex ${
            moreCount > 0 && "text-xs text-light"
          } bg-black text-white justify-center rounded-full  items-center w-full h-full`}
        >
          +{moreCount > 0 ? moreCount.toString() : ""}
        </div>
      )}
    </div>
  );
}

export default UserDisplay;
