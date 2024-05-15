import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function SideMenuItem({
  text,
  icon,
  handleSelectPage,
  // isActive,
}) {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = location.pathname === `/${text}`;
  const goToPage = (text) => {
    navigate(text);
  };
  return (
    <button
      className={`p-2 rounded-lg h-full w-full outline-none focus:outline-none ${isActive ? "bg-rose-400 border border-rose-400" : "border border-transparent"}`}
      activeClassName="bg-rose-400 border border-rose-400"
      onClick={() => {
        // handleSelectPage(text);
        goToPage(text);
      }}
    >
      <div className="flex items-center gap-x-3">
        <img src={icon} alt="" />
        <p className="text-white text-xl font-semibold">{text}</p>
      </div>
    </button>
  );
}
