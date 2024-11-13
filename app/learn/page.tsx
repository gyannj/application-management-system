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
          Explore our Application Management System to manage and track application statuses with ease. Sign in to access your account and switch between light and dark modes for a comfortable viewing experience.
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
          Sign in to the application tracker with ease using Google or your email. Donot have an account? Quickly sign up to start tracking your applications and stay updated on their status.
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
          Sign in seamlessly with your Google account to access the application tracker. This quick and secure option eliminates the need to remember additional passwords, allowing you to get started immediately.
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
          Easily submit your application details by filling out the name, title, and description fields. Save your changes to begin tracking your application and stay updated on its status.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
