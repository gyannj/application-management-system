import connectDB from "@/mongodb/db";
import { columns } from "./columns"
import { columnsuser } from "./columns-user";
import { DataTable } from "@/components/mycomponents/data-table"
import { Application, IApplicationDocument } from "@/mongodb/models/application";
import { currentUser } from '@clerk/nextjs/server'
import { checkRole } from "@/utils/roles";
import mongoose, {Schema,  Document, models, Model} from "mongoose";

export default async function Page() {
  await connectDB();
 
  const user = await currentUser();
  const userman = user?.id.toString() || ""; 
  // console.log(userman);

  // const data = await Application.findApplicationById(userman);
  const data= checkRole("admin")?await Application.getAllApplications():  await Application.findApplicationsByUserId(userman);
  const isAdmin = checkRole("admin");
  if(isAdmin){
    return (
      <section className="py-24">
          <div className="container">
             <h1 className="mb-6 text-3xl font-bold">All Applications</h1>
              <DataTable columns={columns} data={JSON.parse(JSON.stringify(data))} />
          </div>
  
      </section>
  
    )
  }
  else{

    return (
      <section className="py-24">
          <div className="container">
             <h1 className="mb-6 text-3xl font-bold">All Applications</h1>
              <DataTable columns={columnsuser} data={JSON.parse(JSON.stringify(data))} />
          </div>
  
      </section>
  
    )
  }
 
}
