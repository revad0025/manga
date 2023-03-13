import React from 'react'
import useMangaContext from '../hooks/useMangaContext'
import { Link } from 'react-router-dom';
import {BiChevronRight} from 'react-icons/bi'
function GenresList() {
  const {mangaGenres, genLoading} = useMangaContext();
  if (genLoading) {
    return (
      <div className='h-screen grid justify-items-center items-center w-3/4'>
        <progress className="progress w-56"></progress>
      </div>
    )
  }
  return (
    <>
      {mangaGenres.length ? (
        <div className='max-w-7xl mx-auto px-6 pt-4'>
          <div className='collapse'>
            <input type="checkbox" /> 
            <div className="collapse-title text-xl font-medium">
              <p className='text-white flex items-center'>
                Genres 
                <BiChevronRight/>

              </p>
              
            </div>
            <div className="collapse-content p-0"> 
              <ul className='grid grid-cols-5 gap-2 bg-neutral p-4'>
                {mangaGenres.map((genre) => 
                  <li key={genre.mal_id} className='text-white'>
                    <Link to={`/manga/genre/${genre.name}`} className='flex items-center '>
                      <span className='text-sm'>
                        {genre.name}
                      </span>
                      <span className='text-xs ml-1'>
                        ({genre.count}) 
                      </span>
                      <BiChevronRight/>
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
         
        </div>
      ):(
        <p className='text-[15px] text-[#c0c0c0]'>
          -
        </p>
      )}
    </>
  )
}

export default GenresList
