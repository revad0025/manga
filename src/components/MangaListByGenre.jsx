import { getMangaListByGenre } from '../FetchMangaDetail';
import { useLoaderData } from 'react-router-dom';
import MangaShowByGen from './MangaShowByGen';
export default function MangaListByGenre() {
  const mangaByGenre = useLoaderData();
  console.log(mangaByGenre, 'mangaByGenre'); // check if the data is being fetched and stored properly
  console.log(mangaByGenre.genre)
  const renderedManga = mangaByGenre.MangaListG.map((manga) => {
    return <MangaShowByGen key={manga.mal_id} title={manga.title} imgUrl={manga.images.jpg.image_url}
     grade={manga.score} chapters={manga.chapters} mangaId={manga.mal_id} mangaType={manga.type}/>
  });
  return (
    <>
      <h1 className='text-white text-[33px]'>{mangaByGenre.genre}</h1>
        <div className="flex flex-col gap-3 justify-center w-full bg-neutral p-4"> 
        
        <div className='grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 '>
          {renderedManga}
        </div>
      </div>
    </>
    
    
  );
}
const genreDict = {
  "Action" : 1,
  "Adventure" : 2,
  "Avant Garde" : 5,
  "Award Winning" : 46,
  "Boys Love" : 28,
  "Comedy" : 4,
  "Drama" : 8,
  "Fantasy" : 10,
  "Girls Love" : 26,
  "Gourmet" :47,
  "Horror" :14,
  "Mystery" :7,
  "Romance" :22,
  "Sci-Fi" :24,
  "Slice of Life" :36,
  "Sports" :30,
  "Supernatural" :37,
  "Suspense" : 45,
  "Ecchi" :9,
  "Erotica" : 49,
  "Hentai" : 12,
  "Adult Cast" :50,
  "Anthropomorphic" :51,
  "CGDCT" :52,
  "Childcare" :53,
  "Combat Sports" :54,
  "Crossdressing" : 44,
  "Delinquents" : 55,
  "Detective" : 39,
  "Educational" : 56,
  "Gag Humor" : 57,
  "Gore" : 58,
  "Harem" : 35,
  "High Stakes Game" : 59,
  "Historical" :13,
  "Idols (Female)" : 60,
  "Idols (Male)" : 61,
  "Isekai" : 62,
  "Iyashikei" : 63,
  "Love Polygon" : 64,
  "Magical Sex Shift" : 65,
  "Mahou Shoujo" : 66,
  "Martial Arts" : 17,
  "Mecha" : 18,
  "Medical" : 67,
  "Memoir" : 68,
  "Military" : 38,
  "Music" : 19,
  "Mythology" : 6,
  "Organized Crime" : 69,
  "Otaku Culture" : 70,
  "Parody" :20,
  "Performing Arts" :71,
  "Pets" : 72,
  "Psychological" : 40,
  "Racing" : 3,
  "Reincarnation" : 73,
  "Reverse Harem" :74,
  "Romantic Subtext" : 75,
  "Samurai" : 21,
  "School" : 23,
  "Showbiz" : 76,
  "Space" : 29,
  "Strategy Game" : 11,
  "Super Power" :31,
  "Survival" : 77,
  "Team Sports" : 78,
  "Time Travel" : 79,
  "Vampire" : 32,
  "Video Game" : 80,
  "Villainess" : 81,
  "Visual Arts" : 82,
  "Workplace" : 48,
  "Josei" : 42,
  "Kids" : 15,
  "Seinen" : 41,
  "Shoujo" : 25,
  "Shounen" : 27,
}

export async function loader({ params }) {
  const { genre } = params; // extract the "genre" parameter from the "params" object
  const genreId = genreDict[genre];
  console.log(params)
  
  const MangaByGen = await getMangaListByGenre(genreId);
  const Data = {
    genre,
    MangaListG: MangaByGen
  }
  console.log(MangaByGen, 'MangaByGen'); // check the response from the API
  return Data;
}

