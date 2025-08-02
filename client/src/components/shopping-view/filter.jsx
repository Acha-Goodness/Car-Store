import React, { Fragment } from 'react'
import { filterOptions } from '../config';

const ProductFilter = () => {
  return (
    <div className='bg-[grey] rounded-lg shadow-sm'>
        <div className='p-4 border-b'>
            <h2 className='text-lg font-semibold'>Filters</h2>
        </div>
        <div className='p-4 space-y-4'>
            {object.keys(filterOptions).map(keyItem => 
            <Fragment>
                <div>
                    <h3 className='text-base font-bold'>{keyItem}</h3>
                </div>
            </Fragment>
            )}
        </div>
    </div>
  )
}

export default ProductFilter;