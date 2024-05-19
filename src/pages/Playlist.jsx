import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getOnePlaylist, getToken } from "../services/spotify";
import Loading from "../components/loading/Loading";
import GoBackButton from "../components/buttons/GoBackButton";
import HeaderInfo from "../components/sections/HeaderInfo";
import SongsTable from "../components/sections/tracks/SongsTable";

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

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="px-3">
      <div className="flex justify-end w-full px-10 py-5">
        <GoBackButton onClick={goBack} />
      </div>
      {playlist && <HeaderInfo data={playlist} />}

      {playlist && (
        <div className="px-20 py-10">
          <SongsTable songs={playlist.tracks.items} type={"playlist"} />
        </div>
      )}

      {loading && (
        <div className="flex justify-center items-center w-full h-screen">
          <Loading />
        </div>
      )}
    </div>
  );
}
