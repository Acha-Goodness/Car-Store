import CommonForm from "@/components/common/form";
import { registerFormControls } from "@/components/config";
import { useState } from "react";
import { Link } from "react-router-dom";

const initialState = {
    userName : "",
    email : "",
    password : ""
}

const AuthRegister = () => {
    const [ formData, setFormData ] = useState(initialState);

    const onSubmit = () => {

    }

    return(
        <div className="mx-auto w-full max-w-md space-y-6">
            <div className="text-center">
                <h1 className="text-3xl font-bold tracking-tight text-white">Create new account</h1>
            </div>
            <CommonForm
                formControls={registerFormControls}
                buttonText={"Sign Up"}
                formData={formData}
                setFormData={setFormData}
                onSubmit={onSubmit}
            />
            <div className="flex justify-end items-center mt-2">
                <p className="text-[white]">Already have an account</p>
                <Link className="font-medium ml-2 text-[#D4AF37] hover:underline" to="/auth/login">Login</Link>
            </div>
        </div>
    )
}

export default AuthRegister