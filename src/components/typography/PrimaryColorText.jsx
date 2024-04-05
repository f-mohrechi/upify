import React from "react";

export default function PrimaryColorText({ text, ClassName }) {
  return (
    <div>
      <p className={`text-primary-500 ${ClassName}`}>{text}</p>
    </div>
  );
}
