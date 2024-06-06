import { Button } from '@/components/ui/button'
import { SignedIn, SignedOut } from '@clerk/nextjs'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div>
      <SignedIn>

      </SignedIn>
      <SignedOut>
        <div className=' flex flex-col w-full h-screen m-auto items-center justify-center'>
            
<h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Application Management System</h1>
<p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">We implemented this AMS using latest technologies such as NextJS, Clerk Auth, Tailwind.</p>

    <div className="inline-flex items-center justify-center ">
      <Button asChild variant='outline'>
        <Link href='/' >
          <p >Learn More</p>
          <ChevronRight className="h-4 w-4" />
        </Link>
      </Button>
   
   
</div>

        </div>
      </SignedOut>
    </div>
  )
}

export default page