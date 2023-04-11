import Image from "next/image";

import VerticalDivider from "@/client/components/VerticalDivider";
import UserDisplay from "@/client/components/UserDisplay";

import trelloLogo from "./assets/trello-logo.svg";
import trelloMarkBlue from "./assets/trello-mark-blue.svg";
import mockUserImage from "./assets/navbar-user.png";
import alertCircle from "./assets/alert-circle-outline.svg";
import bell from "./assets/bell-outline.svg";
import plusCircle from "./assets/plus-circle-outline.svg";
import search from "./assets/search-outline.svg";

function Navbar() {
  return (
    <div className="flex justify-between py-1 px-4 border-gray-100 border-b">
      <div className="flex items-center w-8/12 gap-1">
        <Image
          src={trelloLogo}
          alt="trello logo"
          width={76}
          height={30}
          className="hidden md:block"
        />
        <VerticalDivider className="hidden md:flex mx-2" />
        <div className="flex items-center gap-2">
          <Image
            src={trelloMarkBlue}
            alt="trello markblue"
            width={30}
            height={30}
          />
          <div className="hidden md:block">Boards</div>
        </div>
        <VerticalDivider className="hidden md:flex  mx-2" />
        <div className="hidden md:flex bg-gray-100 items-center h-9 p-3 rounded-full gap-3">
          <input type="text" className="bg-gray-100" />
          <Image src={search} alt="search" width={16} height={16} />
        </div>
        <Image
          src={search}
          alt="search"
          width={16}
          height={16}
          className="flex md:hidden opacity-40"
        />
      </div>
      <div className="flex justify-between items-center w-5/12 md:w-2/12 ">
        <Image src={plusCircle} alt="plus" width={16} height={16} />
        <Image src={alertCircle} alt="alert" width={16} height={16} />
        <Image src={bell} alt="bell" width={16} height={16} />
        <UserDisplay id={0} img={mockUserImage} />
      </div>
    </div>
  );
}

export default Navbar;
