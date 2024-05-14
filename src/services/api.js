import axios from "axios";

export const accountAPi = axios.create({
  baseURL: "https://accounts.spotify.com",
});

export const api = axios.create({
  baseURL: "https://api.spotify.com",
});
