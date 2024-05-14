import React from "react";

export default function PrimaryColorText({ text, ClassName }) {
  return (
    <div>
      <p className={`text-rose-500 ${ClassName}`}>{text}</p>
    </div>
  );
}
