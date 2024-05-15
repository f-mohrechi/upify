import React, { useEffect, useState } from "react";
import TitleTwoColors from "../components/typography/TitleTwoColors";
import SongBox from "../components/boxes/SongBox";
import ViewMoreButton from "../components/buttons/ViewMoreButton";
import MusicTrack from "../components/boxes/MusicTrack";
import ArtistBox from "../components/boxes/ArtistBox";
import MusicVideoBox from "../components/boxes/MusicVideoBox";
import AlbumBox from "../components/boxes/AlbumBox";
import PlaylistBox from "../components/boxes/PlaylistBox";
import { getNewReleasePodcasts, getToken } from "../services/spotify";

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

  const [albums, setAlbums] = useState([
    {
      id: 1,
      name: "Adele 21",
      artist: "Adele",
      img: "/img/album-1.png",
      link: "/",
    },
    {
      id: 2,
      name: "Adele 21",
      artist: "Adele",
      img: "/img/album-1.png",
      link: "/",
    },
    {
      id: 3,
      name: "Adele 21",
      artist: "Adele",
      img: "/img/album-1.png",
      link: "/",
    },
    {
      id: 4,
      name: "Adele 21",
      artist: "Adele",
      img: "/img/album-1.png",
      link: "/",
    },
    {
      id: 5,
      name: "Adele 21",
      artist: "Adele",
      img: "/img/album-1.png",
      link: "/",
    },
  ]);

  const [playlist, setPlaylist] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 5;

  useEffect(() => {
    getToken().then((access_token) => {
      getNewReleasePodcasts(access_token).then((playlist) => {
        setPlaylist(playlist);
      });
    });
  }, []);

  const currentItems = playlist.slice(0, currentPage * ITEMS_PER_PAGE);

  return (
    <div className="px-20 py-10">
      {console.log(playlist, "pl")}
      {/* weekly top songs */}
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

      {/* new release songs */}
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

      {/* trending songs */}
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

      {/* artists */}
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

      {/* music video */}
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

      {/* albums */}
      <div className="my-14">
        <TitleTwoColors
          text={"Top "}
          colorText={"Albums"}
          color={"text-cyan-400"}
        />

        <div className="mt-6 grid grid-cols-6 gap-x-10 items-center">
          {albums.map((item, index) => {
            return (
              <div className="my-5">
                <AlbumBox data={item} key={item.id} />
              </div>
            );
          })}
          <div className="flex justify-end">
            <ViewMoreButton />
          </div>
        </div>
      </div>

      {/* playLists */}
      <div className="my-14">
        <TitleTwoColors text={"New Release "} colorText={"Playlists"} />

        <div className="mt-6 grid grid-cols-6 gap-x-10 items-center">
          {playlist &&
            currentItems.map((album) => {
              return (
                <div className="my-5">
                  <PlaylistBox data={album} />
                </div>
              );
            })}

          {currentPage * ITEMS_PER_PAGE < playlist.length && (
            <div className="flex justify-end">
              <ViewMoreButton />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
