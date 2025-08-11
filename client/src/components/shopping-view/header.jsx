import React from 'react';
import heroVid from "../../assets/heroVid.webm";
import TopHeader from './top-header';
import NavMenu from './nav-menu';


const Header = () => {
  return (
    <div>
        <video 
            className="absolute w-full h-[80%] object-cover"
            autoPlay
            muted
            loop
            playsInline
        >
             <source src={heroVid} type="video/webm"></source>
        </video>
        <div className="relative z-10">
          <TopHeader/>
            <div className='w-[98%] mx-auto pt-[10%] text-center'>
                <h1 className='text-[80px] font-bold text-[white]'>Be Confident</h1>
                <p className='text-[30px] text-[white]'>Discover and book beauty & wellness professionals near you</p>
            </div>
            <div className='mt-[13%]'>
                 <NavMenu textCol="White"/>
            </div>
        </div>
    </div>
  )
}

export default Header;