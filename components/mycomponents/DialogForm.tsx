"use client"
import { useUser } from '@clerk/nextjs'
import { useRef,useState } from 'react'
import { toast } from 'sonner';
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import createApplicationAction from '@/actions/createApplicationAction'

export function DialogForm() {
  const ref = useRef<HTMLFormElement>(null);
  const user = useUser();

  const handlePostAction = async(formData: FormData) => {
    const formDataCopy = formData;
    ref?.current?.reset();

    const title = formDataCopy.get('apptitle') as string;
    const description = formDataCopy.get('appdescription') as string;
    const name = formDataCopy.get('name') as string;
    
    if(!title.trim() || !description.trim() || !name.trim()){
      throw new Error('Please fill all the fields');
    }

    try {
      await createApplicationAction(formDataCopy);
    } catch (error) {   
      console.log(`Failed to Create Application ${error}`)
    }

  }


  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary" className="border-solid border-[1px] border-sky-300">Add Application</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Application Details</DialogTitle>
          <DialogDescription>
            Enter details of your application here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>

        <form ref={ref} action = {(formData)=> {
           handlePostAction(formData);
        }}>

          <div className="grid gap-4 py-4">

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input name="name" id="name" className="col-span-3 border outline-none" placeholder=" Enter Your Name..." />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Title
              </Label>
              <Input name="apptitle" id="name" className="col-span-3 border outline-none" placeholder=" Enter Your Title..." />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Description
              </Label>
              <Input name="appdescription" id="name" className="col-span-3 border outline-none" placeholder=" Enter Your Description..." />
            </div>

            


            <DialogFooter>
              <Button type="submit">Save changes</Button>
            </DialogFooter>

          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
