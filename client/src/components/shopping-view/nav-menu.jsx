import { Link } from 'react-router-dom';

const NavMenu = ({ textCol }) => {

  return (
     <div className='w-[98%] mx-auto mt-[2%]'>
        <nav>
            <ul className={`${textCol ? "text-white" : "text-black"} flex justify-evenly font-bold`}>
                <Link to="/shop/home">
                        <li>Home</li>
                </Link>
                <Link to="/shop/listing">
                    <li>Products</li>
                </Link>
                <Link to="/shop/services">
                    <li>Services</li>
                </Link>
                <Link to="/shop/about">
                    <li>About Us</li>
                </Link>
                <Link to="/shop/contact">
                    <li>Contact</li>
                </Link>
                <Link to="/shop/gallery">
                    <li>Gallery</li>
                </Link>
                <Link to="/shop/faq">
                    <li>Faq</li>
                </Link>
            </ul>
        </nav>
    </div>
  )
}

export default NavMenu;