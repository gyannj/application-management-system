import { notFound } from 'next/navigation';
import { getApplicationById } from '@/actions/getAppllicationById'; // Adjust path as needed
import { IApplicationDocument } from '@/mongodb/models/application';

interface ApplicationPageProps {
  params: {
    id: string;
  };
}

export default async function ApplicationPage({ params }: ApplicationPageProps) {
  const { id } = params;

  try {
    const application = await getApplicationById(id);

    if (!application) {
      return notFound();
    }

    return (
      <div className='bg-dark-1 p-8 text-textColor'>
        <div className='text-textColor font-bold text-4xl mb-10'>
          Application Details
        </div>
        <div className='flex flex-col gap-4'>
          <p><strong>Application ID:</strong> {application.applicationId}</p>
          <p><strong>Name:</strong> {application.user.firstName} {application.user.lastName}</p>
          <p><strong>Email:</strong> {application.user.email}</p>
          <p><strong>Title:</strong> {application.title}</p>
          <p><strong>Description:</strong> {application.description}</p>
          <p><strong>Submitted On:</strong> {new Date(application.createdAt).toLocaleDateString('en-GB')}</p>
          <p><strong>Status:</strong> {application.status}</p>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error fetching application:', error);
    return notFound();
  }
}
