import React from "react";
import { useNavigate } from "react-router-dom";

export default function ViewMoreButton({ text, dataType }) {
  const navigate = useNavigate();

  const goToPage = (text) => {
    navigate(`/${text}`, { state: { dataType: dataType } });
  };

  return (
    <div>
      <button
        className="flex flex-col items-center"
        onClick={() => goToPage(text)}
      >
        <div className="bg-neutral-800 rounded-full p-3 flex justify-center items-center w-16 h-16">
          <img src="/icons/plus.svg" alt="" />
        </div>
        <p className="text-center text-white text-lg font-semibold pt-2">
          View All
        </p>
      </button>
    </div>
  );
}
