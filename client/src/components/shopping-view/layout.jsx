import { Outlet } from 'react-router-dom';
import TopHeader from './top-header';
import { useLocation } from "react-router-dom";
import NavMenu from './nav-menu';

const ShoppingLayout = () => {
  const location = useLocation();

  return (
    <div className='flex flex-col bg-white overflow-hidden'>
        {
          !location.pathname.includes("/shop/home") && <div><TopHeader/><NavMenu/></div>
        }
        <main className="flex flex-col w-full">
            <Outlet/>
        </main>
    </div>
  )
}

export default ShoppingLayout;