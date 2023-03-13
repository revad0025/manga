import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import User from '../../assets/images/user.png';
function Nav() {
  return (
    <>
      <div className="navbar  bg-black sticky ">
        <div className='navbar max-w-7xl mx-auto px-6'>
        <div className="flex-1">
          <Link to='/' className="btn btn-ghost normal-case text-xl hidden md:block p-0">
              <img src={Logo} alt="Logo" className='w-36' />
          </Link>
        </div>
        <div className="flex-none gap-2">
          
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={User}  alt='user'/>
              </div>
            </label>
            <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
              
              <li><Link to='/login' className='w-full'>Logout</Link></li>
            </ul>
          </div>
        </div>
      </div>
      </div>
      

    </>
  )
}

export default Nav
