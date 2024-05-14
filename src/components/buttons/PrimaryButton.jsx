import React from "react";

export default function PrimaryButton({ text }) {
  return (
    <div>
      <button className="bg-zinc-800 text-rose-500 px-4 py-2 rounded-lg border border-zinc-800 hover:bg-transparent hover:border-rose-500 transition-all ease-linear delay-75">
        {text}
      </button>
    </div>
  );
}
