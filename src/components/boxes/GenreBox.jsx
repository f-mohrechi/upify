import React from "react";
import { Link } from "react-router-dom";

export default function GenreBox({ data }) {
  return (
    <div>
      <Link to={data.link}>
        <img className="rounded-md w-80" src={data.img} alt="" />
      </Link>
    </div>
  );
}
