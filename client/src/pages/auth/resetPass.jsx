import { useState } from 'react'
import { resetPasswordControls } from '@/components/config';
import { Link } from 'react-router-dom';
import CommonForm from '@/components/common/form';

const initialState = {
    email : ""
}

const ResetPass = () => {
  const  [ formData, setFormData ] = useState(initialState);

  const onSubmit = (e) => {
    e.preventDefault()

  }

  return (
        <div className="mx-auto w-full max-w-md space-y-6">
            <div className="text-center">
                <h1 className="text-3xl font-bold tracking-tight text-white">Reset Password</h1>
                <div className="mt-2">
                    <p className="text-[white]">Enter your email to reset password</p>
                </div>
            </div>
            <CommonForm
                formControls={resetPasswordControls}
                buttonText={"Send"}
                formData={formData}
                setFormData={setFormData}
                onSubmit={onSubmit}
            />
             <div className="flex justify-end items-center mt-2">
                 <p className="text-[white]">Return to</p>
                <Link className="font-medium ml-2 text-[#D4AF37] hover:underline" to="/auth/login">Login</Link>
             </div>
        </div>
  )
}

export default ResetPass;