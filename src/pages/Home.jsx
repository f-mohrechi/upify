import React, { useState } from "react";
import TitleTwoColors from "../components/typography/TitleTwoColors";
import SongBox from "../components/boxes/SongBox";
import ViewMoreButton from "../components/buttons/ViewMoreButton";
import MusicTrack from "../components/boxes/MusicTrack";

export default function Home() {
  const [songs, setSongs] = useState([
    {
      id: 1,
      name: "Whatever It Takes",
      artist: "Imagne Dragons",
      album: "Hard to Imagine the Neighbourhood Ever Changing",
      releaseDate: "Nov 4, 2023",
      time: "3:26",
      img: "/img/song-1.svg",
      link: "",
    },
    {
      id: 2,
      name: "Whatever It Takes",
      artist: "Imagne Dragons",
      album: "Hard to Imagine the Neighbourhood Ever Changing",
      releaseDate: "Nov 4, 2023",
      time: "3:26",
      img: "/img/song-1.svg",
      link: "",
    },
    {
      id: 3,
      name: "Whatever It Takes",
      artist: "Imagne Dragons",
      album: "Hard to Imagine the Neighbourhood Ever Changing",
      releaseDate: "Nov 4, 2023",
      time: "3:26",
      img: "/img/song-1.svg",
      link: "",
    },
    {
      id: 4,
      name: "Whatever It Takes",
      artist: "Imagne Dragons",
      album: "Hard to Imagine the Neighbourhood",
      releaseDate: "Nov 4, 2023",
      time: "3:26",
      img: "/img/song-1.svg",
      link: "",
    },
    {
      id: 5,
      name: "Whatever It Takes",
      artist: "Imagne Dragons",
      album: "Hard to Imagine the Neighbourhood Ever Changing",
      releaseDate: "Nov 4, 2023",
      time: "3:26",
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

      <div className="my-14">
        <TitleTwoColors text={"Trending "} colorText={"Songs"} />

        <div className="mt-6">
          {songs.map((item, index) => {
            return (
              <div className="my-5">
                <MusicTrack data={item} key={item.id} />
              </div>
            );
          })}
          <div className="flex justify-center mt-5">
            <ViewMoreButton />
          </div>
        </div>
      </div>
    </div>
  );
}
