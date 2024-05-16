import React from "react";
import { Link } from "react-router-dom";

export default function CategoryBox({ data }) {
  const imageUrl =
    data && data.icons && data.icons.length > 0 && data?.icons[0]?.url;

  return (
    <Link to={data.href} className="flex flex-col bg-neutral-800 rounded-lg">
      <div>
        <img className="rounded-t-lg w-full" src={imageUrl} alt="" />
      </div>

      <div className="px-4 py-2.5">
        <p className="text-white text-lg font-semibold">{data.name}</p>
      </div>
    </Link>
  );
}
