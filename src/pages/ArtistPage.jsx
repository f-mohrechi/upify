import React from "react";
import { useParams } from "react-router-dom";

export default function ArtistPage() {
  const { id } = useParams(); // Extract id and type from URL

  return (
    <div>
      <p>{id}</p>
    </div>
  );
}
