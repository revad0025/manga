import MangaList from "../MangaList"
import LabelButton from "../common/LabelButton"
import Pagination from "../common/Pagination"
function Content() {
  
  return (
    <div className='md:w-[70%] bg-neutral'>
      <div className='w-full flex flex-col gap-4 p-4'>
        <LabelButton/>
        <div className='grid grid-cols-3 xl:grid-cols-4 gap-3'>
          <MangaList/>
        </div>
        <Pagination totalPages={20}/>
      </div>
    </div>
  )
}

export default Content
