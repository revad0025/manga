import axios from "axios";

export async function getMangaDetailById(id) {
  const response = await axios.get(`https://api.jikan.moe/v4/manga/${id}`)
  return response ?? null;
}
export async function getMangaListByGenre(genId) {
  try {
    const url = `https://api.jikan.moe/v4/manga?genres=${genId}&limit=24`
    const response = await fetch(url)
    const data = await response.json()
    return data.data
  } catch (error) {
    console.log(error)
  }
}


// export async function getMangaDetailById(id) {
//   let anime_movies_details = await fetch(`https://api.jikan.moe/v4/manga/${id}`)
//     .then((response) => response.json())
//     .then((animelist) => animelist);
//   console.log(anime_movies_details)
//   return anime_movies_details ?? null;
// }
