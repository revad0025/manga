import { Link } from "react-router-dom";
import StarRating from "./common/Rating";
function MangaShowByGen({title, imgUrl, grade ,chapters, mangaId, mangaType}) {
  return (
    <div className='w-full flex flex-col'>
      <Link to={`/manga/${mangaId}/${title}`} className='relative'>
        <img src={imgUrl} alt={title} className=' w-full rounded-md h-[260px] object-cover'/>
        <p className="text-white text-xs absolute bg-violet-600 p-1 rounded bottom-1 left-1">{mangaType}</p>
      </Link>
      <div className="flex flex-col flex-wrap pt-1">
        <Link to={`/manga/${mangaId}/${title}`}>
          <p className='text-sm text-white hover:text-violet-400 card-title'>{title}</p>
          <p className="text-xs text-[#808080]">Chapter: <span className="text-white text-xs">{chapters ?? '-'}</span></p>
        </Link>
        <StarRating grade={grade}/> 
      </div>
      
    </div>
  )
}

export default MangaShowByGen
