import connectDB from "@/mongodb/db";
import { columns } from "./columns"
import { DataTable } from "@/components/mycomponents/data-table"
import { Application, IApplicationDocument } from "@/mongodb/models/application";
import { currentUser } from '@clerk/nextjs/server'
// import { useUser } from "@clerk/clerk-react";
import mongoose, {Schema,  Document, models, Model} from "mongoose";

export default async function Page() {
  await connectDB();
  // const user = await currentUser();
  // console.log(user);
  // const { isLoaded, isSignedIn, user } = useUser();
  const user = await currentUser();
  const userman = user?.id.toString() || ""; 
  // console.log(userman);

  // const data = await Application.findApplicationById(userman);
  const data = await Application.findApplicationsByUserId(userman);
  // const data = await Application.getAllApplications();
    // console.log(data)
  return (
    <section className="py-24">
        <div className="container">
           <h1 className="mb-6 text-3xl font-bold">All Applications</h1>
            <DataTable columns={columns} data={data} />
        </div>

    </section>

  )
}
