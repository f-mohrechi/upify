import React, { useState } from "react";
import TitleTwoColors from "../components/typography/TitleTwoColors";
import ViewMoreButton from "../components/buttons/ViewMoreButton";
import GenreBox from "../components/boxes/GenreBox";

export default function DiscoverPage() {
  const [playlist, setPlaylist] = useState([
    {
      id: 1,
      name: "Sad Playlist",
      img: "/img/genre-1.png",
      link: "/",
    },
    {
      id: 2,
      name: "Sad Playlist",
      img: "/img/genre-1.png",
      link: "/",
    },
    {
      id: 3,
      name: "Sad Playlist",
      img: "/img/genre-1.png",
      link: "/",
    },
    {
      id: 4,
      name: "Sad Playlist",
      img: "/img/genre-1.png",
      link: "/",
    },
  ]);

  return (
    <div className="px-20 py-10">
      {/* music genres */}
      <div>
        <TitleTwoColors text={"Music"} colorText={" Genres"} />

        <div className="grid grid-cols-5 gap-x-10 mt-6 items-center">
          {playlist.map((item, index) => {
            return <GenreBox data={item} key={item.id} />;
          })}
          <div className="flex justify-end">
            <ViewMoreButton />
          </div>
        </div>
      </div>
    </div>
  );
}
