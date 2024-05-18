import React from "react";

export default function GoBackButton({ onClick }) {
  return (
    <button onClick={onClick} title="go back">
      <img src="/icons/forward.svg" alt="" />
    </button>
  );
}
