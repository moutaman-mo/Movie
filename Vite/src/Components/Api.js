import axios from "axios";
export const domain = "api.themoviedb.org/3";
export const apiKey = "6bf13f3d41885a99248fd522aa285f01";

export async function getAllMovie() {
  return await axios.get(`https://${domain}/discover/movie?api_key=${apiKey}`);
}
// https://api.themoviedb.org/3/discover/movie?api_key=6bf13f3d41885a99248fd522aa285f01&&