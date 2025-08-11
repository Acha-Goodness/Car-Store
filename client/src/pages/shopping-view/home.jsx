import Header from '@/components/shopping-view/header';
import ShoppingPoductTile from '@/components/shopping-view/product-tile';
import { Card, CardContent } from '@/components/ui/card';
import { fetchAllFilteredProducts } from '@/store/shop/products-slice';
import { useEffect } from 'react';
import { FaShoePrints, FaTeamspeak, FaRedditAlien, FaChessQueen, FaChessKing, FaHatCowboy,FaYelp } from "react-icons/fa";
import { SiNike, SiPuma, SiZara } from "react-icons/si";
import { CgAdidas } from "react-icons/cg";
import { useDispatch, useSelector } from 'react-redux';

   const categories = [
    {id: "men", label: "Men", icon: FaChessKing},
    {id: "women", label: "Women", icon: FaChessQueen},
    {id: "kids", label: "Kids", icon: FaRedditAlien},
    {id: "accessories", label: "Accessories", icon: FaTeamspeak},
    {id: "footwear", label: "Footwear", icon: FaShoePrints}
  ];


  const brand = [
    {id: "nike", label: "Nike", icon: SiNike},
    {id: "addidas", label: "Addidas", icon: CgAdidas},
    {id: "puma", label: "Puma", icon: SiPuma},
    {id: "levi", label: "Levi's", icon: FaYelp},
    {id: "zara", label: "Zara", icon: SiZara},
    {id: "h&m", label: "H&M", icon: FaHatCowboy}
    ];

const ShoppingHome = () => {
  const dispatch = useDispatch();
  const { productList } = useSelector(state => state.shopProducts)

  useEffect(() => {
    dispatch(fetchAllFilteredProducts({ filterParams: {}, sortParams: "price-lowtohigh" }))
  }, [dispatch]);

  return (
    <div className='text-black'>
      <Header/>
      <section className='mt-[5%] py-12 bg-gray-50'>
           <div className='container mx-auto px-4'>
              <h2 className='text-3xl font-bold text-center mb-8'>Shop by category</h2>
              <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
                {
                  categories.map(item => 
                  <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                    <CardContent className="flex flex-col items-center justify-center p-6">
                      <item.icon className="w-12 h-12 mb-4 text-primary"/>
                      <span className='font-bold'>{item.label}</span>
                    </CardContent>
                  </Card>
                  )
                }
              </div>
           </div>
      </section>
      <section className='mt-[5%] py-12 bg-gray-50'>
           <div className='container mx-auto px-4'>
              <h2 className='text-3xl font-bold text-center mb-8'>Shop by brand</h2>
              <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6  gap-4'>
                {
                  brand.map(item => 
                  <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                    <CardContent className="flex flex-col items-center justify-center p-6">
                      <item.icon className="w-12 h-12 mb-4 text-primary"/>
                      <span className='font-bold'>{item.label}</span>
                    </CardContent>
                  </Card>
                  )
                }
              </div>
           </div>
      </section>
      <section className='py-12'>
         <div className='container mx-auto px-4'>
              <h2 className='text-3xl font-bold text-center mb-8'>Feature Products</h2>
              <div className='grid grig-col-1 sm:grid-cols-2 md:grid-cols-3 lg-grid-cols-4 gap-6'>
                  {
                    productList && productList.length > 0 ?
                    productList.map(productItem => <ShoppingPoductTile product={productItem}/>) : null
                  }
              </div>
         </div>
      </section>
    </div>
  )
}

export default ShoppingHome;