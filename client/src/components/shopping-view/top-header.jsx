import { useState, useEffect} from 'react';;
import logoo from "../../assets/logoo.png";
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { MdPerson4, MdKeyboardArrowDown, MdQuestionMark, MdOutlineShoppingCart, MdCancelScheduleSend } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { FaBoxOpen, FaHandsHelping } from "react-icons/fa";
import { GiSelfLove, GiReturnArrow } from "react-icons/gi";
import { SiGnuprivacyguard } from "react-icons/si";
import { BsBasket2 } from "react-icons/bs";
import { IoCard } from "react-icons/io5";
import { GoStopwatch } from "react-icons/go";
import { Avatar, AvatarFallback } from '../ui/avatar';
import { Sheet } from '../ui/sheet';
import UserCartWrapper from './cart-wrapper';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCartItems } from '@/store/shop/cart-slice';
import NavMenu from './nav-menu';


const TopHeader = () => {
  const [ accSub, setAccSub ] = useState(false);
  const [ helpSub, setHelpSub ] = useState(false);
  const { cartItems } = useSelector((state) => state.shopCart);
  const [ openCartSheet, setOpenCartSheet ] = useState(false);

    const { user } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const toggleAccMenu = () => {
      setAccSub(!accSub);
      setHelpSub(false);
    };
  
    const toggleHelpMenu = () => {
      setHelpSub(!helpSub);
      setAccSub(false);
    };

  useEffect(() => {
    dispatch(fetchCartItems(user?.user._id))
  }, [dispatch])

  return (
      <div>
        <div className='bg-[#5F2780] w-[98%] mx-auto my-[0.5%] py-[0.5%] rounded-[5px]'>
            <p className='text-white text-center'>Vcheveu Earn points from your bookings and get discounts! Discover more!</p>
        </div>
        <div className='bg-[#ffffff] flex justify-between items-center w-[98%] mx-auto rounded-[15px]'>
            <div className='pl-[2%] cursor-pointer'>
                <img src={logoo} className='w-[25%]' alt="logo"/>
            </div>
            <div className='w-[90%] flex justify-end items-center'>
                <div className='w-[60%] bg-[white] mr-[2%] flex items-center'>
                    <Input type="text" placeholder='Search services or product' className="text-[#5F2780]"/>
                    <CiSearch className='ml-[1%] text-[30px] text-[#5F2780] cursor-pointer'/>
                </div>
                <div className='flex justify-around w-[30%]'>
                    <div>
                        <Button className="w-full bg-[#5F2780] text-white cursor-pointer" onClick={toggleAccMenu}><MdPerson4 />Account <MdKeyboardArrowDown/></Button>
                        <nav className={`absolute bg-[white] p-[10px] w-[10%] right-[14.5%] rounded-[5px] ease-in-out ${accSub ? "top-[22%] opacity-100 duration-300" : "top-[-50%] opacity-0 duration-100"}`}>
                            <Button className="w-full bg-[#5F2780] text-[white] cursor-pointer mb-[10px]"><SiGnuprivacyguard/>Sign In</Button>
                            <ul className='text-[#5F2780]'>
                                <Link to="/shop/account">
                                    <li className='flex items-center px-[5px] py-[5px] mb-[3px] cursor-pointer'><MdPerson4 className='mr-[15px] text-[25px]'/>My Account</li>
                                </Link>
                                <Link to="/shop/orders">
                                    <li className='flex items-center px-[5px] py-[5px] mb-[3px] cursor-pointer'><FaBoxOpen className='mr-[15px] text-[25px]'/>Orders</li>
                                </Link>
                                <Link to="/shop/wishlist">
                                    <li className='flex items-center px-[5px] py-[5px] mb-[3px] cursor-pointer'><GiSelfLove className='mr-[15px] text-[25px]'/>Whishlist</li>
                                </Link>
                            </ul>
                        </nav>
                    </div>
                    <div>
                        <Button className="w-full bg-transperent text-[#5F2780] cursor-pointer" onClick={toggleHelpMenu}><MdQuestionMark />Help<MdKeyboardArrowDown/></Button>
                            <nav className={`absolute bg-[white] p-[10px] w-[13%] right-[1%] rounded-[5px] ease-in-out ${helpSub ? "top-[22%] opacity-100 duration-300" : "top-[-50%] opacity-0 duration-100"}`}>
                            <ul className='text-[#5F2780]'>
                                <Link to="/shop/help-center">
                                    <li className='flex items-center px-[5px] py-[5px] mb-[3px] cursor-pointer'><FaHandsHelping className='mr-[15px] text-[25px]'/>Help Center</li>
                                </Link>
                                <Link to="/shop/pay-options">
                                    <li className='flex items-center px-[5px] py-[5px] mb-[3px] cursor-pointer'><IoCard className='mr-[15px] text-[25px]'/>Payment options</li>
                                </Link>
                                <Link to="/shop/track">
                                    <li className='flex items-center px-[5px] py-[5px] mb-[3px] cursor-pointer'><GoStopwatch className='mr-[15px] text-[25px]'/>Track an order</li>
                                </Link>
                                <Link to="/shop/cancel-order">
                                    <li className='flex items-center px-[5px] py-[5px] mb-[3px] cursor-pointer'><MdCancelScheduleSend className='mr-[15px] text-[25px]'/>Cancel an orders</li>
                                </Link>
                                <Link to="/shop/return-refunds">
                                    <li className='flex items-center px-[5px] py-[5px] mb-[3px] cursor-pointer'><GiReturnArrow className='mr-[15px] text-[25px]'/>Returns & Refunds</li>
                                </Link>
                            </ul>
                        </nav>
                    </div>
                    <div className='flex items-center gap-2'>
                        <Sheet open={openCartSheet} onOpenChange={() => setOpenCartSheet(false)}>
                            <Button variant="outline" size="icon" onClick={() => setOpenCartSheet(true)}>
                                <MdOutlineShoppingCart className='cursor-pointer' />
                            </Button>
                            {cartItems && <UserCartWrapper cartItems={cartItems ? cartItems.items : []}/>}
                        </Sheet>
                        <Avatar className="bg-black">
                            <AvatarFallback className="bg-black text-white font-extrabold cursor-pointer">
                                {user?.user?.name[0].toUpperCase()}
                            </AvatarFallback>
                        </Avatar>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TopHeader;