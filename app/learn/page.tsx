import React from "react";
import Image from "next/image";
import adminDash from "@/public/Dark&Light_Mode.png";
import signUp from "@/public/signup.png";
import signIn from "@/public/signin.png";
import AddApp from "@/public/Add Application.png";

const Page = () => {
  return (
    <div className="min-h-screen p-10 bg-gray-100 bg-opacity-5">
      <div className="max-w-7xl mx-auto flex flex-col gap-y-10">
        <div className="flex flex-col md:flex-row md:gap-x-6">
          <div className="md:basis-2/3 bg-white border border-gray-300 rounded-lg overflow-hidden">
            <Image
              src={adminDash}
              alt="Admin Dashboard"
              className="object-cover p-6"
            />
          </div>
          <div className="md:basis-1/3 bg-gray-300 border border-gray-300 rounded-lg flex items-center justify-center text-4xl font-bold text-gray-700 mt-6 md:mt-0">
            01
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:gap-x-6 mt-6">
          <div className="md:basis-2/3 bg-white border border-gray-300 rounded-lg overflow-hidden">
            <Image
              src={signUp}
              alt="Sign Up"
              className="w-full object-cover p-6"
            />
          </div>
          <div className="md:basis-1/3 bg-gray-300 border border-gray-300 rounded-lg flex items-center justify-center text-4xl font-bold text-gray-700 mt-6 md:mt-0">
            02
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:gap-x-6 mt-6">
          <div className="md:basis-2/3 bg-white border border-gray-300 rounded-lg overflow-hidden">
            <Image
              src={signIn}
              alt="Sign In"
              className="w-full object-cover p-6"
            />
          </div>
          <div className="md:basis-1/3 bg-gray-300 border border-gray-300 rounded-lg flex items-center justify-center text-4xl font-bold text-gray-700 mt-6 md:mt-0">
            03
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:gap-x-6 mt-6">
          <div className="md:basis-2/3 bg-white border border-gray-300 rounded-lg overflow-hidden">
            <Image
              src={AddApp}
              alt="Add Application"
              className="object-cover cursor-pointer p-6"
            />
          </div>
          <div className="md:basis-1/3 bg-gray-300 border border-gray-300 rounded-lg flex items-center justify-center text-4xl font-bold text-gray-700 mt-6 md:mt-0">
            04
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
