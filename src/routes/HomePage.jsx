import React from 'react'
import Nav from '../components/layout/Nav';
import SideBar from '../components/layout/SideBar';
import Content from '../components/layout/Content';
import GenresList from '../components/GenresList';
// import CommentList from '../components/CommentList';
function HomePage() {
  return (
    <div className='h-full'>
      <Nav/>
      
      <div className='w-full bg-slate-800'>
        <GenresList/>
        <div className='max-w-7xl flex flex-col md:flex-row  gap-4 mx-auto px-6 md:justify-between pb-4'>
          <Content/>
          <SideBar/>
        </div>
        {/* <div className='max-w-7xl mx-auto px-6'>
          <CommentList/>
        </div> */}
      </div>
    </div>
  )
}

export default HomePage
