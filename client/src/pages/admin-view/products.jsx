import React, { Fragment, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import CommonForm from '@/components/common/form';
import { addPoductFormElements } from '@/components/config';
import ProductImageUpload from '@/components/admin-view/imageupload';

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

  const onSubmit = () => {

  }

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
              <ProductImageUpload imageFile={imageFile} setImageFile={setImageFile} uploadedImageUrl={uploadedImageUrl} setUploadedImageUrl={setUploadedImageUrl}/>
              <div className='py-6'>
                <CommonForm formData={formData} setFormData={setFormData} buttonText="Add" onSubmit={onSubmit} formControls={addPoductFormElements} color="#5F2780"/>
              </div>
          </SheetContent>
      </Sheet>
    </Fragment>
  )
}

export default AdminProducts;