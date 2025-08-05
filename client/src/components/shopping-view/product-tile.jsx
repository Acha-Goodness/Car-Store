import React from 'react';
import { Card, CardContent, CardFooter } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { brandOptionMap, categoryOptionMap } from '../config';

const ShoppingPoductTile = ({ product }) => {
  return (
    <Card>
        <div>
            <div className='relative'>
                <img src={product.image} alt={product.title} className='w-full h-[300px] object-cover rounded-t-lg'/>
                {product?.salePrice > 0 ? 
                <Badge className="absolute top-2 left-2 text-white bg-[#D4AF37] hover:bg-red-600">Sale</Badge> 
                : 
                null}
            </div>
            <CardContent className="p-4">
                <h2 className='text-xl font-bold mb-2'>{product?.tile}</h2>
                <div className='flex justify-between items-center mb-2'>
                    <span className='text-sm text-muted-[grey]'>{categoryOptionMap[product?.category]}</span>
                    <span className='text-sm text-muted-[grey]'>{brandOptionMap[product?.brand]}</span>
                </div>
                <div className='flex justify-between items-center mb-2'>
                    <span className={`${product?.salePrice > 0 && "line-through"} text-lg font-semibold text-[#5F2780]`}>{product?.price}</span>
                    {
                        product?.salePrice > 0 &&  <span className='text-lg font-semibold text-[#5F2780]'>{product?.salePrice}</span>
                    }
                </div>
            </CardContent>
            <CardFooter>
                <Button className="w-full bg-[#5F2780] text-white">Add to cart</Button>
            </CardFooter>
        </div>
    </Card>
  )
}

export default ShoppingPoductTile;