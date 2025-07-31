import React, { Fragment, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import CommonForm from '@/components/common/form';
import { addPoductFormElements } from '@/components/config';

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

  const onSubmit = () => {

  }

  return (
    <Fragment>
      <div className='mb-5 w-full flex justify-end'>
          <Button onClick={() => setOpenCreateProductDialog(true)}>
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
                  <SheetTitle>Add New Product</SheetTitle>
              </SheetHeader>
              <div className='py-6'>
                <CommonForm formData={formData} setFormData={setFormData} buttonText="Add" onSubmit={onSubmit} formControls={addPoductFormElements} color="#5F2780"/>
              </div>
          </SheetContent>
      </Sheet>
    </Fragment>
  )
}

export default AdminProducts;