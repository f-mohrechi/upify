import React from "react";
import { useNavigate } from "react-router-dom";

export default function CategoryBox({ data, dataType }) {
  const imageUrl =
    data && data.icons && data.icons.length > 0 && data?.icons[0]?.url;

  const text = "Category";
  const navigate = useNavigate();
  const goToPage = (text) => {
    navigate(`/${text}/${data.id}`, { state: { dataType: dataType } });
  };
  return (
    <button
      onClick={() => goToPage(text)}
      className="flex flex-col bg-neutral-800 rounded-xl"
    >
      <div>
        <img className="rounded-t-xl w-full" src={imageUrl} alt="" />
      </div>

      <div className="px-4 py-2.5">
        <p className="text-white text-lg font-semibold">{data.name}</p>
      </div>
    </button>
  );
}
