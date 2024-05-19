import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getOneAlbum, getOnePlaylist, getToken } from "../services/spotify";
import Loading from "../components/loading/Loading";
import GoBackButton from "../components/buttons/GoBackButton";

export default function AlbumPage() {
  const [album, setAlbum] = useState(null);
  const [loading, setLoading] = useState(true);

  const { id } = useParams(); // Extract id from URL

  useEffect(() => {
    let isMounted = true;

    getToken().then((access_token) => {
      getOneAlbum(access_token, id)
        .then((album) => {
          if (isMounted) {
            setAlbum(album);
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
  console.log(album, "album");

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="px-3">
      <div className="flex justify-end w-full px-10 py-5">
        <GoBackButton onClick={goBack} />
      </div>

      {loading && (
        <div className="flex justify-center items-center w-full h-screen">
          <Loading />
        </div>
      )}
    </div>
  );
}
