import React from "react";

export default function HeaderInfo({ data }) {
  return (
    <div
      className={`w-full p-10 rounded-md`}
      style={{
        backgroundColor: data.primary_color ? data.primary_color : "#737373",
      }}
    >
      <div className="grid grid-cols-7 gap-28 items-center">
        <div className="col-span-2">
          <img src={data?.images[0]?.url} alt="" />
        </div>

        <div className="col-span-5">
          {data.type === "playlist" && data.public && (
            <p className="text-neutral-700 font-medium">public playlist</p>
          )}

          {data.type === "album" && (
            <p className="text-neutral-700 font-medium">{data.album_type}</p>
          )}
          <div>
            <p className="text-neutral-900 font-extrabold text-8xl">
              {data.name}
            </p>

            <p className="text-neutral-700 mt-9">{data.description}</p>
            <div className="flex items-center gap-x-2">
              {data.type === "album" && (
                <div className="flex items-center justify-between w-full gap-x-2">
                  <div className="flex items-center gap-x-2">
                    {data.artists.map((item) => {
                      return (
                        <p
                          key={item.id}
                          className="text-neutral-800 font-semibold"
                        >
                          {item.name}
                        </p>
                      );
                    })}

                    <div>
                      <p className="font-medium text-neutral-800">
                        ,{data.tracks.items.length}{" "}
                        {data.tracks.items.length > 1 ? "tracks" : "track"}
                      </p>
                    </div>
                  </div>

                  <div>
                    <p className="text-neutral-700 font-medium text-sm">
                      {data.release_date}
                    </p>
                  </div>
                </div>
              )}

              {data.owner && (
                <p className="mt-7 text-neutral-700 font-medium">
                  Made by {data.owner.display_name},{" "}
                </p>
              )}

              {data.followers && (
                <p className="mt-7 text-neutral-700 font-medium">
                  {data.followers.total} followers
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
