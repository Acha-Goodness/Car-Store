import CommonForm from '@/components/common/form';
import { resetPasswordControls } from '@/components/config';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const initialState = {
    password : "",
    confirmPassword : ""
}

const ResetPass = () => {
  const [ formData, setFormData ] = useState(initialState);

  const onSubmit = (e) => {
    e.preventDefault(); 

  };

  return (
      <div className="mx-auto w-full max-w-md space-y-6">
            <div className="text-center">
                <h1 className="text-3xl font-bold tracking-tight text-white">Reset Password</h1>
                <div className="mt-2">
                    <p className="text-[white]">Enter new password</p>
                </div>
            </div>
            <CommonForm
                formControls={resetPasswordControls}
                buttonText={"Reset Password"}
                formData={formData}
                setFormData={setFormData}
                onSubmit={onSubmit}
            />
        </div>
  )
};

export default ResetPass;