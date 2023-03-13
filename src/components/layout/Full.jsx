import MangaList from "../MangaList"
import Pagination from "../common/Pagination"
import useMangaContext from "../../hooks/useMangaContext"
import animeLoading from '../../assets/images/AnimeLoading.gif'
function Full() {
  const { totalPages, loading } = useMangaContext();
  if (loading) {
    return (
      <div className='h-screen grid justify-items-center items-center w-full'>
        {/* <progress className="progress w-56"></progress> */}
        <div className="flex flex-col items-center">
          <img src={animeLoading} alt="loading"/>
          <h3 className="text-white text-[24px]">Please wait!</h3>
        </div>
        
      </div>
    )
  }
  return (
    <div className="flex flex-col gap-3 justify-center w-full bg-neutral p-4">
    
      <div className="grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 ">
        <MangaList />
      </div>
      <Pagination totalPages={totalPages}/>
    </div>
    
  )
}

export default Full
