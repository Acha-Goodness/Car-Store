import ProductFilter from '@/components/shopping-view/filter';
import { useEffect, useState } from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from '@/components/ui/button';
import { LuArrowUpDown } from "react-icons/lu";
import { sortOptions } from '@/components/config';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllFilteredProducts, fetchProductsDetails } from '@/store/shop/products-slice';
import ShoppingPoductTile from '@/components/shopping-view/product-tile';
import { useSearchParams } from 'react-router-dom';
import ProductDetailsDialog from '@/components/shopping-view/product-details';
import { addToCart, fetchCartItems } from '@/store/shop/cart-slice';
import { toast } from 'sonner';
import { MoonLoader } from 'react-spinners';

const createSearchParamsHelper = (filterParams) => {
  const queryParams = [];
  for(const [key, value] of Object.entries(filterParams)){
    if(Array.isArray(value) && value.length > 0){
      const paramValue = value.join(",");
      queryParams.push(`${key}=${encodeURIComponent(paramValue)}`)
    }
  }
  return queryParams.join("&")
}

const ShoppingListing = () => {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)
  const { productList, productDetails, isLoading} = useSelector((state) => state.shopProducts);
  const { isLoading: loading } = useSelector((state) => state.shopCart)

  const [ filters, setFilters ] = useState({});
  const [ sort, setSort ] = useState();
  const [ searchParams, setSearchParams ] = useSearchParams();
  const [ openDetailsDialog, setOpenDetailsDialog ] = useState(false);

  const handleSort = (value) => {
    setSort(value)
  }

  const handleFilter = (getSectionId, getCurrentOption) => {
    let cpyFilters = {...filters};
    const indexOfCurrentSection = Object.keys(cpyFilters).indexOf(getSectionId);

    if(indexOfCurrentSection === -1){
      cpyFilters = {
        ...cpyFilters,
        [getSectionId] : [getCurrentOption]
      }
    }else{
      const indexOfCurrentOption = cpyFilters[getSectionId].indexOf(getCurrentOption);
      if(indexOfCurrentOption === -1) cpyFilters[getSectionId].push(getCurrentOption)
      else cpyFilters[getSectionId].splice(indexOfCurrentOption, 1)
    }
    setFilters(cpyFilters);
    sessionStorage.setItem("filters", JSON.stringify(cpyFilters))
  }

  const handleGetProductDetails = (id) => {
    dispatch(fetchProductsDetails(id))
  }

  const handleAddToCart = (productId) => {
    dispatch(addToCart({userId: user?.user._id, productId, quantity: 1}))
    .then((res) => {
      if(res?.payload?.success){
        toast(res.payload.message)
        dispatch(fetchCartItems(user?.user._id))
      }else throw new Error(res.paylaod)
    }).catch((err) => {
      console.log(err);
    })
  };

  useEffect(() => {
    setSort("price-lowtohigh");
    setFilters(JSON.parse(sessionStorage.getItem("filters")) || [])
  }, []);

  useEffect(() => {
    if(filters && Object.keys(filters).length > 0){
      const createQueryString = createSearchParamsHelper(filters)
      setSearchParams(new URLSearchParams(createQueryString))
    }
  }, [filters])

  useEffect(() => {
    if(filters !== null && sort !== null)
    dispatch(fetchAllFilteredProducts({filterParams : filters, sortParams : sort}));
  }, [dispatch, sort, filters]);

  useEffect(() => {
    if(productDetails !== null) setOpenDetailsDialog(true);
  },[productDetails])

  return (
    <div className='grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 p-4 md:p-6'>
      <ProductFilter filters={filters} handleFilter={handleFilter}/>
      <div className='bg-background w-full rounded-lg shadow-sm'>
        <div className='p-4 border-b flex gap-3 items-center justify-between'>
          <h2 className='text-lg font-extrabold'>All Products</h2>
          <div className='flex items-center gap-3'>
            <span className='text-muted-[green]'>{productList?.length}</span>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                    <LuArrowUpDown className='h-4 w-4'/>
                    <span>Sort by</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className='w-[200px]'>
                  <DropdownMenuRadioGroup value={sort} onValueChange={handleSort}>
                    {
                      sortOptions.map((sortItem) => (
                        <DropdownMenuRadioItem key={sortItem.id} value={sortItem.id}>
                            {sortItem.label}
                        </DropdownMenuRadioItem>
                      ))
                    }
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
          </div>
        </div>
        {isLoading ? 
        <div className='w-full h-[30vh] flex justify-center items-center'>
          <MoonLoader color="#620071ff" size={80} />
        </div> 
        :
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
            {
              productList && productList.length > 0 && 
              productList.map(productItem => <ShoppingPoductTile handleGetProductDetails={handleGetProductDetails} product={productItem} handleAddToCart={handleAddToCart} isLoading={isLoading}/>)
            }
        </div>
        }
      </div>
      <ProductDetailsDialog open={openDetailsDialog} setOpen={setOpenDetailsDialog} productDetils={productDetails}/>
    </div>
  )
}

export default ShoppingListing;