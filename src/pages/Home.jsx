import React, { useState } from "react";
import TitleTwoColors from "../components/typography/TitleTwoColors";
import SongBox from "../components/boxes/SongBox";
import ViewMoreButton from "../components/buttons/ViewMoreButton";
import MusicTrack from "../components/boxes/MusicTrack";
import ArtistBox from "../components/boxes/ArtistBox";
import MusicVideoBox from "../components/boxes/MusicVideoBox";

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

  const [artists, setArtists] = useState([
    { id: 1, name: "Eminiem", img: "/img/artist-1.png", link: "/" },
    { id: 2, name: "Eminiem", img: "/img/artist-1.png", link: "/" },
    { id: 3, name: "Eminiem", img: "/img/artist-1.png", link: "/" },
    { id: 4, name: "Eminiem", img: "/img/artist-1.png", link: "/" },
    { id: 5, name: "Eminiem", img: "/img/artist-1.png", link: "/" },
    { id: 6, name: "Eminiem", img: "/img/artist-1.png", link: "/" },
  ]);

  const [videos, setVideos] = useState([
    {
      id: 1,
      name: "Someone Like You",
      artist: "Adele",
      img: "/img/video-1.svg",
      view: "3M views",
      link: "/",
    },
    {
      id: 2,
      name: "Someone Like You",
      artist: "Adele",
      img: "/img/video-1.svg",
      view: "3M views",
      link: "/",
    },
    {
      id: 3,
      name: "Someone Like You",
      artist: "Adele",
      img: "/img/video-1.svg",
      view: "3M views",
      link: "/",
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
          <div className="flex justify-end">
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
          <div className="flex justify-end">
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

      <div className="my-14">
        <TitleTwoColors text={"Popular "} colorText={"Artists"} />

        <div className="mt-6 grid grid-cols-7 gap-x-10 items-center">
          {artists.map((item, index) => {
            return (
              <div className="my-5">
                <ArtistBox data={item} key={item.id} />
              </div>
            );
          })}
          <div className="flex justify-end mt-5">
            <ViewMoreButton />
          </div>
        </div>
      </div>

      <div className="my-14">
        <TitleTwoColors text={"Music "} colorText={"Video"} />

        <div className="mt-6 grid grid-cols-4 gap-x-10 items-center">
          {videos.map((item, index) => {
            return (
              <div className="my-5">
                <MusicVideoBox data={item} key={item.id} />
              </div>
            );
          })}
          <div className="flex justify-end">
            <ViewMoreButton />
          </div>
        </div>
      </div>
    </div>
  );
}
