'use server';

import { Application } from '@/mongodb/models/application';
import connectDB from '@/mongodb/db';

export async function getApplicationById(applicationId: string) {
    await connectDB();

    try {
        const application = await Application.findOne({ applicationId }).exec();
        if (!application) {
            throw new Error('Application not found');
        }
        return application;
    } catch (error) {
        console.error("Failed to fetch application:", error);
        throw new Error('Failed to fetch application');
    }
}
