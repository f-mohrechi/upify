import axios from "axios";
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

export const getNewReleaseAlbums = async (access_token) => {
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

export const getArtists = async (access_token) => {
  const response = await api.get(
    "/v1/artists?ids=2CIMQHirSU0MQqyYHq0eOx%2C57dN52uHvrHOxijzpIgu3E%2C1vCWHaC5f2uS3yhpwWbIA6,06HL4z0CvFAxyc27GXpf02,4gzpq5DPGxSnKTe4SA8HAU,6eUKZXaKkcviH0Ku9w2n3V",
    {
      headers: { Authorization: "Bearer " + access_token },
    }
  );

  return response.data.artists;
};

export const getOneArtist = async (access_token, id) => {
  const response = await api.get(`/v1/artists/${id}`, {
    headers: { Authorization: "Bearer " + access_token },
  });

  return response.data;
};

export const getOnePlaylist = async (access_token, id) => {
  try {
    const response = await api.get(`/v1/playlists/${id}`, {
      headers: { Authorization: "Bearer " + access_token },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching playlist:", error);
    throw error;
  }
};

export const getOneAlbum = async (access_token, id) => {
  try {
    const response = await api.get(`/v1/albums/${id}`, {
      headers: { Authorization: "Bearer " + access_token },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching album:", error);
    throw error;
  }
};

export const getOneCategory = async (access_token, id) => {
  try {
    const response = await api.get(`/v1/browse/categories/${id}/playlists`, {
      headers: { Authorization: "Bearer " + access_token },
    });
    return response.data.playlists.items;
  } catch (error) {
    console.error("Error fetching album:", error);
    throw error;
  }
};

export const searchQuery = async (access_token, query) => {
  try {
    const response = await api.get(
      `/v1/search?type=album,track,playlist,artist&q=${query}`,
      {
        headers: { Authorization: "Bearer " + access_token },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const getArtistTopTracks = async (access_token, id) => {
  try {
    const response = await api.get(`/v1/artists/${id}/top-tracks`, {
      headers: { Authorization: "Bearer " + access_token },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching tracks:", error);
    throw error;
  }
};
