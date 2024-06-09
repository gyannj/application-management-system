import{ IUser} from './user';
import mongoose, {Schema,  Document, models, Model} from "mongoose";

export interface IApplication {
    user: IUser;
    applicationId: string;
    title: string;
    description?: string;
    status: string;
    createdAt: Date;
}

interface IApplicationMethods {
    approveStatus(): Promise<void>;
    rejectStatus(): Promise<void>;
    deleteApplication(): Promise<void>;
}
export interface IApplicationDocument extends IApplication, IApplicationMethods{}

interface IApplicationStatics {
    getAllApplications(): Promise<IApplicationDocument[]>;
    findApplicationById(applicationId: string): Promise<IApplicationDocument>;
    findApplicationsByUserId(userId: string): Promise<IApplicationDocument[]>;
}

interface IApplicationModel extends Model<IApplicationDocument>, IApplicationStatics {}


const ApplicationSchema = new Schema <IApplicationDocument>(
    {
        user: {
            userId : {type: String, required: true},
            firstName: {type: String, required: true},
            lastName: {type: String},
            email: {type: String, required: true}
        },
        applicationId: {type: String, required: true},
        title: {type: String, required: true},
        description: {type: String},
        status: {type: String, required: true},
    },
    {timestamps: true}
)

ApplicationSchema.methods.approveStatus = async function() {
    try {
        await this.updateOne({status: "approved"});
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(`Error approving application: ${error.message}`);
        } else {
            throw new Error('Unknown error occurred while approving');
        }
    }
}
ApplicationSchema.methods.rejectStatus = async function() {
    try {
        await this.updateOne({status: "reject"});
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(`Error approving application: ${error.message}`);
        } else {
            throw new Error('Unknown error occurred while approving');
        }
    }
}
ApplicationSchema.methods.deleteApplication = async function() {
    try {
        await this.deleteOne({_id: this._id});
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(`Error rejecting application: ${error.message}`);
        } else {
            throw new Error('Unknown error occurred while rejecting');
        }
    }
}

ApplicationSchema.statics.findApplicationById = async function(applicationId: string) {
    try {
        const application = await this.findOne({applicationId: applicationId});
        if (!application) {
            throw new Error('Application not found');
        }
        return application;
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(`Error rejecting application: ${error.message}`);
        } else {
            throw new Error('Unknown error occurred while rejecting');
        }
    }
}

ApplicationSchema.statics.findApplicationsByUserId = async function(userId: string) {
    try {
        const applications = await this.find({'user.userId': userId});
        return applications.map((application: IApplicationDocument) => ({
            ...application,
        }));
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(`Error rejecting application: ${error.message}`);
        } else {
            throw new Error('Unknown error occurred while rejecting');
        }
    }
}

ApplicationSchema.statics.getAllApplications = async function() {
    try {
        const applications= await this.find().populate('user').sort({createdAt: -1}).lean();

        return applications.map((application: IApplicationDocument) =>( {
            ...application,
            // _id: application._id.toString(),

        }));
    } catch (error) {
        
    }
}

export const Application = models.Application as IApplicationModel || mongoose.model<IApplicationDocument, IApplicationModel>('Application', ApplicationSchema);