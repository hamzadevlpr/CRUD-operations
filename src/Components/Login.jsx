import axios from "axios";
import React, { useState } from "react";

function Login() {


    const [formData, setFormData] = useState({
        fName: "",
        email: "",
        password: ""

    })
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit  = (e) => {
        e.preventDefault();
        console.log(formData);
        alert("Registered Successfully");


        const url = 'http://localhost:5000/user';
        axios.post(url, formData.fName, formData.email, formData.password)
            .then((res) => {
                console.log("Request Sent to Server!")
            })
            .then((err) => {
                console.log(err)
            })
    }


    return (
        <div className="h-[92.5vh] w-full py-16 px-4 bg-slate-800">
            <div className="flex flex-col items-center justify-center">
                <div className="bg-gradient-to-r from-rose-100 to-teal-100 shadow-2xl rounded-xl lg:w-1/3  md:w-1/2 w-full p-10 relative">
                    <p tabIndex={0} role="heading" aria-label="Login to your account" className="uppercase text-4xl font-extrabold leading-8 text-gray-800 text-center">Registration</p>

                    <form className="mt-5" onSubmit={handleSubmit}>
                        <div className="flex flex-col space-y-2">
                            <div>
                                <lable className="text-sm font-medium leading-none text-gray-800">Full Name</lable>
                                <input aria-label="enter email adress" role="input" type="text" name="fName" className="bg-gray-100 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <lable className="text-sm font-medium leading-none text-gray-800">Email</lable>
                                <input aria-label="enter email adress" role="input" type="email" name="email" className="bg-gray-100 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="w-full">
                                <lable className="text-sm font-medium leading-none text-gray-800">Password</lable>
                                <div className="relative flex items-center justify-center">
                                    <input aria-label="enter Password" role="input" type="password" name="password" className="bg-gray-100 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                                        onChange={handleChange}
                                    />
                                    <div className="absolute right-0 mt-2 mr-3 cursor-pointer">
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8">
                            <button type="submit" aria-label="create my account" className="focus:ring-2 text-sm font-mdedium text-white border-0 shadow-lg bg-indigo-700 rounded-lg hover:bg-indigo-600 py-3 w-full">
                                Create my account
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
