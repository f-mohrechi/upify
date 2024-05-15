import React from "react";
import { useParams } from "react-router-dom";

function Page() {
  let { title } = useParams();
  return (
    <div className="text-white">
      <h1>{title}</h1>
      <p>Page content goes here...</p>
    </div>
  );
}

export default Page;
