import React from 'react';
import heroVid from "../../assets/heroVid.webm";
import logoIcon from "../../assets/logoIcon.png";

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
                <div className='bg-[#5F2780] flex justify-between w-[98%] mx-auto my-[0.5%]'>
                    <h1>Adverts</h1>
                </div>
                <div className='bg-[#ffffff] flex justify-between items-center w-[98%] mx-auto rounded-[15px]'>
                    <div className='pl-[2%]'>
                        <img src={logoIcon} className='w-[25%]' alt="logo"/>
                    </div>
                    <div className='w-[90%] flex justify-end items-center bg-[red]'>
                        <div className='w-[60%] bg-[green]'>
                            <p>Search</p>
                        </div>
                        <div className='flex justify-evenly w-[30%] bg-[pink]'>
                            <p>Account</p>
                            <p>Help</p>
                            <p>Cart</p>
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