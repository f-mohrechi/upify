import React from "react";

export default function SearchInput({ query, setQuery, handleSearch }) {
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-x-3 bg-neutral-700 px-3 py-2 rounded-lg min-w-80"
    >
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search For Musics, Artists, Albums ..."
        className="bg-transparent border-0 outline-none w-full text-neutral-100"
      />
      <button type="submit">
        <img src="/icons/search.svg" alt="search" />
      </button>
    </form>
  );
}
