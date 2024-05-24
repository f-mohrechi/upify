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
          <div className="grid grid-cols-6 gap-10 mt-10">
            {searchResults?.albums?.items?.map((item) => {
              return (
                <div>
                  <AlbumBox data={item} key={item.id} />
                </div>
              );
            })}
            {searchResults?.playlists?.items?.map((item) => {
              return (
                <div>
                  <PlaylistBox data={item} key={item.id} />
                </div>
              );
            })}
          </div>

          <div className="mt-10">
            {searchResults?.tracks?.items?.map((item) => {
              return (
                <div className="py-3">
                  <MusicTrack data={item} key={item.id} />
                </div>
              );
            })}
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
