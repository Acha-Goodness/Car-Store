import React from 'react';
import { FcMinus, FcPlus } from "react-icons/fc";
import { Button } from '../ui/button';
import { GoTrash } from "react-icons/go";
import { useDispatch, useSelector } from 'react-redux';
import { deleteCartItems, updateCart } from '@/store/shop/cart-slice';
import { toast } from 'sonner';

const UserCartItemsContent = ({ cartItem }) => {
  const { user } = useSelector((state) => state.auth)
  const dispatch = useDispatch();

  const handleUpdQty = (item, act) => {
    console.log("Click is working")
    dispatch(
      updateCart({
        userId:user?.user._id, 
        productId:item.productId, 
        quantity: act === "plus" ? item?.quantity + 1 : item?.quantity - 1
      })
    ).then((res) => {
        if(res?.payload?.success) toast(res?.payload?.message)
        else throw new Error(res.payload)
      }).catch((err) => {
        toast(err.message)
      })
  }

  const deleteCartItem = (item) => {
    dispatch(deleteCartItems({
      userId:user?.user._id, 
      productId:item.productId
    })).then((res) => {
        if(res?.payload?.success) toast(res?.payload?.message)
        else throw new Error(res.payload)
    }).catch((err) => {
      toast(err.message)
    })
  };

  return (
    <div className='flex items-center space-x-4'>
      <img src={cartItem?.image} alt={cartItem?.title} className='w-20 h-20 rounded object'/>
      <div className='flex-1'>
        <h3 className='font-extrabold'>{cartItem?.title}</h3>
        <div className='flex items-center gap-2 mt-1'>
            <Button 
            variant="outline" 
            className="h-8 w-8 rounded-full cursor-pointer" 
            size="icon" 
            onClick={() => handleUpdQty(cartItem, "minus")}
            disabled={cartItem?.quantity === 1}
          >
                <FcMinus className='w-4 h-4'/>
                <span className='sr-only'>Decrease</span>
            </Button>
            <span className='font-semibold'>{cartItem?.quantity}</span>
            <Button 
              variant="outline" 
              className="h-8 w-8 rounded-full" 
              size="icon" 
              onClick={() => handleUpdQty(cartItem, "plus")}>
                <FcPlus className='w-4 h-4'/>
                <span className='sr-only'>Increase</span>
            </Button>
        </div>
      </div>
      <div className='flex flex-col items-end'>
        <p className='font-semibold'>${((cartItem?.salePrice > 0 ? cartItem?.salePrice : cartItem?.price) * cartItem?.quantity).toFixed(2)}</p>
        <GoTrash className='cursor-pointer mt-1' size={20} onClick={() => deleteCartItem(cartItem)}/>
      </div>
    </div>
  )
}

export default UserCartItemsContent;