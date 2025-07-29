import React from 'react';
import heroVid from "../../assets/heroVid.webm";
import logoIcon from "../../assets/logoIcon.png";
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { MdPerson4, MdKeyboardArrowDown, MdQuestionMark, MdOutlineShoppingCart, MdCancelScheduleSend} from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { FaBoxOpen, FaHandsHelping } from "react-icons/fa";
import { GiSelfLove, GiReturnArrow } from "react-icons/gi";
import { SiGnuprivacyguard } from "react-icons/si";
import { BsBasket2 } from "react-icons/bs";
import { IoCard } from "react-icons/io5";
import { GoStopwatch } from "react-icons/go";

const Header = () => {
  return (
    <div>
        <video className="absolute top-0 left-0 w-full h-[80%] object-cover"
            autoPlay
            muted
            loop
            playsInline
        >
             <source src={heroVid} type="video/webm" ></source>
        </video>
        <div className="relative z-10">
            <div>
                <div className='bg-[#5F2780] w-[98%] mx-auto my-[0.5%] py-[0.5%] rounded-[5px]'>
                    <p className='text-white text-center'>Vcheveu Earn points from your bookings and get discounts! Discover more!</p>
                </div>
                <div className='bg-[#ffffff] flex justify-between items-center w-[98%] mx-auto rounded-[15px]'>
                    <div className='pl-[2%] cursor-pointer'>
                        <img src={logoIcon} className='w-[25%]' alt="logo"/>
                    </div>
                    <div className='w-[90%] flex justify-end items-center'>
                        <div className='w-[60%] bg-[white] mr-[2%] flex items-center'>
                            <Input type="text" placeholder='Search services or product' className="text-[#5F2780]"/>
                            <CiSearch className='ml-[1%] text-[30px] text-[#5F2780] cursor-pointer'/>
                        </div>
                        <div className='flex justify-between w-[30%]'>
                            <div>
                                <Button className="w-full bg-[#5F2780] text-white cursor-pointer"><MdPerson4 />Account <MdKeyboardArrowDown/></Button>
                                <nav className='absolute bg-[white] p-[10px] top-[22%] w-[10%] right-[14.5%] rounded-[5px]'>
                                    <Button className="w-full bg-[#5F2780] text-[white] cursor-pointer mb-[10px]"><SiGnuprivacyguard/>Sign In</Button>
                                    <ul className='text-[#5F2780]'>
                                        <li className='flex items-center px-[5px] py-[5px] mb-[3px]'><MdPerson4 className='mr-[15px] text-[25px]'/>My Account</li>
                                        <li className='flex items-center px-[5px] py-[5px] mb-[3px]'><FaBoxOpen className='mr-[15px] text-[25px]'/>Orders</li>
                                        <li className='flex items-center px-[5px] py-[5px] mb-[3px]'><GiSelfLove className='mr-[15px] text-[25px]'/>Whishlist</li>
                                    </ul>
                                </nav>
                            </div>
                            <div>
                                <Button className="w-full bg-transperent text-[#5F2780] cursor-pointer"><MdQuestionMark />Help<MdKeyboardArrowDown/></Button>
                                  <nav className='absolute bg-[white] p-[10px] top-[22%] w-[13%] right-[1%] rounded-[5px]'>
                                    <ul className='text-[#5F2780]'>
                                        <li className='flex items-center px-[5px] py-[5px] mb-[3px]'><FaHandsHelping className='mr-[15px] text-[25px]'/>Help Center</li>
                                        <li className='flex items-center px-[5px] py-[5px] mb-[3px]'><BsBasket2 className='mr-[15px] text-[25px]'/>Place and order</li>
                                        <li className='flex items-center px-[5px] py-[5px] mb-[3px]'><IoCard className='mr-[15px] text-[25px]'/>Payment options</li>
                                        <li className='flex items-center px-[5px] py-[5px] mb-[3px]'><GoStopwatch className='mr-[15px] text-[25px]'/>Track and order</li>
                                        <li className='flex items-center px-[5px] py-[5px] mb-[3px]'><MdCancelScheduleSend className='mr-[15px] text-[25px]'/>Cancel and orders</li>
                                        <li className='flex items-center px-[5px] py-[5px] mb-[3px]'><GiReturnArrow className='mr-[15px] text-[25px]'/>Returns & Refunds</li>
                                    </ul>
                                </nav>
                            </div>
                            <Button className="w-[30%] bg-transperent text-[#5F2780] cursor-pointer"><MdOutlineShoppingCart />Cart</Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-[98%] mx-auto pt-[10%] text-center'>
                <h1 className='text-[80px] font-bold text-[white]'>Be Confident</h1>
                <p className='text-[30px] text-[white]'>Discover and book beauty & wellness professionals near you</p>
            </div>
            <div className='w-[98%] mx-auto pt-[13%]'>
                <nav>
                    <ul className='text-[white] flex justify-evenly'>
                        <li>Hair Salon</li>
                        <li>Barbershop</li>
                        <li>Nail Salon</li>
                        <li>Skin Care</li>
                        <li>Brows & Lashes</li>
                        <li>Massage</li>
                        <li>Makeup</li>
                        <li>Wellness & Day Spa</li>
                        <li>Pedicure</li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
  )
}

export default Header;