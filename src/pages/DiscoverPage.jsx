import React, { useEffect, useState } from "react";
import TitleTwoColors from "../components/typography/TitleTwoColors";
import { getCategories, getToken, searchQuery } from "../services/spotify";
import CategoryBox from "../components/boxes/CategoryBox";
import GoBackButton from "../components/buttons/GoBackButton";
import { useNavigate } from "react-router-dom";
import SearchInput from "../components/textField/SearchInput";
import AlbumBox from "../components/boxes/AlbumBox";
import PlaylistBox from "../components/boxes/PlaylistBox";
import MusicTrack from "../components/boxes/MusicTrack";
import Loading from "../components/loading/Loading";
import PrimaryColorText from "../components/typography/PrimaryColorText";
import ArtistBox from "../components/boxes/ArtistBox";

export default function DiscoverPage() {
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);
  const [searchResults, setSearchResults] = useState();
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getToken().then((access_token) => {
      getCategories(access_token).then((cats) => {
        setCategories(cats);
        setLoading(false);
      });
    });
  }, []);

  const handleSearch = async () => {
    try {
      setLoading(true);
      const accessToken = await getToken();
      const results = await searchQuery(accessToken, query);
      setSearchResults(results);
      console.log(results, "fwe.fmwlkl");
      setLoading(false);
    } catch (error) {
      console.error("Error searching:", error);
    }
  };

  const goBack = () => {
    navigate(-1);
  };

  const limit = 6;

  const trackItems = searchResults?.tracks?.items?.slice(0, limit);
  const albumItems = searchResults?.albums?.items?.slice(0, limit);
  const playlistItems = searchResults?.playlists?.items?.slice(0, limit);
  const artistsItems = searchResults?.artists?.items?.slice(0, limit);

  return (
    <div className="px-20">
      <div className="flex justify-end w-full">
        <GoBackButton onClick={goBack} />
      </div>

      <div className="mt-5 flex justify-center">
        <SearchInput
          query={query}
          setQuery={setQuery}
          handleSearch={handleSearch}
        />
      </div>

      {searchResults ? (
        <>
          <div className="mt-10">
            <PrimaryColorText
              text={"Songs"}
              ClassName={"text-2xl font-semibold"}
            />
            <div className="grid grid-cols-2 gap-5 mt-3">
              {trackItems?.map((item) => {
                return (
                  <div className="">
                    <MusicTrack data={item} key={item.id} />
                  </div>
                );
              })}
            </div>
          </div>

          <div className="my-10">
            <PrimaryColorText
              text={"Albums"}
              ClassName={"text-2xl font-semibold"}
            />
            <div className="grid grid-cols-6 gap-10 mt-5">
              {albumItems.map((item) => {
                return (
                  <div>
                    <AlbumBox data={item} key={item.id} />
                  </div>
                );
              })}
            </div>
          </div>

          <div className="my-10">
            <PrimaryColorText
              text={"Playlists"}
              ClassName={"text-2xl font-semibold"}
            />
            <div className="grid grid-cols-6 gap-10 mt-5">
              {playlistItems.map((item) => {
                return (
                  <div>
                    <PlaylistBox data={item} key={item.id} />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="my-10">
            <PrimaryColorText
              text={"Artists"}
              ClassName={"text-2xl font-semibold"}
            />
            <div className="grid grid-cols-6 gap-10 mt-5">
              {artistsItems.map((item) => {
                return (
                  <div>
                    <ArtistBox data={item} key={item.id} />
                  </div>
                );
              })}
            </div>
          </div>
        </>
      ) : (
        <>
          {/* categories */}
          <div className="my-14">
            <TitleTwoColors text={"All "} colorText={"Categories"} />

            <div className="mt-6 grid grid-cols-6 gap-x-10 items-center">
              {categories.map((item) => {
                return (
                  <div className="my-5">
                    <CategoryBox
                      data={item}
                      key={item.id}
                      dataType={"Category"}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}

      {loading && (
        <div className="flex justify-center items-center w-full h-screen">
          <Loading />
        </div>
      )}
    </div>
  );
}
