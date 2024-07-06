"use server"

import { User } from "@/mongodb/models/user"

import connectDB from "@/mongodb/db"

export async function createUserAction(user: any) {
    try {
        await connectDB();
        const newUser = await User.create(user);
        return JSON.parse(JSON.stringify(newUser));   
    } catch (error) {
        console.log(error);
    }
}
