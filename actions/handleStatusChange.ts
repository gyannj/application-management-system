"use server"

import { Application } from '@/mongodb/models/application';
import mongoose from 'mongoose';

import { sendMail } from '@/lib/mail';

type Props = {}

const handleStatusChange = async (appId: any, newStatus: string,userEmail: string) => {
    try {
        const filter = { applicationId: `${appId}` };
        const update = { status: newStatus };
        console.log(appId);
        // Find the document by _id and update the status field
        const updatedApplication = await Application.findOneAndUpdate(filter, update, {
            new: true
          });

        if (!updatedApplication) {
            throw new Error('Application not found');
        }

        console.log('Updated Application:', updatedApplication);

        await sendMail({
            to: userEmail,
            name: updatedApplication.user.firstName, // Adjust based on your data structure
            subject: 'Application Status Updated',
            body: `<p>Dear ${updatedApplication.user.firstName},</p>
                   <p>Your application status has been updated to: ${newStatus}.</p>
                   <p>Thank you.</p>`,
        });

        return true;
    } catch (error) {
        console.error('Error updating application status:', error);
        throw error; // Throw the error for handling in caller function
    }
}

export default handleStatusChange


// Adjust this import based on your project structure

