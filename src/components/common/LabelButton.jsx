import React from 'react'
import { Link } from 'react-router-dom'
function LabelButton() {
  return (
  <div className='pb-2 border-[#808080] border-b-[1px] flex flex-row justify-between items-center'>
    <h2 className='text-white  card-title'>Manga List</h2>
    <Link to='manga/full' className='text-white bg-violet-400 p-1 rounded text-xs hover:bg-violet-600 card-title'>
      View All
    </Link>
  </div>
  )
}

export default LabelButton
