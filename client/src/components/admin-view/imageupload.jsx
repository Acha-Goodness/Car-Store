import React, { useEffect, useRef } from 'react'
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { RiUploadCloud2Fill } from "react-icons/ri";
import { FaFileImage } from "react-icons/fa6";
import { GiCrossMark } from "react-icons/gi";
import { Button } from '../ui/button';
import axios from 'axios';

const ProductImageUpload = ({ imageFile, setImageFile, uploadedImageUrl, setUploadedImageUrl, imageLoading, setImageLoading }) => {
  const inputRef = useRef(null);

  const handleImageFileChange = (e) => {
    const selectedFile = e.target.files?.[0];
    if(selectedFile) setImageFile(selectedFile);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  }

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files?.[0];
    if(droppedFile) setImageFile(droppedFile);
  }

  const handleRemoveImage = (e) => {
    e.preventDefault();
    setImageFile(null);
    if(inputRef.current) inputRef.current.value = "";
  }

  const uploadImageToCloudinary = async () => {
    setImageLoading(true);
    const data = new FormData();
    data.append("my_file", imageFile)
    const response = await axios.post("http://localhost:3000/api/v1/admin/products/upload-image", data)
    if(response.data.status){
       setUploadedImageUrl(response.data.result.url);
       setImageLoading(false)
    }
  }

  useEffect(() => {
    if(imageFile !== null) uploadImageToCloudinary()
  }, [imageFile]);

  return (
    <div className='w-full max-w-md mx-auto mt-4'>
        <Label className="text-lg font-semibold mb-2 block">Upload Image</Label>
        <div onDragOver={handleDragOver} onDrop={handleDrop} className='border-2 border-dashed rounded-lg p-4'>
            <Input 
                id="image-upload" 
                type="file" 
                className="hidden" 
                ref={inputRef} 
                onChange={handleImageFileChange}
            />
            {
                !imageFile ? 
                <Label htmlFor="image-upload" className="flex flex-col items-center justify-center h-32 cursor-pointer">
                    <RiUploadCloud2Fill className='w-10 h-10 text-muted-[green] mb-2'/>
                    <span>Drag & Drop or click to upload image</span>
                </Label>
                :
                <div className='flex items-center justify-between'>
                    <div className='flex items-center'>
                        <FaFileImage className='w-8 text-[purple] mr-2 h-8' />
                    </div>
                    <p className='text-sm font-medium'>{imageFile.name}</p>
                    <Button variant="ghost" size="icon" className="text-muted-[grey] hover:text-[red]" onClick={handleRemoveImage}>
                        <GiCrossMark className='w-4 h-4'/>
                        <span className='sr-only'>Remove File</span>
                    </Button>
                </div>
            }
        </div>
    </div>
  )
}

export default ProductImageUpload;