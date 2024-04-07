import React from "react";

export default function PrimaryButton({ text }) {
  return (
    <div>
      <button className="bg-main-700 text-main-500 px-4 py-2 rounded-lg border border-main-700 hover:bg-transparent hover:border-main-500 transition-all ease-linear delay-75">
        {text}
      </button>
    </div>
  );
}
