import React from "react";

export default function TitleTwoColors({ text, colorText }) {
  return (
    <div>
      <p className="text-white text-3xl font-bold">
        {text} <span className="text-main-500">{colorText}</span>{" "}
      </p>
    </div>
  );
}
