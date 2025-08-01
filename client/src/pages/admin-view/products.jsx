import React, { Fragment, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import CommonForm from '@/components/common/form';
import { addPoductFormElements } from '@/components/config';
import ProductImageUpload from '@/components/admin-view/imageupload';
import { useDispatch, useSelector } from 'react-redux';
import { addNewProduct, fetchAllProducts } from '@/store/admin/product-slice';

const initialFormData = {
  image: null,
  title: "",
  description: "",
  category: "",
  brand: "",
  price: "",
  salePrice: "",
  totalStock: ""
}

const AdminProducts = () => {
  const [ openCreateProductDialog, setOpenCreateProductDialog ] = useState(false);
  const [ formData, setFormData ] = useState(initialFormData);
  const [ imageFile, setImageFile] = useState(null);
  const [ uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [ imageLoading, setImageLoading ] = useState(false);
  const { productList } = useSelector(state => state.adminProducts)
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(addNewProduct({
      ...formData,
      image: uploadedImageUrl
    })).then((res) => {
      console.log(res)
    }).catch((err) => {
      console.log(err)
    })
  }

  useEffect(() => {
    dispatch(fetchAllProducts())
  }, [dispatch]);

  return (
    <Fragment>
      <div className='mb-5 w-full flex justify-end'>
          <Button onClick={() => setOpenCreateProductDialog(true)} className="bg-[#5F2780] text-white">
             Add New Product
          </Button>
      </div>
      <div className='grid gap-4 md:grid-cols-3 lg:grid-cols-4'>

      </div>
      <Sheet open={openCreateProductDialog} onOpenChange={() => 
          setOpenCreateProductDialog(false)
        }>
          <SheetContent side="right" className="overflow-auto bg-[white]">
              <SheetHeader>
                  <SheetTitle className="text-[#5F2780]">Add New Product</SheetTitle>
              </SheetHeader>
              <ProductImageUpload 
                  imageFile={imageFile} 
                  setImageFile={setImageFile} 
                  uploadedImageUrl={uploadedImageUrl} 
                  setUploadedImageUrl={setUploadedImageUrl}
                  setImageLoading={setImageLoading}
                  imageLoading={imageLoading}
              />
              <div className='py-6'>
                <CommonForm formData={formData} setFormData={setFormData} buttonText="Add" onSubmit={onSubmit} formControls={addPoductFormElements} color="#5F2780"/>
              </div>
          </SheetContent>
      </Sheet>
    </Fragment>
  )
}

export default AdminProducts;