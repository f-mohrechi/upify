import React from "react";
import PrimaryColorText from "../typography/PrimaryColorText";
import SideMenuItem from "./SideMenuItem";
import AddPlayListButton from "../buttons/AddPlayListButton";

export default function SideMenu({ handleSelectPage, activeComponent }) {
  return (
    <>
      <div className="py-5">
        <PrimaryColorText text={"Menu"} ClassName={"text-lg pl-2"} />

        <div className="my-1">
          <SideMenuItem
            isActive={activeComponent === "Home" ? true : false}
            handleSelectPage={handleSelectPage}
            text={"Home"}
            icon={"/icons/home.svg"}
          />
        </div>
        <div className="my-1">
          <SideMenuItem
            isActive={activeComponent === "Discover" ? true : false}
            handleSelectPage={handleSelectPage}
            text={"Discover"}
            icon={"/icons/discover.svg"}
          />
        </div>
        <div className="my-1">
          <SideMenuItem text={"Albums"} icon={"/icons/albums.svg"} />
        </div>
        <div className="my-1">
          <SideMenuItem text={"Artists"} icon={"/icons/artists.svg"} />
        </div>
      </div>

      <div className="py-5">
        <PrimaryColorText text={"Library"} ClassName={"text-lg pl-2"} />

        <div className="my-1">
          <SideMenuItem text={"Recently Added"} icon={"/icons/clock.svg"} />
        </div>
        <div className="my-1">
          <SideMenuItem text={"Most Played"} icon={"/icons/recents.svg"} />
        </div>
      </div>

      <div className="py-5">
        <PrimaryColorText
          text={"Playlist and favorite"}
          ClassName={"text-lg pl-2"}
        />

        <div className="my-1">
          <SideMenuItem text={"Your Favorites"} icon={"/icons/heart.svg"} />
        </div>
        <div className="my-1">
          <SideMenuItem text={"Your Playlist"} icon={"/icons/playlist.svg"} />
        </div>
        <div className="my-1">
          <AddPlayListButton />
        </div>
      </div>
    </>
  );
}
