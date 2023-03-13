import React from 'react'
import useMangaContext from '../hooks/useMangaContext';
import SideTopShow from './SideTopShow';
function SideTopList() {
  const { mangasTopTen, loadingTop } = useMangaContext();
  if (loadingTop) {
    return (
      <div className='h-screen grid justify-items-center items-center'>
        <progress className="progress w-56"></progress>
      </div>
    )
  }
  
  const renderedManga = mangasTopTen.map((manga) => {
    // const genres = manga.genres;
    // const renderedGenres = genres.map((genre) => {
    //   return <div key={genre.mal_id} genre={genre}></div>
    // });
    return <SideTopShow key={manga.mal_id} title={manga.title} imgUrl={manga.images.jpg.image_url} 
      rank={manga.rank} genres={JSON.stringify(manga.genres)} grade={manga.score} mangaId={manga.mal_id}/> 

  });
  return (
    <div className='flex flex-col md:sticky md:top-4 lg:top-1 gap-2 '>
      <h2 className='text-white pb-2 border-b-[1px] border-[#808080] card-title'>Top Manga</h2>
      <div>
        {renderedManga}
      </div>
    </div>
  )
}

export default SideTopList
