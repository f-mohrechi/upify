import React from "react";

export default function SideMenuItem({ text, icon }) {
  return (
    <div className="p-2">
      <div className="flex items-center gap-x-3">
        <img src={icon} alt="" />
        <p className="text-white text-xl font-semibold">{text}</p>
      </div>
    </div>
  );
}
