import React from 'react'
import Nav from '../components/layout/Nav'
import { Outlet } from 'react-router-dom'
function MangaPage() {
  return (
    <div>
      <Nav/>
      <div className='w-full bg-slate-800'>
        <div className='max-w-7xl flex flex-col md:flex-row justify-between gap-4 mx-auto px-6 py-4'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default MangaPage
