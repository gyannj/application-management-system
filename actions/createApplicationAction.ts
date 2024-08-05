'use server'
import { IApplication } from "@/mongodb/models/application";
import { IUser } from "@/mongodb/models/user";
import { currentUser } from "@clerk/nextjs/server";
import { Application } from "@/mongodb/models/application";
import { randomUUID } from "crypto";
import { revalidatePath } from "next/cache";
import { auth } from '@clerk/nextjs/server';
import connectDB from "@/mongodb/db";


export interface ApplicationSubmitBody {
    user: IUser;
    title: string;
    description?: string;
    applicationId: string;
    status: string;
}

async function createApplicationAction(formData: FormData){
    await connectDB();
    const { sessionClaims } = auth();
    const user = await currentUser();
    if (!user) {
        throw new Error('You must be signed in to create an application');
    }
    function generateApplicationID() {
        const prefix = 'AMSNITS';
      
        // Get current timestamp in milliseconds (13 digits)
        const timestamp = Date.now().toString();
      
        // Generate a random number to fill in the remaining digits
        const randomPart = Math.floor(Math.random() * 100000).toString().padStart(5, '0');
      
        // Combine the timestamp and random part to form the unique part (11 digits)
        const uniquePart = timestamp.slice(-6) + randomPart;
      
        // Combine with the prefix to form the full ID
        const applicationID = prefix + uniquePart;
      
        return applicationID;
      }
      
    const randomApplicationId = generateApplicationID();
    const applicationTitle = formData.get('apptitle') as string;
    const applicationDescription = formData.get('appdescription') as string;
    const status = 'pending';
    const userDB: IUser = {
        userId: user.id,
        firstName:user.firstName || "",
        lastName:user.lastName || "",
        email: sessionClaims?.email || ""
        
      }
    try {
        const body = {
            user: userDB,
            title: applicationTitle,
            description: applicationDescription,
            applicationId: randomApplicationId,
            status: status
        }
        await Application.create(body);

    } catch (error) {
        console.log("Failed to Create Application in createApplicationAction", error)
    }
    revalidatePath('/')
}

export default createApplicationAction