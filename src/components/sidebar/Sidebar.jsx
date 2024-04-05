import React from "react";
import "../../style/gradients.css";
import SideMenu from "./SideMenu";

export default function Sidebar() {
  return (
    <div className="bg-secondary-900 px-4 py-7 h-screen w-full sticky top-0">
      <div>
        <h1 className="main-gradient max-w-fit h-full text-3xl font-bold">
          Upify
        </h1>
      </div>

      <SideMenu />
    </div>
  );
}
