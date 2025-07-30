import React from 'react'
import { Button } from '../ui/button';
import { FaPowerOff } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const AdminHeader = () => {
  return (
    <header className='flex items-center justify-between px-4 py-3 bg-background border-b'>
      <Button className="lg:hidden sm:block">
        <GiHamburgerMenu />
        <span className='sr-only'>Toggle Menu</span>
      </Button>
      <div className='flex flex-1 justify-end'>
        <Button className="inline-flex gap-2 items-center rounded-md px-4 py-2 text-sm font-medium">
          <FaPowerOff />
          Logout
        </Button>
      </div>
    </header>
  )
}

export default AdminHeader;