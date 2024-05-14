import React from "react";

export default function SideMenuItem({
  text,
  icon,
  handleSelectPage,
  isActive,
}) {
  return (
    <button
      className={`p-2 rounded-lg h-full w-full outline-none focus:outline-none ${isActive ? "bg-rose-400 border border-rose-400" : "border border-transparent"}`}
      onClick={() => {
        handleSelectPage(text);
      }}
    >
      <div className="flex items-center gap-x-3">
        <img src={icon} alt="" />
        <p className="text-white text-xl font-semibold">{text}</p>
      </div>
    </button>
  );
}
