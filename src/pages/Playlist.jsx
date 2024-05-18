import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getOnePlaylist, getToken } from "../services/spotify";
import Loading from "../components/loading/Loading";

export default function Playlist() {
  const [playlist, setPlaylist] = useState(null);
  const [loading, setLoading] = useState(true);

  const { id } = useParams(); // Extract id from URL

  useEffect(() => {
    let isMounted = true;

    getToken().then((access_token) => {
      getOnePlaylist(access_token, id)
        .then((playlist) => {
          if (isMounted) {
            setPlaylist(playlist);
            setLoading(false);
          }
        })
        .catch((error) => {
          console.error("Error fetching playlist:", error);
        });
    });

    return () => {
      isMounted = false;
    };
  }, [id]);
  console.log(playlist);

  return (
    <div>
      {loading && (
        <div className="flex justify-center items-center w-full h-screen">
          <Loading />
        </div>
      )}
    </div>
  );
}
