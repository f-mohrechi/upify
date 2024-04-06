import React from "react";

export default function SearchInput() {
  return (
    <div className="flex items-center gap-x-3 bg-dark-500 px-3 py-2 rounded-lg min-w-80">
      <img src="/icons/search.svg" alt="search" />
      <input
        type="text"
        placeholder="Search For Musics, Artists, Albums ..."
        className="bg-transparent border-0 outline-none w-full"
      />
    </div>
  );
}
