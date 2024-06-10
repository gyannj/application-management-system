import { IApplication } from "@/mongodb/models/application";
import { IUser } from "@/mongodb/models/user";
import { currentUser } from "@clerk/nextjs/server";
import { Application } from "@/mongodb/models/application";
import { randomUUID } from "crypto";
import { revalidatePath } from "next/cache";

async function createApplicationAction(formData: FormData){
    const user = await currentUser();
    if (!user) {
        throw new Error('You must be signed in to create an application');
    }
    const applicationId = randomUUID();
    const applicationTitle = formData.get('apptitle') as string;
    const applicationDescription = formData.get('appdescription') as string;
    const status = 'pending';
    const userDB: IUser = {
        userId: user.id,
        email: user.emailAddress,
        firstName:user.firstName || "",
        lastName:user.lastName || "",
        
      }
}