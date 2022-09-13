import Image from "next/image";
import React from "react";
import SidebarMenuItem from "./SidebarMenuItem";
import { HomeIcon } from "@heroicons/react/24/solid";
import {
  BellIcon,
  BookmarkIcon,
  ClipboardIcon,
  EllipsisHorizontalCircleIcon,
  EllipsisHorizontalIcon,
  EnvelopeIcon,
  HashtagIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

export default function Sidebar() {
  return (
    <div className="hidden sm:flex flex-col p-2 lg:items-start fixed h-full">
      {/* Twitter logo */}
      <div className="hoverEffect p-0 hover:bg-blue-100 lg:px-1">
        <Image
          width="50"
          height="50"
          src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png"
          alt=""
        ></Image>
      </div>
      {/* Menu */}
      <div className="mt-4 mb-2.5 lg:items-start">
        <SidebarMenuItem text="Home" Icon={HomeIcon} active />
        <SidebarMenuItem text="Explore" Icon={HashtagIcon} />
        <SidebarMenuItem text="Notifications" Icon={BellIcon} />
        <SidebarMenuItem text="Messages" Icon={EnvelopeIcon} />
        <SidebarMenuItem text="Bookmarks" Icon={BookmarkIcon} />
        <SidebarMenuItem text="Lists" Icon={ClipboardIcon} />
        <SidebarMenuItem text="Profile" Icon={UserIcon} />
        <SidebarMenuItem text="More" Icon={EllipsisHorizontalCircleIcon} />
      </div>
      {/* Button */}
      <div className="mb-2.5">
        <button className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden lg:inline">
          Tweet
        </button>
      </div>
      {/* Mini-Profile */}
      <div className="hoverEffect text-gray-700 items-center justify-center flex lg:justify-start mt-auto">
        <Image
          width={50}
          height={50}
          src={
            "https://icon-library.com/images/computer-programmer-icon/computer-programmer-icon-7.jpg"
          }
          alt="user-icon"
          className="h-10 w-10 rounded-full lg:mr-2"
        />
        <div className="leading-5 hidden lg:inline ">
          <h4 className="font-bold">Minh Tri Dev</h4>
          <p className="text-gray-500">@tritmdev</p>
        </div>
        <EllipsisHorizontalIcon className="h-5 lg:ml-8 hidden lg:inline " />
      </div>
    </div>
  );
}
