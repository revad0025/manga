import './../css/sidebar.css'
import React from 'react'
import SideTopList from '../SideTopList'
function SideBar() {
  return (
    <div className='lg:w-[30%] p-4 bg-neutral sidebar-con '>
      <SideTopList/>
    </div>
  )
}

export default SideBar
