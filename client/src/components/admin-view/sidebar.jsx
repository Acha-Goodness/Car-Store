import React, { Fragment } from 'react';
import { RiAdminFill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import { adminSidebarMenuItems } from '../config';

const MenuItems = () => {
  return (
    <nav className='mt-8 flex-col flex gap-2'>
        {
          adminSidebarMenuItems.map(menuItem => 
          <div className='flex items-center gap-2 rounded-md px-3 py-2'>

          </div>
          )
        }
    </nav>
  )
}


const AdminSideBar = () => {

  const navigate = useNavigate();
  return (
    <Fragment>
      <aside className='hidden w-64 flex-col border-r bg-[purple] p-6 lg:flex'>
        <div onClick={() => navigate("/admin/dashboard")} className='flex cursor-pointer items-center gap-2'>
          <RiAdminFill size={30}/>
          <h1 className='text-xl font-extrabold'>Admin Panel</h1>
        </div>
      </aside>
    </Fragment>
  )
}

export default AdminSideBar;