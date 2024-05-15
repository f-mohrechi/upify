import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getNewReleasePodcasts, getToken } from "../services/spotify";
import PlaylistBox from "../components/boxes/PlaylistBox";
import PrimaryColorText from "../components/typography/PrimaryColorText";

function Page() {
  let { title } = useParams();
  title = title.replace(/-/g, " "); // replace hyphens with spaces

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  const [data, setData] = useState(null);

  useEffect(() => {
    getToken().then((access_token) => {
      switch (title) {
        case "New Release Playlists":
          getNewReleasePodcasts(access_token).then((playlists) => {
            setData(playlists);
          });
          break;
        default:
          setData(null);
      }
    });
    console.log(data, "data");
  }, [title, data]);

  return (
    <div className="text-white px-20 py-10">
      <div className="flex justify-between items-center w-full">
        <PrimaryColorText text={title} ClassName={"text-3xl font-semibold"} />

        <button onClick={goBack} title="go back">
          <img src="/icons/forward.svg" alt="" />
        </button>
      </div>

      {data ? (
        <div>
          <div className="mt-6 grid grid-cols-6 gap-x-10 items-center">
            {data.map((album) => {
              return (
                <div className="my-5">
                  <PlaylistBox data={album} />
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Page;
