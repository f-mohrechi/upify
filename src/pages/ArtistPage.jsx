import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getArtistTopTracks,
  getOneArtist,
  getToken,
} from "../services/spotify";
import PrimaryColorText from "../components/typography/PrimaryColorText";
import MusicTrack from "../components/boxes/MusicTrack";

export default function ArtistPage() {
  const { id } = useParams(); // Extract id and type from URL

  const [artist, setArtist] = useState();
  const [topTracks, setTopTracks] = useState();

  useEffect(() => {
    getToken().then((access_token) => {
      getOneArtist(access_token, id).then((artist) => {
        setArtist(artist);
      });
      getArtistTopTracks(access_token, id).then((tracks) => {
        setTopTracks(tracks);
      });
    });
  }, []);

  console.log(id, "id");
  console.log(topTracks);

  return (
    <div className="">
      <div className="bg-rose-700 px-10 py-5">
        <div className="grid grid-cols-3 items-center">
          <div>
            <img
              src={artist?.images[0]?.url}
              alt=""
              className="w-56 h-56 rounded-full"
            />
          </div>
          <div className="col-span-2">
            <div>
              <h1 className="text-white text-4xl font-bold">{artist?.name}</h1>
              <p className="text-neutral-300 mt-5">
                {artist?.followers?.total} followers
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 px-10 py-5">
        <PrimaryColorText
          text={"Top Tracks"}
          ClassName={"text-2xl font-semibold"}
        />
        <div className="grid grid-cols-2 gap-y-5 gap-x-10 mt-3">
          {topTracks?.tracks?.map((item) => {
            return (
              <div className="">
                <MusicTrack data={item} key={item.id} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
