import React from "react";

export default function ViewMoreButton() {
  return (
    <div>
      <button className="flex flex-col items-center">
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
