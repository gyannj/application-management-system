import React from "react";
import Image from "next/image";
import adminDash from "@/public/Dark&Light_Mode.png";
import signUp from "@/public/signup.png";
import signIn from "@/public/signin.png";
import AddApp from "@/public/Add Application.png";
type Props = {};

function Page({}: Props) {
  return (
    <div className="min-h-screen p-10">
      <div className="flex flex-col gap-y-10">
        <div className="flex flex-row gap-x-6">
          <div className="basis-2/3 bg-white bg-opacity-70 shadow-lg rounded-lg overflow-hidden shadow-gray-800">
            <Image
              src={adminDash}
              alt="Admin Dashboard"
              className="object-cover cursor-pointer p-6"
            />
          </div>
          <div className="basis-1/3 bg-blue-200 bg-opacity-70 shadow-lg rounded-lg flex items-center justify-center text-2xl font-semibold text-gray-700 shadow-gray-800">
            02
          </div>
        </div>
        <div className="flex flex-row gap-x-6">
          <div className="basis-2/3 bg-white bg-opacity-70 shadow-lg rounded-lg overflow-hidden shadow-gray-800">
            <Image
              src={signUp}
              alt="Sign Up"
              className="w-full object-cover p-6"
            />
          </div>
          <div className="basis-1/3 bg-blue-200 bg-opacity-70 shadow-lg rounded-lg flex items-center justify-center text-2xl font-semibold text-gray-700 shadow-gray-800">
            02
          </div>
        </div>
        <div className="flex flex-row gap-x-6">
          <div className="basis-2/3 bg-white bg-opacity-70 shadow-lg rounded-lg overflow-hidden shadow-gray-800">
            <Image
              src={signIn}
              alt="Sign In"
              className="w-full object-cover p-6"
            />
          </div>
          <div className="basis-1/3 bg-blue-200 bg-opacity-70 shadow-lg rounded-lg flex items-center justify-center text-2xl font-semibold text-gray-700 shadow-gray-800">
            02
          </div>
        </div>
        <div className="flex flex-row gap-x-6">
          <div className="basis-2/3 bg-white bg-opacity-70 shadow-lg rounded-lg overflow-hidden shadow-gray-800">
            <Image
              src={AddApp}
              alt="Add Application"
              className="object-cover cursor-pointer p-6"
            />
          </div>
          <div className="basis-1/3 bg-blue-200 bg-opacity-70 shadow-lg rounded-lg flex items-center justify-center text-2xl font-semibold text-gray-700 shadow-gray-800">
            02
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
