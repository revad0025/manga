import './css/StarRating.css';
import './css/MangaDetails.css';
import { useLoaderData, Link} from 'react-router-dom';
import { getMangaDetailById } from '../FetchMangaDetail';
import { BiBookmark } from 'react-icons/bi';
import SideBar from './layout/SideBar';
import StarRating from './common/Rating';

export default function MangaDetailShow() {
  const mangaDetails = useLoaderData();
  return (
    <>
      <div className='w-full md:w-[70%]  manga-detail-con'>
        <div className='p-4 flex flex-col md:flex-row gap-[15px] bg-neutral '>
          <div className='md:w-[180px] flex flex-col gap-2'>
            <div className='self-center w-[200px] md:w-full'>
              <img src={mangaDetails.images.jpg.image_url} alt={mangaDetails.title} className='rounded'/>
            </div>

            <button className='bg-violet-500 rounded p-2 flex w-[200px] md:w-full mx-auto
            justify-center gap-2 text-white text-sm hover:cursor-pointer'>
              <BiBookmark/>
              Bookmark
            </button>

            <p className='text-center text-xs text-[#C0C0C0]'>
              Followed by {mangaDetails.favorites} people
            </p>
            <div className='w-[200px] md:w-full mx-auto'>
              <StarRating grade={mangaDetails.score} customClass='justify-between'/>
            </div>
            <div className='flex md:flex-col flex-wrap gap-2 w-[400] md:w-full mx-auto'>
              <div className='flex gap-1 justify-between rounded bg-[#81818167] py-1 px-2 text-sm text-[#c0c0c0]'>
                <p >Status</p>
                <p >{mangaDetails.status}</p>
              </div>
              <div className='flex gap-1 justify-between rounded bg-[#81818167] py-1 px-2 text-sm text-[#c0c0c0]'>
                <p >Type</p>
                <p >{mangaDetails.type}</p>
              </div>
            </div>
            <div className='flex md:flex-col flex-wrap gap-2 w-[400] md:w-full mx-auto'>
              <div className='flex gap-1 justify-between rounded bg-[#81818167] py-1 px-2 text-sm text-[#c0c0c0]'>
                <p>Rank</p>
                <p >{mangaDetails.rank}</p>
              </div>
              <div className='flex gap-1 justify-between rounded bg-[#81818167] py-1 px-2 text-sm text-[#c0c0c0]'>
                <div className='mask mask-heart bg-orange-400 w-[20px] h-[20px]'></div>
                <p >{mangaDetails.members}</p>
              </div>
            </div>
            
          </div>
          <div className='w-full flex flex-col gap-2'>
            <h1 className='text-white text-[33px] font-semibold leading-[37px] text-center md:text-start'>
              {mangaDetails.title}
            </h1>
            <div>
              <h2 className='text-white text-[22px]'>
                Alternative Titles
              </h2>
              <div className='flex alt-titles'>
                <p className='text-[#c0c0c0] text-[16px]'>
                  {mangaDetails.title_english}
                </p>
                <p className='text-[#c0c0c0] text-[16px]'>
                  {mangaDetails.title_japanese}
                </p>
              </div>
             
            </div>
            <div className='flex flex-row gap-1 items-center'>
              <h3 className='text-white font-semibold text-[18px]'>
                Chapters:
              </h3>
              <p className='text-[#c0c0c0] text-[16px]'>
                {mangaDetails.chapters ?? '-'}
              </p>
            </div>
            <div>
              <h2 className='text-white text-[22px]'>
                Synopsis
              </h2>
              <p className='text-[#c0c0c0] text-[16px]'>
                {mangaDetails.synopsis}
              </p>
            </div>
            
            <div className='flex gap-2 justify-center'>
              <div className='w-1/2'>
                <h3 className='text-white font-semibold text-[18px]'>
                  Published
                </h3>
                <p className='text-[#c0c0c0] text-[15px] '>
                  {mangaDetails.published.string}
                </p>
              </div>
              <div className='w-1/2'>
                <h3 className='text-white font-semibold text-[18px]'>
                  Authors
                </h3>
                {mangaDetails.authors.length ? ( 
                <ul className='grid grid-cols-2 md:block lg:grid gap-x-1'>
                  {mangaDetails.authors.map((author)=>(
                    <li key={author.mal_id} className='text-[15px] text-[#c0c0c0] hover:text-violet-400'>
                      <Link to={author.image_url}>{author.name}</Link>
                    </li>
                  ) )}
                </ul>
                 ) : (
                  <p className='text-[15px] text-[#c0c0c0]'>-</p>
                 )}
              </div>
            </div>
            <div className='flex gap-2 justify-center'>
              <div className='w-1/2'>
                <h3 className='text-white font-semibold text-[18px]'>
                  Serialization
                </h3>
                {mangaDetails.serializations.length ? (
                <ul className='grid grid-cols-2 gap-x-1 md:block lg:grid '>
                {mangaDetails.serializations.map((serialization)=>(
                  <li key={serialization.mal_id} className='text-[15px] text-[#c0c0c0] hover:text-violet-400'>
                    {serialization.name}
                  </li>
                ?? '-'))}
                </ul> 
                ): (
                  <p className='text-[15px] text-[#c0c0c0]'>-</p>
                )}
              </div>
              <div className='w-1/2'>
                <h3 className='text-white font-semibold text-[18px]'>
                  Themes
                </h3>
                {mangaDetails.themes.length ? (
                <ul className='grid grid-cols-2 gap-x-1 md:block lg:grid '>
                  {mangaDetails.themes.map((theme)=>(
                    <li key={theme.mal_id} className='text-[15px] text-[#c0c0c0]'>
                      {theme.name }
                    </li>
                   )) } 
                </ul>
                ): (
                  <p className='text-[15px] text-[#c0c0c0]'>
                    -
                  </p>
                )}
                
              </div>
              
            </div>
            <div>
              <h3 className='text-white font-semibold text-[18px]'>
                Genres
              </h3>
              {mangaDetails.genres.length ? (
                <ul className='flex gap-1 flex-wrap'>
                  {mangaDetails.genres.map((genre)=>(
                    <li key={genre.mal_id} className='text-[13px] text-white bg-[#81818167] p-1 rounded hover:bg-violet-400'>
                      <Link to={`/manga/genre/${genre.name}`}>
                        {genre.name}
                      </Link>
                    </li>
                   )) } 
                </ul>
                ): (
                  <p className='text-[15px] text-[#c0c0c0]'>
                    -
                  </p>
                )}
            </div>
          </div>
        </div>
        

      </div>
      <SideBar/>
    </>
  )
}

export async function loader({ params }) {
  const MangaDetailsResponse = await getMangaDetailById(params.id);
  console.log(MangaDetailsResponse);
  return MangaDetailsResponse.data.data;
}
