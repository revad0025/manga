import React from 'react'
import { Link } from 'react-router-dom';
import StarRating from './common/Rating';
function SideTopShow({title, imgUrl, rank, genres, grade, mangaId}) {
  const parsedGenres = JSON.parse(genres);
  return (
    
    <div className='flex flex-row gap-2 py-2 border-b-[1px] border-[#808080] sidebar-card'>
      <Link to={`/manga/${mangaId}/${title}`} className='self-center'>
        <div className=' p-2 rank-con flex items-center justify-center border-2 rounded-md text-white hover:bg-violet-600'>
          {rank}
        </div>
      </Link>
      
      <Link to={`/manga/${mangaId}/${title}`} className='self-center'>
          <div className='h-24 w-24  flex image-con'>
            <img src={imgUrl} alt={title} className='w-full h-full'/>
          </div>
      </Link>
      
      <div className='w-3/5 flex flex-col gap-1'>
        <Link to={`/manga/${mangaId}/${title}`}>
          <h3 className='text-xs text-white hover:text-violet-400 card-title' >{title}</h3>
        </Link>
        <div className='flex gap-2 genre-con'>
          <p className='text-xs text-[#808080]'>Genre: </p>
          <ul className='flex flex-wrap'>
            {parsedGenres.slice(0,2).map((gen)=>(
              
                <li key={gen.mal_id} className='text-xs text-white hover:text-violet-400'><Link to={`/manga/genre/${gen.name}`}>{gen.name}</Link></li>
              
            ))}
          </ul>
          
        </div>
        <StarRating grade={grade}/> 
        
      </div>
    </div>
    
  )
}

export default SideTopShow
