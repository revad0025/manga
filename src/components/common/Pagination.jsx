import React from 'react';
import ReactPaginate from 'react-paginate';
import useMangaContext from '../../hooks/useMangaContext';
import '../css/Pagination.css'
function Pagination({totalPages}) {
  const { handlePageChange } = useMangaContext();
  return (
    <div className='flex justify-center pt-[10px] border-t-[1px] border-[#808080]'>
      
      <ReactPaginate
        previousLabel={'«'}
        nextLabel={'»'}
        breakLabel={'...'}
        pageCount={totalPages}
        onClick={handlePageChange}
        marginPagesDisplayed={2}
        containerClassName={'btn-group flex gap-2 text-success pagination'}
        pageClassName={' bg-violet-400 rounded'}
        previousClassName={' bg-violet-400 rounded'}
        nextClassName={'bg-violet-400 rounded '}
        activeClassName={'btn-active'}
      />
    </div>
    
  )
}

export default Pagination
