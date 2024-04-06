import React from "react";

export default function PrimaryButton({ text }) {
  return (
    <div>
      <button className="bg-main-700 text-main-500 px-4 py-2 rounded-lg">
        {text}
      </button>
    </div>
  );
}
