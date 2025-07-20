import CommonForm from "@/components/common/form";
import { loginFormControls } from "@/components/config";
import { useState } from "react";
import { Link } from "react-router-dom";

const initialState = {
    email : "",
    password : ""
}

const AuthLogin = () => {
    const [ formData, setFormData ] = useState(initialState);
    
    const onSubmit = () => {

    }

    return(
        <div className="mx-auto w-full max-w-md space-y-6">
            <div className="text-center">
                <h1 className="text-3xl font-bold tracking-tight text-white">Sign in to your account</h1>
            </div>
            <CommonForm
                formControls={loginFormControls}
                buttonText={"Login"}
                formData={formData}
                setFormData={setFormData}
                onSubmit={onSubmit}
            />
            <div className="flex justify-end items-center mt-2">
                <p className="text-[white]">Don't have an account</p>
                <Link className="font-medium ml-2 text-[#D4AF37] hover:underline" to="/auth/register">Register</Link>
            </div>
        </div>
    );
}

export default AuthLogin;