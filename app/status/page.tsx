import connectDB from "@/mongodb/db";
import { columns } from "./columns"
import { DataTable } from "@/components/mycomponents/data-table"
import { Application, IApplicationDocument } from "@/mongodb/models/application";

export default async function Page() {
  await connectDB();
  const data = await Application.getAllApplications();
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
