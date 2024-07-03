import React from "react";
import Image from "next/image";
import { CirclePlus, Files, HomeIcon, SearchIcon } from "lucide-react";
import Link from "next/link";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import { ModeToggle } from "./mode-toggle";
import { dark } from "@clerk/themes";
import { UserButtonComponent } from "./UserButtonComponent";

function Header() {
  return (
    <div className="flex items-center justify-between mx-auto p-2">
      <div className="flex bg-white p-2 dark:bg-white rounded-md ml-1">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={70} height={40} />
        </Link>
      </div>

      <SignedIn>
        <div className="flex-1 ml-2">
          {/* <form className='flex items-center space-x-1 bg-gray-100 p-2 rounded-md flex-1 mx-2 max-w-96'>
                        <SearchIcon className='h-4 text-gray-600' />
                        <input
                            type='text'
                            placeholder='Search'
                            className='bg-transparent outline-none flex-1 rounded-md text-black'
                            />
                    </form> */}
        </div>
        {/* Icons */}
        <div className="md:flex items-center space-x-4 px-6 ">
          <div className="md:flex items-center space-x-4 px-6 hidden ">
            <Button asChild variant="secondary">
              <Link href="/" className="icon">
                <HomeIcon className="h-5" />
                <p>Home</p>
              </Link>
            </Button>

            <Button asChild variant="secondary">
              <Link href="/status" className="icon">
                <Files className="h-5" />
                <p>Status</p>
              </Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="/" className="icon">
                <CirclePlus className="h-5" />
                <p>Apply</p>
              </Link>
            </Button>
          </div>

          <UserButtonComponent />
        </div>
      </SignedIn>
      <SignedOut>
        <div className="flex items-center space-x-4">
          <Button asChild variant="secondary">
            <SignInButton />
          </Button>
          <ModeToggle />
        </div>
      </SignedOut>

      <SignedIn>
        <ModeToggle />
      </SignedIn>
    </div>
  );
}

export default Header;
