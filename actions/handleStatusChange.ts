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
            subject: 'Update on Your Application Status',
    body: `
        <div style="font-family: Arial, sans-serif; color: #333;">
            <p>Dear ${updatedApplication.user.firstName},</p>
            
            <p>We hope this message finds you well. We are writing to inform you that the status of your application titled "<strong>${updatedApplication.title}</strong>" (Application ID: <strong>${updatedApplication.applicationId}</strong>) has been updated.</p>
            
            <p><strong>New Status:</strong> ${newStatus}</p>
            
            <p>We appreciate your continued interest and patience throughout this process. If you have any questions or require further assistance, please do not hesitate to contact our support team.</p>
            
            <p>Thank you for your attention to this matter.</p>
            
            <p>Best regards,</p>
            <p><strong>AMS, NIT Silchar</strong></p>
            <p style="font-size: 12px; color: #777;">This is an automated message, please do not reply directly to this email.</p>
        </div>
    `,
        });

        return true;
    } catch (error) {
        console.error('Error updating application status:', error);
        throw error; // Throw the error for handling in caller function
    }
}

export default handleStatusChange


// Adjust this import based on your project structure

