import React, { useState } from "react";

function Login() {
    return (
        <div className=" w-full py-16 px-4 bg-gradient-to-l from-cyan-500 via-indigo-500 to-slate-200">
            <div className="flex flex-col items-center justify-center">
                <div className="backdrop-blur-sm bg-white/30 shadow rounded-xl lg:w-1/3  md:w-1/2 w-full p-10 relative">
                    <p tabIndex={0} role="heading" aria-label="Login to your account" className="uppercase text-4xl font-extrabold leading-8 text-gray-800 text-center">Registration</p>

                    <form className="mt-5">
                        <div className="flex flex-col space-y-2">
                            <div>
                                <lable className="text-sm font-medium leading-none text-gray-800">Full Name</lable>
                                <input aria-label="enter email adress" role="input" type="email" className="bg-gray-100 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2" />
                            </div>
                            <div>
                                <lable className="text-sm font-medium leading-none text-gray-800">Email</lable>
                                <input aria-label="enter email adress" role="input" type="email" className="bg-gray-100 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2" />
                            </div>
                            <div className="w-full">
                                <lable className="text-sm font-medium leading-none text-gray-800">Password</lable>
                                <div className="relative flex items-center justify-center">
                                    <input aria-label="enter Password" role="input" type="password" className="bg-gray-100 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2" />
                                    <div className="absolute right-0 mt-2 mr-3 cursor-pointer">
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8">
                            <button role="button" aria-label="create my account" className="focus:ring-2 text-sm font-mdedium text-white border-0 shadow-lg bg-indigo-700 rounded-lg hover:bg-indigo-600 py-3 w-full">
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
