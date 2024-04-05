import React from "react";
import Sidebar from "../../sidebar/Sidebar";

export default function HomeLayout() {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-2">
        <Sidebar />
      </div>

      <div className="col-span-10 bg-red-200 h-full">
        <p>home</p>
      </div>
    </div>
  );
}
