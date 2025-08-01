import React, { Fragment, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import CommonForm from '@/components/common/form';
import { addPoductFormElements } from '@/components/config';
import ProductImageUpload from '@/components/admin-view/imageupload';
import { useDispatch, useSelector } from 'react-redux';
import { addNewProduct, deleteProducts, editProducts, fetchAllProducts } from '@/store/admin/product-slice';
import { toast } from 'sonner';
import AdminProductsTiles from '@/components/admin-view/productTiles';

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
  const [ productId, setProductId ] = useState(null);

  const { productList, isLoading } = useSelector(state => state.adminProducts)
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(productId !== null ? 
      editProducts({id: productId, formData}) : 
      addNewProduct({...formData, image: uploadedImageUrl})
    ).then((res) => {
      console.log(res)
      if(res?.payload?.success){
        dispatch(fetchAllProducts());
        setImageFile(null);
        setFormData(initialFormData);
        toast(res?.payload?.message);
        setOpenCreateProductDialog(false);
      }else{
        throw new Error(res.payload || "Product Upload Failed");
      }
    }).catch((err) => {
      toast(err.message);
    })
  }

  useEffect(() => {
    dispatch(fetchAllProducts())
  }, [dispatch]);

  const handleDelete = (id) => {
    console.log("ID: ", id)
    dispatch(deleteProducts(id))
    .then((res) => {
      if(res?.payload?.success){
        dispatch(fetchAllProducts());
        toast(res?.payload?.message);
      }else{
        throw new Error(res?.payload)
      }
    }).catch((err) => {
        toast(err.message);
    })
  };

  return (
    <Fragment>
      <div className='mb-5 w-full flex justify-end'>
          <Button onClick={() => setOpenCreateProductDialog(true)} className="bg-[#5F2780] text-white">
             Add New Product
          </Button>
      </div>
      <div className='grid gap-4 md:grid-cols-3 lg:grid-cols-4'>
          {
            productList && productList.length > 0 ?
            productList.map( productItem => <AdminProductsTiles 
                                                    product={productItem} 
                                                    setProductId={setProductId} 
                                                    setOpenCreateProductDialog={setOpenCreateProductDialog}
                                                    setFormData={setFormData}
                                                    handleDelete={handleDelete}
                                              />) : null
          }
      </div>
      <Sheet open={openCreateProductDialog} onOpenChange={() => {
          setOpenCreateProductDialog(false)
          setProductId(null)
          setFormData(initialFormData)
      }}>
          <SheetContent side="right" className="overflow-auto bg-[white]">
              <SheetHeader>
                  <SheetTitle className="text-[#5F2780]">{productId !== null ? "Edit Product" : "Add New Product"}</SheetTitle>
              </SheetHeader>
              <ProductImageUpload 
                  imageFile={imageFile} 
                  setImageFile={setImageFile} 
                  uploadedImageUrl={uploadedImageUrl} 
                  setUploadedImageUrl={setUploadedImageUrl}
                  setImageLoading={setImageLoading}
                  imageLoading={imageLoading}
                  isEditMode={productId !== null}
              />
              <div className='py-6'>
                <CommonForm formData={formData} setFormData={setFormData} buttonText={productId !== null ? "Edit" : "Add"} onSubmit={onSubmit} formControls={addPoductFormElements} color="#5F2780" isLoading={isLoading}/>
              </div>
          </SheetContent>
      </Sheet>
    </Fragment>
  )
}

export default AdminProducts;