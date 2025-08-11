import React from 'react';
import { Dialog, DialogContent } from '../ui/dialog';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';
import { Avatar, AvatarFallback } from '../ui/avatar';
import { MdOutlineStar } from "react-icons/md";
import { Input } from '../ui/input';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, fetchCartItems } from '@/store/shop/cart-slice';
import { toast } from 'sonner';
import { setProductDetails } from '@/store/shop/products-slice';

const ProductDetailsDialog = ({open, setOpen, productDetils}) => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch(); 

  const handleAddToCart = (productId) => {
    dispatch(addToCart({userId: user?.user._id, productId, quantity: 1}))
    .then((res) => {
      if(res?.payload?.success){
        toast(res.payload.message)
        dispatch(fetchCartItems(user?.user._id))
      }else throw new Error(res.paylaod)
    }).catch((err) => {
      console.log(err);
    });
  };

  const handleDialogClose = () => {
    setOpen(false);
    dispatch(setProductDetails());
  }
  
  return (
    <Dialog open={open} onOpenChange={handleDialogClose}>
        <DialogContent className="grid grid-cols-2 gap-8 bg-white sm:p-12 max-w-[90vw] sm:max-w-[80vw] lg:max-w-[70vw]">
            <div className='relative overflow-hidden rounded-lg'>
                <img
                    src={productDetils?.image}
                    alt={productDetils?.title}
                    width={600}
                    height={600}
                    className='aspect-square w-full object-cover'
                />
            </div>
            <div className=''>
                <div>
                    <h1 className='text-3xl font-extrabold'>{productDetils?.title}</h1>
                    <p className='text-muted-[grey] mb-5 mt-4'>{productDetils?.description}</p>
                </div>
                <div className='flex items-center justify-between'>
                    <p className={`text-3xl font-bold text-black ${productDetils?.salePrice > 0 && "line-through"}`}>{productDetils?.price}</p>
                    {productDetils?.salePrice > 0 && <p className='text-2xl font-bold text-muted-[grey]'>{productDetils?.salePrice}</p>}
                </div>
                <div className='flex items-center gap-2 mt-2'>
                    <div className='flex items-center gap-0.5'>
                        <MdOutlineStar className='w-5 h-5 fill-[black]'/>
                        <MdOutlineStar className='w-5 h-5 fill-[black]'/>
                        <MdOutlineStar className='w-5 h-5 fill-[black]'/>
                        <MdOutlineStar className='w-5 h-5 fill-[black]'/>
                        <MdOutlineStar className='w-5 h-5 fill-[black]'/>
                    </div>
                    <span className='text-muted-[grey]'>(4.5)</span>
                </div>
                <div className='my-5'>
                    <Button className="w-full bg-black text-white" onClick={() => handleAddToCart(productDetils?._id)}>Add to Cart</Button>
                </div>
                  <Separator/>
                  <div className='max-h-[300px] overflow-auto'>
                    <h2 className='text-xl font-bold mb-4'>Reviews</h2>
                    <div className='grid gap-6'> 
                        <div className='flex gap-4'>
                            <Avatar className="w-10 h-10 border">
                                <AvatarFallback>SM</AvatarFallback>
                            </Avatar>
                            <div className='grid gap-1'>
                                <div className='flex items-center gap-2'>
                                    <h3 className='font-bold'>Angela Smith</h3>
                                </div>
                                <div className='flex items-center gap-0.5'>
                                    <MdOutlineStar className='w-5 h-5 fill-[black]'/>
                                    <MdOutlineStar className='w-5 h-5 fill-[black]'/>
                                    <MdOutlineStar className='w-5 h-5 fill-[black]'/>
                                    <MdOutlineStar className='w-5 h-5 fill-[black]'/>
                                    <MdOutlineStar className='w-5 h-5 fill-[black]'/>
                                </div>
                                <p className='text-muted-[grey]'>This is an awesome product</p>
                            </div>
                        </div>
                        <div className='flex gap-4'>
                            <Avatar className="w-10 h-10 border">
                                <AvatarFallback>SM</AvatarFallback>
                            </Avatar>
                            <div className='grid gap-1'>
                                <div className='flex items-center gap-2'>
                                    <h3 className='font-bold'>Angela Smith</h3>
                                </div>
                                <div className='flex items-center gap-0.5'>
                                    <MdOutlineStar className='w-5 h-5 fill-[black]'/>
                                    <MdOutlineStar className='w-5 h-5 fill-[black]'/>
                                    <MdOutlineStar className='w-5 h-5 fill-[black]'/>
                                    <MdOutlineStar className='w-5 h-5 fill-[black]'/>
                                    <MdOutlineStar className='w-5 h-5 fill-[black]'/>
                                </div>
                                <p className='text-muted-[grey]'>This is an awesome product</p>
                            </div>
                        </div>
                        <div className='flex gap-4'>
                            <Avatar className="w-10 h-10 border">
                                <AvatarFallback>SM</AvatarFallback>
                            </Avatar>
                            <div className='grid gap-1'>
                                <div className='flex items-center gap-2'>
                                    <h3 className='font-bold'>Angela Smith</h3>
                                </div>
                                <div className='flex items-center gap-0.5'>
                                    <MdOutlineStar className='w-5 h-5 fill-[black]'/>
                                    <MdOutlineStar className='w-5 h-5 fill-[black]'/>
                                    <MdOutlineStar className='w-5 h-5 fill-[black]'/>
                                    <MdOutlineStar className='w-5 h-5 fill-[black]'/>
                                    <MdOutlineStar className='w-5 h-5 fill-[black]'/>
                                </div>
                                <p className='text-muted-[grey]'>This is an awesome product</p>
                            </div>
                        </div>
                    </div>
                    <div className='mt-6 flex gap-2'>
                        <Input placeholder="Write a review..."/>
                        <Button>Submit</Button>
                    </div>
                  </div>
            </div>
          
        </DialogContent>
    </Dialog>
  )
}

export default ProductDetailsDialog;