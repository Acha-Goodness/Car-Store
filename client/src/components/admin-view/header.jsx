import React from 'react'
import { Button } from '../ui/button';
import { FaPowerOff } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch } from 'react-redux';
import { logout } from '@/store/auth-slice';
import { toast } from 'sonner';

const AdminHeader = ({setOpen}) => {

  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault()
    dispatch(logout())
    .then((res) => {
      toast(res.payload.message);
    })
  };

  return (
    <header className='flex items-center justify-between px-4 py-3 bg-background border-b'>
      <Button onClick={() => setOpen(true)} className="lg:hidden sm:block">
        <GiHamburgerMenu />
        <span className='sr-only'>Toggle Menu</span>
      </Button>
      <div className='flex flex-1 justify-end'>
        <Button onClick={handleLogout} className="inline-flex gap-2 items-center rounded-md px-4 py-2 text-sm font-medium text-[red]">
          <FaPowerOff/>
          Logout
        </Button>
      </div>
    </header>
  )
}

export default AdminHeader;