import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  getOneAlbum,
  getOneCategory,
  getOnePlaylist,
  getToken,
} from "../services/spotify";
import Loading from "../components/loading/Loading";
import GoBackButton from "../components/buttons/GoBackButton";
import HeaderInfo from "../components/sections/HeaderInfo";
import SongsTable from "../components/sections/tracks/SongsTable";

export default function ContentPage() {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);

  const { id, type } = useParams(); // Extract id and type from URL

  useEffect(() => {
    let isMounted = true;

    getToken().then((access_token) => {
      if (type === "album") {
        getOneAlbum(access_token, id)
          .then((album) => {
            if (isMounted) {
              setContent(album);
              setLoading(false);
            }
          })
          .catch((error) => {
            console.error("Error fetching album:", error);
          });
      } else if (type === "playlist") {
        getOnePlaylist(access_token, id)
          .then((playlist) => {
            if (isMounted) {
              setContent(playlist);
              setLoading(false);
            }
          })
          .catch((error) => {
            console.error("Error fetching playlist:", error);
          });
      } else if (type === "category") {
        getOneCategory(access_token, id)
          .then((category) => {
            if (isMounted) {
              setContent(category);
              setLoading(false);
            }
          })
          .catch((error) => {
            console.error("Error fetching category:", error);
          });
      }
    });

    return () => {
      isMounted = false;
    };
  }, [id, type]);

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  console.log("coooooooooooooooontent");

  console.log(content, "content");

  return (
    <div className="px-3">
      <div className="flex justify-end w-full px-10 py-5">
        <GoBackButton onClick={goBack} />
      </div>
      {content && <HeaderInfo data={content} />}

      {content && (
        <div className="px-20 py-10">
          <SongsTable songs={content?.tracks?.items} type={type} />
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
