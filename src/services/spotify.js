import { accountAPi, api } from "./api";

const client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const client_secret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;

export const getToken = async () => {
  const response = await accountAPi.post(
    "/api/token",
    new URLSearchParams({
      grant_type: "client_credentials",
    }),
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + btoa(client_id + ":" + client_secret),
      },
    }
  );

  return response.data.access_token;
};

export const getTrackInfo = async (access_token) => {
  const response = await api.get("/v1/tracks/4cOdK2wGLETKBW3PvgPWqT", {
    headers: { Authorization: "Bearer " + access_token },
  });

  return response.data;
};

export const getNewReleasePodcasts = async (access_token) => {
  const response = await api.get("/v1/browse/new-releases", {
    headers: { Authorization: "Bearer " + access_token },
  });

  return response.data.albums.items;
};

export const getRecomTracks = async (access_token) => {
  const response = await api.get(
    "/v1/recommendations?limit=6&seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=classical%2Ccountry&seed_tracks=0c6xIDDpzE81m2q797ordA",
    {
      headers: { Authorization: "Bearer " + access_token },
    }
  );

  return response.data.tracks;
};

export const getCategories = async (access_token) => {
  const response = await api.get("/v1/browse/categories", {
    headers: { Authorization: "Bearer " + access_token },
  });

  return response.data.categories.items;
};

export const getFeaturedPlaylists = async (access_token) => {
  const response = await api.get("/v1/browse/featured-playlists ", {
    headers: { Authorization: "Bearer " + access_token },
  });

  return response.data.playlists.items;
};
