import React, { Fragment } from 'react';
import { RiAdminFill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { FaCubesStacked } from "react-icons/fa6";

    const adminSidebarMenuItems = [
        {
            id: "dashboard",
            label: "Dashboard",
            path: "/admin/dashboard",
            icon: <TbLayoutDashboardFilled />
        },
        {
            id: "products",
            label: "Products",
            path: "/admin/products",
            icon: <MdOutlineProductionQuantityLimits />
        },
        {
            id: "orders",
            label: "Orders",
            path: "/admin/orders",
            icon: <FaCubesStacked />
        }
    ]

const MenuItems = () => {
  const navigate = useNavigate();
  return (
    <nav className='mt-8 flex-col flex gap-2'>
        {
          adminSidebarMenuItems.map(menuItem => 
          <div key={menuItem.id} onClick={() => navigate(menuItem.path)} className='flex items-center gap-2 rounded-md px-3 py-2'>
              {menuItem.icon}
              <span>{menuItem.label}</span>
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
        <MenuItems/>
      </aside>
    </Fragment>
  )
}

export default AdminSideBar;