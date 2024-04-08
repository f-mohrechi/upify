import React, { useState } from "react";
import TitleTwoColors from "../components/typography/TitleTwoColors";
import SongBox from "../components/boxes/SongBox";
import ViewMoreButton from "../components/buttons/ViewMoreButton";

export default function Home() {
  const [songs, setSongs] = useState([
    {
      id: 1,
      name: "Whatever It Takes",
      artist: "Imagne Dragons",
      img: "/img/song-1.svg",
      link: "",
    },
    {
      id: 2,
      name: "Whatever It Takes",
      artist: "Imagne Dragons",
      img: "/img/song-1.svg",
      link: "",
    },
    {
      id: 3,
      name: "Whatever It Takes",
      artist: "Imagne Dragons",
      img: "/img/song-1.svg",
      link: "",
    },
    {
      id: 4,
      name: "Whatever It Takes",
      artist: "Imagne Dragons",
      img: "/img/song-1.svg",
      link: "",
    },
    {
      id: 5,
      name: "Whatever It Takes",
      artist: "Imagne Dragons",
      img: "/img/song-1.svg",
      link: "",
    },
  ]);

  return (
    <div className="px-20 py-10">
      <div>
        <TitleTwoColors text={"Weekly Top "} colorText={"Songs"} />

        <div className="grid grid-cols-6 gap-x-10 mt-6 items-center">
          {songs.map((item, index) => {
            return <SongBox data={item} key={item.id} />;
          })}
          <div>
            <ViewMoreButton />
          </div>
        </div>
      </div>

      <div className="my-14">
        <TitleTwoColors text={"New Release "} colorText={"Songs"} />

        <div className="grid grid-cols-6 gap-x-10 mt-6 items-center">
          {songs.map((item, index) => {
            return <SongBox data={item} key={item.id} />;
          })}
          <div>
            <ViewMoreButton />
          </div>
        </div>
      </div>
    </div>
  );
}
