import React from 'react'
import useMangaContext from '../hooks/useMangaContext';
import MangaShow from './MangaShow';
function  MangaList() {
  const { loading, mangas } = useMangaContext();
  if (loading) {
    return (
      <div className='h-screen grid justify-items-center items-center w-3/4'>
        <progress className="progress w-56"></progress>
      </div>
    )
  }
  // console.log(mangas)
  
  const renderedManga = mangas.map((manga) => {
    return <MangaShow key={manga.mal_id} title={manga.title} imgUrl={manga.images.jpg.image_url}
     grade={manga.score} chapters={manga.chapters} mangaId={manga.mal_id} mangaType={manga.type}/>
  });
  return (
    <>
      {renderedManga}
    </>
  )
}

export default MangaList
